// 适配*横屏*iPad的稿即1024px的一倍稿
; (function () {
    var doc = document
    var win = window
    var docEl = doc.documentElement
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    // var calced = false
    var recalc = function () {
      // console.log(323232, calced)
      var clientWidth = docEl.clientWidth
      // if (!clientWidth || calced) return;
      if (!clientWidth) return
      if (clientWidth >= 1024) {
        docEl.style.fontSize = 100 * (clientWidth / 1024) + 'px'
      } else {
        docEl.style.fontSize = 100 * (568 / 750) + 'px'
      }
      // calced = true
    }
    recalc() // 这里导致执行两遍吧
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
  })()
  