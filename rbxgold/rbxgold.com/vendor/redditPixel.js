/* eslint-disable */
!(function (w, d) {
  if (!w.rdt) {
    var p = (w.rdt = function () {
      p.sendEvent
        ? p.sendEvent.apply(p, arguments)
        : p.callQueue.push(arguments);
    });
    p.callQueue = [];
    var t = d.createElement("script");
    (t.src = "https://www.redditstatic.com/ads/pixel.js"), (t.async = !0);
    var s = d.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(t, s);
  }
})(window, document);
rdt("init", "t2_tn2efgo6", {
  optOut: false,
  useDecimalCurrencyValues: true,
  email: "test.email@gmail.com",
});
rdt("track", "PageVisit");
