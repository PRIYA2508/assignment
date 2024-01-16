import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results, setInputStore }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result} setInputStore={setInputStore} key={id} />;
      })}
    </div>
  );
};
