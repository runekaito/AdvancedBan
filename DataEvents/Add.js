"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddData = void 0;
const fs = require("fs");
const export_1 = require("../export");
function AddData(data) {
    let data_arr = JSON.parse(fs.readFileSync(export_1.Path, "utf8")).masterData;
    data_arr.push(data);
    const masterData = JSON.stringify({ masterData: data_arr }, null, " ");
    fs.writeFileSync(export_1.Path, masterData);
}
exports.AddData = AddData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlCQUF5QjtBQUN6QixzQ0FBaUM7QUFFakMsU0FBZ0IsT0FBTyxDQUFDLElBQVk7SUFDbEMsSUFBSSxRQUFRLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLGFBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUM5RSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLE1BQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxTQUFTLENBQ3ZDLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxFQUN4QixJQUFJLEVBQ0osR0FBRyxDQUNKLENBQUM7SUFDRixFQUFFLENBQUMsYUFBYSxDQUFDLGFBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBVEQsMEJBU0MifQ==