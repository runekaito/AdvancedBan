import * as fs from "fs";
import { Path } from "./export";

if (!fs.existsSync(Path))
  fs.writeFileSync(Path, JSON.stringify({ masterData: [] }), "utf8");
