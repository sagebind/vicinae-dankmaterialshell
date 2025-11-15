import { call } from "./dms";
import { closeMainWindow } from '@vicinae/api';

export default async function() {
    call("file", "browse", "wallpaper");
    await closeMainWindow();
}
