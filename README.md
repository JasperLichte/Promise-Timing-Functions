# Promise-Timing-Functions
>  Use setInterval, setTimeout and requestAnimationFrame using ES2015 Promises and/or async/await

## Installation

```
npm i promise-timing-functions
```

## Usage

### Importing

```javascript
const { promiseSetTimeout, promiseRequestAnimationFrame } = require('promise-timing-functions')
```

### promiseSetTimeOut

```javascript
console.log(1)
await promiseSetTimeout(1000) // pause for 1000ms
console.log(2)
```

### promiseRequestAnimationFrame

```javascript
(async function loop() {
  console.log(Math.random())
  // infinite loop. perfect for animating objects on the page

  await promiseRequestAnimationFrame()
  loop()
})()
```

