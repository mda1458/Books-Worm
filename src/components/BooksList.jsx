import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/Context";
import { BiLoader } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const BooksList = () => {
  const [page, setPage] = useState(1);
  const context = useContext(Context);
  const [search, setSearch] = useState(context.state.search);
  const navigate = useNavigate();

  const apiCall = async () => {
    setPage(page + 1);
    const options = {
      method: "GET",
      url: "https://book-finder1.p.rapidapi.com/api/search",
      params: {
        title: search,
        page: page,
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      context.setState({
        search: search,
        books: {
          total: response.data.total_results,
          results: context.state.books.results.concat(response.data.results)
        }
      })
      navigate("/books");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (context.state.books.results.length === 0) {
      navigate("/");
    }
  }, [context.state.books.results.length, navigate]);

  useEffect(() => {
    if (context.state.search !== search) {
      setSearch(context.state.search);
      setPage(1);
    }
  }, [context.state.search, search]);

  
  return (
    <div className="flex flex-col justify-center item-center mx-24">
      <h1 className="text-5xl text-slate-900 my-8 font-bold text-center">
        Books List
      </h1>
      <div className="text-slate-600 text-center italic text-lg mb-8">
        Search results for:{" "}
        <span className="text-[var(--primary-color)] font-bold underline underline-offset-4">
          {search}
        </span>
      </div>
      <div className="text-slate-600 text-center italic text-lg mb-8">
        Total results:{" "}
        <span className="text-[var(--primary-color)] font-bold underline underline-offset-4">
          {context.state.books.total}
        </span>
      </div>
      {/* use infinite scroll */}
      <InfiniteScroll
        dataLength={context.state.books.results.length}
        next={apiCall}
        hasMore={context.state.books.results.length < context.state.books.total}
        loader={
          <BiLoader className="text-[var(--primary-color)] animate-spin text-4xl text-center" />
        }
        endMessage={
          <p className="text-slate-600 text-center italic text-lg mb-8">
            No more results
          </p>
        }
        style={{ overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "4rem" }}
        scrollThreshold={0.6}
      >
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          {
          context.state.books.results.map((book, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center p-4 border-2 rounded-md shadow-xl w-[calc((100vw-16rem)/3)] gap-4 h-[30rem]"
            >
              <h2 className="text-xl font-bold text-slate-900 text-center">
                {book.title}
              </h2>
              <img
                src={book.published_works[0].cover_art_url}
                alt=""
                className="h-64 object-contain"
              />
              <p className="text-slate-600 flex justify-between w-full">
                <div>Author: {book.authors[0]}</div>
                <div>Year: {book.copyright}</div>
              </p>
              <p className="text-slate-600"></p>
              <a
                href={
                  `https://www.amazon.com/s?i=stripbooks&amp;rh=p_66%3A` +
                  book.canonical_isbn
                }
                target="_blank"
                rel="noopener noreferrer"
                title="Buy Now On Amazon"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[var(--primary-color)] hover:bg-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)]"
              >
                Buy Now On Amazon
              </a>
            </div>
          ))
          }
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default BooksList;
