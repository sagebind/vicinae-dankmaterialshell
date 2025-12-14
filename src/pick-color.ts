import { execFile } from "node:child_process";
import { setTimeout } from "node:timers/promises";
import { promisify } from "node:util";
import { closeMainWindow } from "@vicinae/api";

const execFileAsync = promisify(execFile);

export default async function () {
    await closeMainWindow();

    // Wait a moment to ensure the main window is closed before opening the color picker.
    await setTimeout(100);

    // Open the color picker and place the result in the clipboard.
    await execFileAsync("dms", ["color", "pick", "--autocopy"]);
}
