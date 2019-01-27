const { promiseSetTimeout, promiseRequestAnimationFrame } = require('./index.js')

;(async _ => {
  console.log(1)
  await promiseSetTimeout(1000)
  console.log(2); 
})()

;(async function loop() {
  console.log(Math.random())  

  await promiseRequestAnimationFrame()
  loop()
})();
