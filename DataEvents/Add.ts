import * as fs from "fs";
import { Path } from "../export";

export function AddData(data: object) {
  let data_arr: object[] = JSON.parse(fs.readFileSync(Path, "utf8")).masterData;
  data_arr.push(data);
  const masterData: string = JSON.stringify(
    { masterData: data_arr },
    null,
    " "
  );
  fs.writeFileSync(Path, masterData);
}
