import { spawn } from "child_process";
import { closeMainWindow } from '@vicinae/api';

export default async function() {
    const child = spawn("dms", ["restart"]);
    child.unref();
    await closeMainWindow();
}
