import { TextPacket } from "bdsx/bds/packets";
import { bedrockServer } from "bdsx/launcher";

export function tellAllRaw(text: string) {
  if (bedrockServer.isLaunched()) return;
  let packet = TextPacket.allocate();
  packet.type = TextPacket.Types.Raw;
  packet.message = text;
  for (const i of bedrockServer.level.getPlayers()) {
    i.sendPacket(packet);
  }
  packet.dispose();
}
