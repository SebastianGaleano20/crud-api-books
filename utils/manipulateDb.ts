import fs from "node:fs";

const readDb = () => {
    const jsonData = fs.readFileSync("./db/books.json", "utf-8");
    const books = JSON.parse(jsonData);
    return books;
}

const writeDb = (data:any) =>{
    fs.writeFileSync("./db/books.json", JSON.stringify(data));
};

export{readDb, writeDb};