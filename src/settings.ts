import { call } from "./dms";
import { closeMainWindow } from '@vicinae/api';

export default async function() {
    call("settings", "open");
    await closeMainWindow();
}
