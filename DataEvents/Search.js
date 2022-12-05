"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchData = void 0;
const fs = require("fs");
const export_1 = require("../export");
function SearchData(SearchNum, key) {
    const jsonObject = JSON.parse(fs.readFileSync(export_1.Path, "utf8")).masterData;
    let check = false;
    if (SearchNum == 1) {
        jsonObject.filter((item) => {
            if (key == item.name) {
                check = true;
            }
        });
    }
    return check;
}
exports.SearchData = SearchData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlCQUF5QjtBQUN6QixzQ0FBaUM7QUFFakMsU0FBZ0IsVUFBVSxDQUFDLFNBQWlCLEVBQUUsR0FBVztJQUN2RCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsYUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ3hFLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNsQixJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUU7UUFDbEIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQzlCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3BCLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDZDtRQUNILENBQUMsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFYRCxnQ0FXQyJ9