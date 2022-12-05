"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const command_2 = require("bdsx/command");
const launcher_1 = require("bdsx/launcher");
const nativetype_1 = require("bdsx/nativetype");
const export_1 = require("../export");
const Search_1 = require("../DataEvents/Search");
const Add_1 = require("../DataEvents/Add");
const packets_1 = require("bdsx/bds/packets");
const Functions_1 = require("../Functions");
const export_2 = require("../export");
const export_3 = require("../export");
command_2.command
    .register(export_2.BanCommandName, export_2.BanCommandDescription /* Command permision */, command_1.CommandPermissionLevel.Operator)
    .overload((p, o, op) => {
    const players = launcher_1.bedrockServer.level.getPlayers();
    const owner = o.getEntity();
    let check = false;
    let check2 = false;
    for (const i in players) {
        const pl = players[i];
        if (pl.getNameTag().toUpperCase() == p.name.getName().toUpperCase()) {
            const key = pl.getNameTag();
            if (!(0, Search_1.SearchData)(1, key)) {
                console.log(export_3.LogoConsoleText + export_3.BannedConsoleText.replace("%s", key));
                (0, Functions_1.tellAllRaw)(export_1.BannedText.replace("%s", key));
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
                (0, Add_1.AddData)(data);
                const ni = pl.getNetworkIdentifier();
                let pk = packets_1.DisconnectPacket.allocate();
                pk.message = export_1.LogoText + p.text;
                pk.sendTo(ni);
                pk.dispose();
                return;
            }
            else {
                check2 = true;
            }
        }
        else {
            check = true;
        }
    }
    if (check && !check2) {
        if (owner == null) {
            console.log(export_3.LogoConsoleText + export_3.NoPlayerConsoleText);
        }
        else {
            owner.sendMessage(export_3.LogoConsoleText + export_1.NoPlayerText);
        }
    }
    if (!check && !check2) {
        if (owner == null) {
            console.log(export_3.LogoConsoleText + export_3.NoPlayerConsoleText);
        }
        else {
            owner.sendMessage(export_3.LogoConsoleText + export_1.NoPlayerText);
        }
    }
    if (check2) {
        if (owner == null) {
            console.log(export_3.LogoConsoleText + export_1.AlreadyBanedConsoleText);
        }
        else {
            owner.sendMessage(export_1.AlreadyBanedText);
        }
    }
}, {
    name: command_1.PlayerCommandSelector,
    text: nativetype_1.CxxString,
    enum: command_2.command.enum("Methods", {
        "-name": 0,
        "-ip": 1,
        "-xuid": 2,
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBRzBCO0FBRTFCLDBDQUF1QztBQUN2Qyw0Q0FBOEM7QUFDOUMsZ0RBQTRDO0FBQzVDLHNDQU1tQjtBQUNuQixpREFBa0Q7QUFDbEQsMkNBQTRDO0FBQzVDLDhDQUFvRDtBQUNwRCw0Q0FBMEM7QUFDMUMsc0NBQWtFO0FBQ2xFLHNDQUltQjtBQUNuQixpQkFBTztLQUNKLFFBQVEsQ0FDUCx1QkFBYyxFQUNkLDhCQUFxQixDQUFDLHVCQUF1QixFQUM3QyxnQ0FBc0IsQ0FBQyxRQUFRLENBQ2hDO0tBQ0EsUUFBUSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUNYLE1BQU0sT0FBTyxHQUFtQix3QkFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFrQixDQUFDO0lBQzVDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNsQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbkIsS0FBSyxNQUFNLENBQUMsSUFBSSxPQUFPLEVBQUU7UUFDdkIsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDbkUsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFBLG1CQUFVLEVBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUFlLEdBQUcsMEJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFH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