import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import BookStore from './assets/BookStore.svg';

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <div className="logo">
          <img src={BookStore} width="200px" alt="logo" />
        </div>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <footer>
        Made by &nbsp;
        <a href="https://github.com/codedit334">@codedit334</a>
        &nbsp; 2023
      </footer>
    </div>
  );
}

export default App;
