import {
  CommandPermissionLevel,
  PlayerCommandSelector,
} from "bdsx/bds/command";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { bedrockServer } from "bdsx/launcher";
import { CxxString } from "bdsx/nativetype";
import {
  NoPlayerText,
  AlreadyBanedText,
  BannedText,
  LogoText,
  AlreadyBanedConsoleText,
} from "../export";
import { SearchData } from "../DataEvents/Search";
import { AddData } from "../DataEvents/Add";
import { DisconnectPacket } from "bdsx/bds/packets";
import { tellAllRaw } from "../Functions";
import { BanCommandName, BanCommandDescription } from "../export";
import {
  NoPlayerConsoleText,
  BannedConsoleText,
  LogoConsoleText,
} from "../export";
command
  .register(
    BanCommandName,
    BanCommandDescription /* Command permision */,
    CommandPermissionLevel.Operator
  )
  .overload(
    (p, o, op) => {
      const players: ServerPlayer[] = bedrockServer.level.getPlayers();
      const owner = o.getEntity() as ServerPlayer;
      let check = false;
      let check2 = false;
      for (const i in players) {
        const pl = players[i];
        if (pl.getNameTag().toUpperCase() == p.name.getName().toUpperCase()) {
          const key = pl.getNameTag();
          if (!SearchData(1, key)) {
            console.log(LogoConsoleText + BannedConsoleText.replace("%s", key));
            tellAllRaw(BannedText.replace("%s", key));
            const data = {
              name: key,
              ip: pl.getNetworkIdentifier().getAddress().split("|")[0],
              xuid: pl.getXuid(),
              text: p.text,
              level: p.enum,
              time: new Date(),
              num: null,
              unit: null,
            };
            AddData(data);
            const ni = pl.getNetworkIdentifier();
            let pk = DisconnectPacket.allocate();
            pk.message = LogoText + p.text;
            pk.sendTo(ni);
            pk.dispose();
            return;
          } else {
            check2 = true;
          }
        } else {
          check = true;
        }
      }
      if (check && !check2) {
        if (owner == null) {
          console.log(LogoConsoleText + NoPlayerConsoleText);
        } else {
          owner.sendMessage(LogoConsoleText + NoPlayerText);
        }
      }
      if (!check && !check2) {
        if (owner == null) {
          console.log(LogoConsoleText + NoPlayerConsoleText);
        } else {
          owner.sendMessage(LogoConsoleText + NoPlayerText);
        }
      }
      if (check2) {
        if (owner == null) {
          console.log(LogoConsoleText + AlreadyBanedConsoleText);
        } else {
          owner.sendMessage(AlreadyBanedText);
        }
      }
    },
    {
      name: PlayerCommandSelector,
      text: CxxString,
      enum: command.enum("Methods", {
        "-name": 0,
        "-ip": 1,
        "-xuid": 2,
      }),
    }
  );
