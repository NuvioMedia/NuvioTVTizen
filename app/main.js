(function openHostedNuvioTv() {
  var hostedAppUrl = "https://web.nuvioapp.space/";
  var tvInput = window.tizen && window.tizen.tvinputdevice;
  var launchUrl = buildFreshHostedUrl();
  var hasAttemptedLaunch = false;

  function buildFreshHostedUrl() {
    try {
      var url = new URL(hostedAppUrl);
      url.searchParams.set("source", "tizenbrew");
      url.searchParams.set("wrapper", "tizen");
      url.searchParams.set("_cb", String(Date.now()));
      return url.toString();
    } catch (_) {
      return hostedAppUrl + "?source=tizenbrew&wrapper=tizen&_cb=" + encodeURIComponent(String(Date.now()));
    }
  }

  function registerKey(keyName) {
    if (tvInput && typeof tvInput.registerKey === "function") {
      try {
        tvInput.registerKey(keyName);
      } catch (_) {}
    }
  }

  function openFallbackLink() {
    var fallbackLink = document.getElementById("fallback-link");
    if (!fallbackLink) {
      return;
    }

    fallbackLink.href = launchUrl;

    try {
      fallbackLink.click();
    } catch (_) {}
  }

  function launchHostedApp() {
    if (hasAttemptedLaunch) {
      return;
    }

    hasAttemptedLaunch = true;

    [
      "MediaPlay",
      "MediaPause",
      "MediaPlayPause",
      "MediaStop",
      "MediaFastForward",
      "MediaRewind",
      "MediaTrackPrevious",
      "MediaTrackNext"
    ].forEach(registerKey);

    try {
      window.location.replace(launchUrl);
    } catch (_) {}

    window.setTimeout(function retryWithHref() {
      if (String(window.location.href || "").indexOf("web.nuvioapp.space") === -1) {
        try {
          window.location.href = launchUrl;
        } catch (_) {}
      }
    }, 150);

    window.setTimeout(function retryWithAnchor() {
      if (String(window.location.href || "").indexOf("web.nuvioapp.space") === -1) {
        openFallbackLink();
      }
    }, 400);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", launchHostedApp, { once: true });
  } else {
    launchHostedApp();
  }

  window.setTimeout(launchHostedApp, 0);
}());
