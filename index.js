const chalk = require('chalk');

const r = chalk.rgb(255, 0, 0);
const o = chalk.rgb(255, 106, 0);
const y = chalk.rgb(255, 255, 0);
const g = chalk.rgb(0, 255, 0);
const b = chalk.rgb(0, 0, 255);
const i = chalk.rgb(64, 6, 154);
const v = chalk.rgb(128, 0, 128);

let colorFns = [r, o, y, g, b, i, v];

const rainbow = (...x) => {
  let e = x.join(' ').split(' ');
  let c = { counter: 0, limit: 6 };
  let n = [];
  e.forEach(u => {
    let y = u.split('').map(j => {
      let d = colorFns[c.counter](j);
      if (c.counter >= c.limit) c.counter = 0;
      else c.counter++;
      return d;
    });
    n.push(y.join(''));
  });

  return n.join(' ');
};

const print = (...x) => {
  console.log(rainbow(...x));
};

module.exports = { rainbow, print };
