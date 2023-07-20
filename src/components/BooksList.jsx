import data from "../data.json";

const BooksList = () => {
  return (
    <div className="flex flex-col justify-center item-center mx-24">
      <h1 className="text-5xl text-slate-900 my-8 font-bold text-center">
        Books List
      </h1>
      <div className="text-slate-600 text-center italic text-lg mb-8">
        Search results for:{" "}
        <span className="text-[var(--primary-color)] font-bold underline underline-offset-4">
          Hello
        </span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {data.results.map((book) => (
          <div
            key={book.recommended_isbns[0]}
            className="flex flex-col justify-center items-center p-4 border-2 rounded-md shadow-xl w-[calc((100vw-16rem)/3)] gap-4 h-[30rem]"
          >
            <h2 className="text-xl font-bold text-slate-900 text-center">{book.title}</h2>
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
        ))}
      </div>
    </div>
  );
};

export default BooksList;
