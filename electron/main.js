const { app, BrowserWindow, session } = require("electron");
const path = require("path");

app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((_wc, perm, cb) => cb(perm === "media"));
  const win = new BrowserWindow({
    width: 440, height: 760, autoHideMenuBar: true, title: "Voice Bedrock Elfu",
    // mantém o áudio rodando mesmo com o Minecraft em primeiro plano
    webPreferences: { backgroundThrottling: false },
  });
  win.loadFile(path.join(__dirname, "..", "www", "index.html"));
});
app.on("window-all-closed", () => app.quit());
