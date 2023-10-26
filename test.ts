import fs from "node:fs";

const data = fs.readFileSync("./db/books.json", "utf8");
const parsedData = JSON.parse(data);

console.log(parsedData);