import { CommandPermissionLevel } from "bdsx/bds/command";
import { command } from "bdsx/command";
import * as fs from "fs";
import {
  Path,
  BannedText,
  NoPlayerText,
  BannedConsoleText,
  NoPlayerConsoleText,
} from "../export";
import { CxxString } from "bdsx/nativetype";
import { tellAllRaw } from "../Functions";
import { ServerPlayer } from "bdsx/bds/player";
import {
  UnBanText,
  UnBanConsoleText,
  LogoConsoleText,
  UnBanCommandName,
  UnBanCommandDescription,
} from "../export";
command
  .register(
    UnBanCommandName,
    UnBanCommandDescription /* Command permision */,
    CommandPermissionLevel.Operator
  )
  .overload(
    (p, o, op) => {
      const owner = o.getEntity() as ServerPlayer;
      const jsi = JSON.parse(fs.readFileSync(Path, "utf8")).masterData;
      let data_arr: any[] = [];
      let name = "";
      for (const i in jsi) {
        const item = jsi[i];
        if (
          item.name == p.param ||
          item.ip == p.param ||
          item.xuid == p.param
        ) {
          name = item.name;
        } else {
          data_arr.push(item);
        }
      }
      if (name != "") {
        const masterData: string = JSON.stringify(
          { masterData: data_arr },
          null,
          " "
        );
        fs.writeFileSync(Path, masterData);
        tellAllRaw(UnBanText.replace("%s", name));
        console.log(LogoConsoleText + UnBanConsoleText.replace("%s", name));
      } else {
        if (owner == null) {
          console.log(LogoConsoleText + NoPlayerConsoleText);
        } else {
          owner.sendMessage(NoPlayerText);
        }
      }
    },
    {
      param: CxxString,
    }
  );
