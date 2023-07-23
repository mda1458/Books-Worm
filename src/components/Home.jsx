import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../contexts/Context";
import { useContext, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const Home = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const context = useContext(Context)

  const searchBook = async (e) => {
    e.preventDefault();
    setProgress(30);
    const search = e.target.search.value;
    const options = {
      method: "GET",
      url: "https://book-finder1.p.rapidapi.com/api/search",
      params: {
        title: search,
        page: "1",
        results_per_page: "50",
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
      },
    };

    try {
      setProgress(30);
      const response = await axios.request(options);
      setProgress(80);
      context.setState({books: {total:response.data.total_results, results:response.data.results}, search: search})
      navigate("/books");
    } catch (error) {
      console.error(error);
    }
  };
  const searchAuthor = (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative max-w-5xl mx-4 md:mx-auto pt-16">
      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
        Explore Limitless{" "}
        <span className="text-[var(--primary-color)]">Books</span>, One
        Constellation at a Time!
      </h1>
      <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">
        A captivating reading adventure, fueled by your insatiable curiosity.
        Let the pages of {"BookWorm's"} Haven transport you to a sanctuary where
        knowledge reigns supreme, and every reader finds solace in the company
        of words.
      </p>
      <form
        onSubmit={searchBook}
        className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm"
      >
        <input
          type="text"
          className="px-2 py-1 transition-all duration-500 hover:ring-2 hover:ring-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-4 outline-none rounded-3xl shadow-xl w-64"
          name="search"
          required
          placeholder="Quick Search Books ..."
        />
        <button
          type="submit"
          className="inline-flex text-3xl items-center px-4 py-3 border border-transparent font-medium rounded-3xl shadow-sm text-black transition-all duration-500 hover:bg-[var(--primary-color)] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)] "
        >
          <BiSearchAlt />
        </button>
      </form>
      <div className="flex items-center justify-center my-6">
        <p className="text-slate-300 text-lg">OR</p>
      </div>
      <form
        onSubmit={searchAuthor}
        className="flex justify-center space-x-6 text-sm"
      >
        <input
          type="text"
          className="px-2 py-1 transition-all duration-500 hover:ring-2 hover:ring-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-4 outline-none rounded-3xl shadow-xl w-64"
          name="search"
          required
          placeholder="Quick Search Authors ..."
        />
        <button
          type="submit"
          className="inline-flex text-3xl items-center px-4 py-3 border border-transparent font-medium rounded-3xl shadow-sm text-black transition-all duration-500 hover:bg-[var(--primary-color)] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)] "
        >
          <BiSearchAlt />
        </button>
      </form>
      <LoadingBar
        color="#4D331F"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
    
  );
};

export default Home;
