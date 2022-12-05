"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tellAllRaw = void 0;
const packets_1 = require("bdsx/bds/packets");
const launcher_1 = require("bdsx/launcher");
function tellAllRaw(text) {
    if (launcher_1.bedrockServer.isLaunched())
        return;
    let packet = packets_1.TextPacket.allocate();
    packet.type = packets_1.TextPacket.Types.Raw;
    packet.message = text;
    for (const i of launcher_1.bedrockServer.level.getPlayers()) {
        i.sendPacket(packet);
    }
    packet.dispose();
}
exports.tellAllRaw = tellAllRaw;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5Qyw0Q0FBOEM7QUFFOUMsU0FBZ0IsVUFBVSxDQUFDLElBQVk7SUFDckMsSUFBSSx3QkFBYSxDQUFDLFVBQVUsRUFBRTtRQUFFLE9BQU87SUFDdkMsSUFBSSxNQUFNLEdBQUcsb0JBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxNQUFNLENBQUMsSUFBSSxHQUFHLG9CQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNuQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixLQUFLLE1BQU0sQ0FBQyxJQUFJLHdCQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFO1FBQ2hELENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDdEI7SUFDRCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDbkIsQ0FBQztBQVRELGdDQVNDIn0=