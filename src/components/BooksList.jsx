import data from "../data.json";

const BooksList = () => {
  return (
    <div className="flex flex-col justify-center item-center">
      <h1 className="text-3xl font-bold text-center">Books List</h1>
      <div className="flex flex-wrap justify-center items-center">
        {data.results.map((book) => (
          <div
            key={book.recommended_isbns[0]}
            className="flex flex-col justify-center items-center m-4 p-4 border-2 border-gray-300 rounded-md shadow-md"
          >
            <img
              src={book.published_works[0].cover_art_url}
              alt=""
              className="w-4 h-4"
            />
            <h2 className="text-xl font-bold">{book.title}</h2>
            <p className="text-gray-500">{book.copyright}</p>
            <p className="text-gray-500">{book.authors[0]}</p>
            {/* amazon url */}
            <a
              href={
                `https://www.amazon.com/s?i=stripbooks&amp;rh=p_66%3A` +
                book.canonical_isbn
              }
              target="_blank"
              rel="noopener noreferrer"
              title="Buy Now On Amazon"
            >
              buy now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
