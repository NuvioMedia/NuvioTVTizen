<div align="center">

  <img src="https://github.com/tapframe/NuvioTV/raw/dev/assets/brand/app_logo_wordmark.png" alt="NuvioTV TizenBrew" width="300" />
  <br />
  <br />

  <p>
    Public <b>TizenBrew wrapper</b> for Nuvio TV.
    <br />
    Lightweight TV launcher • Hosted app wrapper • Install directly in TizenBrew
  </p>

  <p>
    ⚠️ <b>Status: BETA</b> — experimental and may be unstable.
  </p>

</div>

## About

**NuvioTV TizenBrew** is a lightweight wrapper that opens the hosted Nuvio TV web app inside **TizenBrew**.

It is not the main application source code. This repository only contains the small Samsung TV wrapper used to launch the hosted experience.

## Install

In TizenBrew, add the GitHub module:

```text
NuvioMedia/NuvioTVTizen
```

## For Developers

- Main shared app source: `NuvioMedia/NuvioWeb`
- This wrapper repo stays intentionally small and only handles the TizenBrew launch experience
- If you want to inspect or modify the wrapper locally, update `app/index.html`, `app/main.js`, and `package.json`
