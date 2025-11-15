import { spawn } from "child_process";

export function call(command: string, ...args: string[]) {
    const child = spawn("niri", ["msg", "action", "spawn", "--", "dms", "ipc", "call", command, ...args]);
    child.unref();
}
