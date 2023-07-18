import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import BooksList from "./components/BooksList"
import Home from "./components/Home"
import AuthorsList from "./components/AuthorsList"

const App = () => {
  const links = [ "Books", "Authors" ]
  return (
    <BrowserRouter>
      <Navbar links={links}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksList />} />
        <Route path="/authors" element={<AuthorsList />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App