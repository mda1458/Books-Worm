import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import BooksList from "./components/BooksList"
import Home from "./components/Home"

const App = () => {
  const links = [ "Books", "Authors" ]
  return (
    <BrowserRouter>
      <Navbar links={links}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksList />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App