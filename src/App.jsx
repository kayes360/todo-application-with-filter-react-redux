import Navbar from "src/Components/Navbar";
import Footer from "src/Components/Footer";
import Header from "src/Components/Header"; 
import TodoList from "./Components/TodoList";

function App() {

  return (
    <>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navbar />
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />

          <hr className="mt-4" />
          {/* todo list */}
          <TodoList />
          <hr className="mt-4" />
          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
