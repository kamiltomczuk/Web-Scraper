import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />

      <h1 className="text-3xl text-center mt-2 text-black font-bold mb-5">
        Welcome to the web Scraper
      </h1>

      <h2 className="text-lg italic text-center text-black/50">
        To see my other projects please visit my github page
      </h2>
      <h3 className="text-lg italic text-center text-black/50">
        <a href="https://github.com/kamiltomczuk">github.com/kamiltomczuk</a>
      </h3>
    </div>
  );
}

export default Homepage;
