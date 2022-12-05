"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const command_2 = require("bdsx/command");
const fs = require("fs");
const export_1 = require("../export");
const nativetype_1 = require("bdsx/nativetype");
const Functions_1 = require("../Functions");
const export_2 = require("../export");
command_2.command
    .register(export_2.UnBanCommandName, export_2.UnBanCommandDescription /* Command permision */, command_1.CommandPermissionLevel.Operator)
    .overload((p, o, op) => {
    const owner = o.getEntity();
    const jsi = JSON.parse(fs.readFileSync(export_1.Path, "utf8")).masterData;
    let data_arr = [];
    let name = "";
    for (const i in jsi) {
        const item = jsi[i];
        if (item.name == p.param ||
            item.ip == p.param ||
            item.xuid == p.param) {
            name = item.name;
        }
        else {
            data_arr.push(item);
        }
    }
    if (name != "") {
        const masterData = JSON.stringify({ masterData: data_arr }, null, " ");
        fs.writeFileSync(export_1.Path, masterData);
        (0, Functions_1.tellAllRaw)(export_2.UnBanText.replace("%s", name));
        console.log(export_2.LogoConsoleText + export_2.UnBanConsoleText.replace("%s", name));
    }
    else {
        if (owner == null) {
            console.log(export_2.LogoConsoleText + export_1.NoPlayerConsoleText);
        }
        else {
            owner.sendMessage(export_1.NoPlayerText);
        }
    }
}, {
    param: nativetype_1.CxxString,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5iYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1bmJhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUEwRDtBQUMxRCwwQ0FBdUM7QUFDdkMseUJBQXlCO0FBQ3pCLHNDQU1tQjtBQUNuQixnREFBNEM7QUFDNUMsNENBQTBDO0FBRTFDLHNDQU1tQjtBQUNuQixpQkFBTztLQUNKLFFBQVEsQ0FDUCx5QkFBZ0IsRUFDaEIsZ0NBQXVCLENBQUMsdUJBQXVCLEVBQy9DLGdDQUFzQixDQUFDLFFBQVEsQ0FDaEM7S0FDQSxRQUFRLENBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ1gsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBa0IsQ0FBQztJQUM1QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsYUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ2pFLElBQUksUUFBUSxHQUFVLEVBQUUsQ0FBQztJQUN6QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7SUFDZCxLQUFLLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRTtRQUNuQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFDRSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLO1lBQ3BCLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEtBQUs7WUFDbEIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxFQUNwQjtZQUNBLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JCO0tBQ0Y7SUFDRCxJQUFJLElBQUksSUFBSSxFQUFFLEVBQUU7UUFDZCxNQUFNLFVBQVUsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUN2QyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsRUFDeEIsSUFBSSxFQUNKLEdBQUcsQ0FDSixDQUFDO1FBQ0YsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbkMsSUFBQSxzQkFBVSxFQUFDLGtCQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQWUsR0FBRyx5QkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDckU7U0FBTTtRQUNMLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUFlLEdBQUcsNEJBQW1CLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0wsS0FBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBWSxDQUFDLENBQUM7U0FDakM7S0FDRjtBQUNILENBQUMsRUFDRDtJQUNFLEtBQUssRUFBRSxzQkFBUztDQUNqQixDQUNGLENBQUMifQ==