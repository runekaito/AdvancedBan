"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const command_2 = require("bdsx/command");
const nativetype_1 = require("bdsx/nativetype");
const fs = require("fs");
const export_1 = require("../export");
const export_2 = require("../export");
command_2.command
    .register(export_1.TimeBanCommandName, export_1.TimeBanCommandDescription /* Command permision */, command_1.CommandPermissionLevel.Operator)
    .overload((p, o, op) => {
    const owner = o.getEntity();
    const jsi = JSON.parse(fs.readFileSync(export_2.Path, "utf8")).masterData;
    let data_arr = [];
    let check = false;
    let name = "";
    for (const i in jsi) {
        const item = jsi[i];
        if (item.name.toString().toUpperCase() ==
            p.selector.toString().toUpperCase() ||
            item.ip == p.selector ||
            item.xuid == p.selector) {
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
            unit = export_2.SecondsUnit;
            break;
        case 1:
            unit = export_2.MinutesUnit;
            break;
        case 2:
            unit = export_2.HourUnit;
            break;
    }
    if (check) {
        if (owner == null) {
            console.log(export_1.LogoConsoleText +
                export_2.TimeBannedConsoleText.replace("%s", name)
                    .replace("%d", p.num.toString())
                    .replace("%e", unit));
        }
        else {
            owner.sendMessage(export_2.TimeBannedText.replace("%s", name)
                .replace("%d", p.num.toString())
                .replace("%e", unit));
        }
    }
    else {
        if (owner == null) {
            console.log(export_1.LogoConsoleText + export_1.NoPlayerConsoleText);
        }
        else {
            owner.sendMessage(export_1.NoPlayerText);
        }
    }
    const masterData = JSON.stringify({ masterData: data_arr }, null, " ");
    fs.writeFileSync(export_2.Path, masterData);
}, {
    selector: nativetype_1.CxxString,
    num: nativetype_1.int32_t,
    unit: command_2.command.enum("Unit", {
        s: 0,
        m: 1,
        h: 2,
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWJhbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWViYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBMEQ7QUFFMUQsMENBQXVDO0FBQ3ZDLGdEQUFxRDtBQUNyRCx5QkFBeUI7QUFDekIsc0NBTW1CO0FBQ25CLHNDQU9tQjtBQUNuQixpQkFBTztLQUNKLFFBQVEsQ0FDUCwyQkFBa0IsRUFDbEIsa0NBQXlCLENBQUMsdUJBQXVCLEVBQ2pELGdDQUFzQixDQUFDLFFBQVEsQ0FDaEM7S0FDQSxRQUFRLENBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ1gsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBa0IsQ0FBQztJQUM1QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsYUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ2pFLElBQUksUUFBUSxHQUFVLEVBQUUsQ0FBQztJQUN6QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDbEIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2QsS0FBSyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUU7UUFDbkIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUU7WUFDaEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUU7WUFDckMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsUUFBUTtZQUNyQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQ3ZCO1lBQ0EsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNuQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNqQixLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2Q7UUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCO0lBQ0QsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2QsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQ2QsS0FBSyxDQUFDO1lBQ0osSUFBSSxHQUFHLG9CQUFXLENBQUM7WUFDbkIsTUFBTTtRQUNSLEtBQUssQ0FBQztZQUNKLElBQUksR0FBRyxvQkFBVyxDQUFDO1lBQ25CLE1BQU07UUFDUixLQUFLLENBQUM7WUFDSixJQUFJLEdBQUcsaUJBQVEsQ0FBQztZQUNoQixNQUFNO0tBQ1Q7SUFDRCxJQUFJLEtBQUssRUFBRTtRQUNULElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUNULHdCQUFlO2dCQUNiLDhCQUFxQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO3FCQUN0QyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQy9CLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQ3pCLENBQUM7U0FDSDthQUFNO1lBQ0wsS0FBSyxDQUFDLFdBQVcsQ0FDZix1QkFBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO2lCQUMvQixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQy9CLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQ3ZCLENBQUM7U0FDSDtLQUNGO1NBQU07UUFDTCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBZSxHQUFHLDRCQUFtQixDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNMLEtBQUssQ0FBQyxXQUFXLENBQUMscUJBQVksQ0FBQyxDQUFDO1NBQ2pDO0tBQ0Y7SUFDRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN2RSxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyQyxDQUFDLEVBQ0Q7SUFDRSxRQUFRLEVBQUUsc0JBQVM7SUFDbkIsR0FBRyxFQUFFLG9CQUFPO0lBQ1osSUFBSSxFQUFFLGlCQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUN6QixDQUFDLEVBQUUsQ0FBQztRQUNKLENBQUMsRUFBRSxDQUFDO1FBQ0osQ0FBQyxFQUFFLENBQUM7S0FDTCxDQUFDO0NBQ0gsQ0FDRixDQUFDIn0=