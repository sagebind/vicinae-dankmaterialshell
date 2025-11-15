import { call } from "./dms";

export default async function() {
    call("inhibit", "toggle");
}
