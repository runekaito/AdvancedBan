import { CommandPermissionLevel } from "bdsx/bds/command";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { CxxString, int32_t } from "bdsx/nativetype";
import * as fs from "fs";
import {
  NoPlayerConsoleText,
  NoPlayerText,
  LogoConsoleText,
  TimeBanCommandName,
  TimeBanCommandDescription,
} from "../export";
import {
  Path,
  TimeBannedConsoleText,
  MinutesUnit,
  SecondsUnit,
  HourUnit,
  TimeBannedText,
} from "../export";
command
  .register(
    TimeBanCommandName,
    TimeBanCommandDescription /* Command permision */,
    CommandPermissionLevel.Operator
  )
  .overload(
    (p, o, op) => {
      const owner = o.getEntity() as ServerPlayer;
      const jsi = JSON.parse(fs.readFileSync(Path, "utf8")).masterData;
      let data_arr: any[] = [];
      let check = false;
      let name = "";
      for (const i in jsi) {
        const item = jsi[i];
        if (
          item.name.toString().toUpperCase() ==
            p.selector.toString().toUpperCase() ||
          item.ip == p.selector ||
          item.xuid == p.selector
        ) {
          item.num = p.num;
          item.unit = p.unit;
          name = item.name;
          check = true;
        }
        data_arr.push(item);
      }
      let unit = "";
      switch (p.unit) {
        case 0:
          unit = SecondsUnit;
          break;
        case 1:
          unit = MinutesUnit;
          break;
        case 2:
          unit = HourUnit;
          break;
      }
      if (check) {
        if (owner == null) {
          console.log(
            LogoConsoleText +
              TimeBannedConsoleText.replace("%s", name)
                .replace("%d", p.num.toString())
                .replace("%e", unit)
          );
        } else {
          owner.sendMessage(
            TimeBannedText.replace("%s", name)
              .replace("%d", p.num.toString())
              .replace("%e", unit)
          );
        }
      } else {
        if (owner == null) {
          console.log(LogoConsoleText + NoPlayerConsoleText);
        } else {
          owner.sendMessage(NoPlayerText);
        }
      }
      const masterData = JSON.stringify({ masterData: data_arr }, null, " ");
      fs.writeFileSync(Path, masterData);
    },
    {
      selector: CxxString,
      num: int32_t,
      unit: command.enum("Unit", {
        s: 0,
        m: 1,
        h: 2,
      }),
    }
  );
