import {app, BrowserWindow, screen} from "electron";
import path from "path"
import { isDev } from "./util.js";

app.on("ready", () => {
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize
    const mainWindow = new BrowserWindow(
        {
            width, 
            height,
            frame: false,
            webPreferences:
            {
                nodeIntegration: true
            }
        });
    if (isDev()) {
        mainWindow.loadURL("http://localhost:5132");
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
    }
})