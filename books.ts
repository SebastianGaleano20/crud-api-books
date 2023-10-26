import { randomUUID } from "node:crypto";
import { readDb, writeDb} from "./utils/manipulateDb";
import { Books } from "./interfaces/books";


 const getAll = (): Books[] | string => {
  const books = readDb();
  if (books.length > 0) {
    return books;
  } else {
    return "No hay libros en la base de datos.";
  }
};

const getBookById = (id: string) => {
  const book: Books[] = readDb();

  const foundBook = book.find(
    (book: Books) => book.id === id );
  
  if(foundBook){
    return foundBook;
  }else{
    return "Libro inexistente, porfavor indique otro id";
  }
};

const addNewBook = (newBook:Books):string => {
   const books = readDb();
  
  const foundBook = books.find((books:Books) => books.Nombre === newBook.Nombre);

  if(!foundBook){
    newBook.id = randomUUID();
    books.push(newBook);
    writeDb(books);
    return "Libro agregado con exito";
  }else{
    return "El libro ya existe en la base de datos";
  }
};

const deleteBook = (id:string) => {
   const books = readDb();
   
   const foundBook: Books | undefined = books.find((book:Books)=> book.id === id);

   if (!foundBook){
    return "El libro no existe en la base de datos";
   }
  
   const newBooks:Books[] = books.filter((book:Books)=> book.id !== id);
    writeDb(newBooks);
      return "El libro fue borrado con exito";
   };

export { getAll ,getBookById,addNewBook,deleteBook };
