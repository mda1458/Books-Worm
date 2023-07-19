import { BiSearchAlt } from "react-icons/bi";

const Home = () => {
  return (
    <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
        Explore Limitless <span className="text-[var(--primary-color)]">Books</span>, One Constellation at a Time!
      </h1>
      <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">
        A captivating reading adventure, fueled by your insatiable curiosity.
        Let the pages of {"BookWorm's"} Haven transport you to a sanctuary where
        knowledge reigns supreme, and every reader finds solace in the company
        of words.
      </p>
      <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
        <input
          type="text"
          className="px-2 py-1 transition-all duration-500 hover:ring-2 hover:ring-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-4 outline-none rounded-md shadow-sm w-64"
          name="search"
          placeholder="Quick Search ..."
        />
        <button
          type="button"
          className="inline-flex text-3xl items-center px-4 py-3 border border-transparent font-medium rounded-3xl shadow-sm text-black transition-all duration-500 hover:bg-[var(--primary-color)] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)] "
        >
          <BiSearchAlt />
        </button>
      </div>
    </div>
  );
};

export default Home;
