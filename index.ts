// Tomar el input del usurio, validarlo y enviarle la petición "curada" a books.ts
// Devolverle al usuario la respuesta en forma visual

import { getAll,getBookById,addNewBook,deleteBook } from "./books";

const args = process.argv.splice(2);

if (args[0] === "--get" && args[1] === "--all"){
    const books = getAll();
    console.log(books);
}else if (args[0] === "--get" && args[1] === "--id" && args.length === 3){
    const books = getBookById(args[2]);
    console.log(books);
}else if(
    args[0] === "--add" &&
    args[1] === "--nombre" &&
    args[2] !== "--lanzamiento" &&
    args[3] === "--lanzamiento" &&
    args[4] !== "--rating" &&
    args[5] === "--rating" &&
    args[6] !== "--atp" &&
    args[7] === "--atp" &&
    args[8]){
        let ATP: string | boolean;

        if (args[8] === "true") {
          ATP = true;
        } else {
          ATP = false;
        }
    
        const status = addNewBook({
          Nombre: args[2],
          FechaDeLanzamiento: args[4],
          id: args[6],
          ATP,
        });
    
        console.log(status);
}else if(
  args[0] === "--delete" &&
  args[1] === "--id" &&
  args.length === 3){
   const status = deleteBook(args[2]);
   console.log(status);
  }
else{
    console.log("Error en la peticion");
}
