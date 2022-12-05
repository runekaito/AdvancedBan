"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("bdsx/event");
const fs = require("fs");
const export_1 = require("./export");
const packets_1 = require("bdsx/bds/packets");
event_1.events.playerJoin.on((ev) => {
    const jsonObject = JSON.parse(fs.readFileSync(export_1.Path, "utf8")).masterData;
    const data_arr = [];
    let check = false;
    let text = "";
    let timeTxt = "";
    let check2 = false;
    const pl = ev.player;
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
                }
                else {
                    const math = Math.floor((item.num - diffSecond) * 10) / 10;
                    timeTxt = export_1.RemainingTimeText.replace("%e", export_1.SecondsUnit).replace("%d", math.toString());
                    check = true;
                }
                break;
            case 1:
                if (diffMinute > item.num) {
                    check = false;
                    check2 = true;
                }
                else {
                    const math = Math.floor((item.num - diffMinute) * 10) / 10;
                    timeTxt = export_1.RemainingTimeText.replace("%e", export_1.MinutesUnit).replace("%d", math.toString());
                    check = true;
                }
                break;
            case 2:
                if (diffHour > item.num) {
                    check = false;
                    check2 = true;
                }
                else {
                    const math = Math.floor((item.num - diffHour) * 10) / 10;
                    timeTxt = export_1.RemainingTimeText.replace("%e", export_1.HourUnit).replace("%d", math.toString());
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
    fs.writeFileSync(export_1.Path, masterData);
    if (check) {
        const ni = pl.getNetworkIdentifier();
        let pk = packets_1.DisconnectPacket.allocate();
        pk.message = export_1.LogoText + text + "\n" + timeTxt;
        pk.sendTo(ni);
        pk.dispose();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkpvaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0M7QUFDcEMseUJBQXlCO0FBQ3pCLHFDQU9rQjtBQUVsQiw4Q0FBb0Q7QUFFcEQsY0FBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtJQUMxQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsYUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ3hFLE1BQU0sUUFBUSxHQUFVLEVBQUUsQ0FBQztJQUMzQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDbEIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2QsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNuQixNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBc0IsQ0FBQztJQUNyQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLFVBQVUsRUFBRTtRQUMxQixNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2xCLEtBQUssQ0FBQztnQkFDSixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFO29CQUNoQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNiLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUNsQjtnQkFDRCxNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ25FLEtB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