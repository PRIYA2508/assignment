import "./SearchResult.css";

export const SearchResult = ({ result,setInputStore }) => {
  function handleChange(event){
    event.preventDefault();
    setInputStore((prev)=> [...prev,result])
  }
  return (
    <div
      className="search-result"
      // onClick={(e) => alert(`You selected ${result.name}!`)}
      // onClick={(e)=> setInputStore(result)}
      onClick={handleChange}
    >
      <div className="search-options">
        {/* {console.log("img is ", result.url)} */}
        <img className="img-logo" src={result.url} alt="" />
        <div>

        {result.name}
        </div>
        <div>
        {result.email}

        </div>
      </div>
    </div>
  );
};
