import { events } from "bdsx/event";
import * as fs from "fs";
import {
  Path,
  LogoText,
  RemainingTimeText,
  MinutesUnit,
  SecondsUnit,
  HourUnit,
} from "./export";
import { ServerPlayer } from "bdsx/bds/player";
import { DisconnectPacket } from "bdsx/bds/packets";

events.playerJoin.on((ev) => {
  const jsonObject = JSON.parse(fs.readFileSync(Path, "utf8")).masterData;
  const data_arr: any[] = [];
  let check = false;
  let text = "";
  let timeTxt = "";
  let check2 = false;
  const pl = ev.player as ServerPlayer;
  for (const i in jsonObject) {
    const item = jsonObject[i];
    switch (item.level) {
      case 0:
        if (item.name == pl.getNameTag()) {
          check = true;
          text = item.text;
        }
        break;
      case 1:
        if (item.ip == pl.getNetworkIdentifier().getAddress().split("|")[0]) {
          check = true;
          text = item.text;
        }
        break;
      case 2:
        if (item.xuid == pl.getXuid()) {
          check = true;
          text = item.text;
        }
    }
    const t1 = new Date(item.time);
    const t2 = new Date();
    const diff = t2.getTime() - t1.getTime();
    const diffHour = diff / (1000 * 60 * 60);
    const diffMinute = (diffHour - Math.floor(diffHour)) * 60;
    const diffSecond = (diffMinute - Math.floor(diffMinute)) * 60;
    switch (item.unit) {
      case 0:
        if (diffSecond > item.num) {
          check = false;
          check2 = true;
        } else {
          const math = Math.floor((item.num - diffSecond) * 10) / 10;
          timeTxt = RemainingTimeText.replace("%e", SecondsUnit).replace(
            "%d",
            math.toString()
          );
          check = true;
        }
        break;
      case 1:
        if (diffMinute > item.num) {
          check = false;
          check2 = true;
        } else {
          const math = Math.floor((item.num - diffMinute) * 10) / 10;
          timeTxt = RemainingTimeText.replace("%e", MinutesUnit).replace(
            "%d",
            math.toString()
          );
          check = true;
        }
        break;
      case 2:
        if (diffHour > item.num) {
          check = false;
          check2 = true;
        } else {
          const math = Math.floor((item.num - diffHour) * 10) / 10;
          timeTxt = RemainingTimeText.replace("%e", HourUnit).replace(
            "%d",
            math.toString()
          );
          check = true;
        }
        break;
    }
    if (!check2) {
      data_arr.push(item);
      check2 = false;
    }
  }
  const masterData = JSON.stringify({ masterData: data_arr }, null, " ");
  fs.writeFileSync(Path, masterData);
  if (check) {
    const ni = pl.getNetworkIdentifier();
    let pk = DisconnectPacket.allocate();
    pk.message = LogoText + text + "\n" + timeTxt;
    pk.sendTo(ni);
    pk.dispose();
  }
});
