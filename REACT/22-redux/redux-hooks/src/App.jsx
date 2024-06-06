import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { buyBook, returnBook } from "./actions/bookActions";

function App() {
  const dispatch = useDispatch();
  console.log("🚀 ~ App ~ dispatch:", dispatch);
  console.count("App");
  const books = useSelector((state) => state?.books);
  console.log("🚀 ~ App ~ books:", books);

  const handleBuyBook = (book) => {
    dispatch(buyBook(book));
  };

  const handleReturnBook = (book) => {
    dispatch(returnBook(book));
  };
  return (
    <>
      <div>
        <h1>Librería</h1>
        <h2>Libros Disponibles:</h2>
        <ul>
          {books &&
            books.map((book, index) => (
              <li key={index}>
                {book}
                <button onClick={() => handleBuyBook(book)}>Comprar</button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
