import * as fs from "fs";
import { Path } from "../export";

export function SearchData(SearchNum: number, key: string) {
  const jsonObject = JSON.parse(fs.readFileSync(Path, "utf8")).masterData;
  let check = false;
  if (SearchNum == 1) {
    jsonObject.filter((item: any) => {
      if (key == item.name) {
        check = true;
      }
    });
  }
  return check;
}
