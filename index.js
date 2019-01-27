const promiseSetTimeout = ms =>
  new Promise((resolve, reject) => {
    !(setTimeout && (typeof ms === 'number')) && reject(new Error('Invalid delay specified'))
    ms = ~~ms
    setTimeout(resolve, ms);
  })

;const promiseRequestAnimationFrame = _ => 
  (typeof requestAnimationFrame !== 'undefined'
    ? new Promise(requestAnimationFrame)
    : promiseSetTimeout(0))

;module.exports = {
  promiseSetTimeout,
  promiseRequestAnimationFrame,
};
