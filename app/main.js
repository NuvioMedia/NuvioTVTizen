(function openHostedNuvioTv() {
  var hostedAppUrl = "https://web.nuvioapp.space/";
  var tvInput = window.tizen && window.tizen.tvinputdevice;

  function buildFreshHostedUrl() {
    try {
      var url = new URL(hostedAppUrl);
      url.searchParams.set("source", "tizenbrew");
      url.searchParams.set("wrapper", "tizen");
      url.searchParams.set("_cb", String(Date.now()));
      return url.toString();
    } catch (_) {
      return hostedAppUrl + "?_cb=" + encodeURIComponent(String(Date.now()));
    }
  }

  if (tvInput && typeof tvInput.registerKey === "function") {
    ["MediaPlay", "MediaPause", "MediaPlayPause", "MediaFastForward", "MediaRewind"].forEach(function registerKey(keyName) {
      try {
        tvInput.registerKey(keyName);
      } catch (_) {}
    });
  }

  window.location.replace(buildFreshHostedUrl());
}());
