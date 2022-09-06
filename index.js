import { argv } from 'node:process';
import chalk from 'chalk';
import prompt from 'prompt';
import randomColor from 'randomcolor';

const color = randomColor({ luminosity: argv[3], hue: argv[2] });

const block = `##############################
##############################
##############################
#####                    #####
#####      ${color}       #####
#####                    #####
##############################
##############################
##############################`;

if (argv[2] && argv[3]) {
  console.log(
    chalk
      .hex(randomColor({ luminosity: argv[3], hue: argv[2] }))
      .visible(block),
  );
} else if (argv[2] === 'ask') {
  prompt.start();
  prompt.get(['colorname', 'luminosity'], function (err, result) {
    const userHue = result.colorname;
    const userLum = result.luminosity;
    console.log(
      chalk
        .hex(randomColor({ luminosity: userLum, hue: userHue }))
        .visible(block),
    );
  });
} else if (argv[2]) {
  console.log(chalk.hex(randomColor({ hue: argv[2] })).visible(block));
} else {
  console.log(chalk.hex(color).visible(block));
}
