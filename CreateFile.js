"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const export_1 = require("./export");
if (!fs.existsSync(export_1.Path))
    fs.writeFileSync(export_1.Path, JSON.stringify({ masterData: [] }), "utf8");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNyZWF0ZUZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBeUI7QUFDekIscUNBQWdDO0FBRWhDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQUksQ0FBQztJQUN0QixFQUFFLENBQUMsYUFBYSxDQUFDLGFBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMifQ==