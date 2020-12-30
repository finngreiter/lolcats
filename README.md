# lolcats

rainbows!

inspired by [busyloop's](https://github.com/busyloop) [lolcat](https://github.com/busyloop/lolcat)

## usage

`npm i lolcats`

```javascript
const lolcats = require('lolcats');

// console.log from package
lolcats.print('hello', 'this is lolcats!');
// or
lolcats.print('hello this is lolcats!');
// or
lolcats.print('hello', 'this', 'is', 'lolcats!');

// console.log yourself
console.log(lolcats.rainbow('hello', 'this is lolcats!'));
// or
console.log(lolcats.rainbow('hello this is lolcats!'));
// or
console.log(lolcats.rainbow('hello', 'this', 'is', 'lolcats!'));
```

![example](media/screenshot.jpg)

## api

- `lolcats.rainbow(...x)` returns a rainbow string
- `lolcats.print(...x)` console.logs a rainbow string
