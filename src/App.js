import { useState } from "react";

import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";
import { StoreInput } from "./components/StoreInput";

function App() {
  const [results, setResults] = useState([]);
  // const [addData, setAddData] = useState([]);

  const [inputStore, setInputStore] = useState([])
  // const [sid,setSid] = useState();
  // console.log("sid is ", sid)

  // console.log("alld data is : ", inputStore);
  // setAddData(...addData,inputStore);

  const filterItem = (curcat) => {
    // event.preventDefault();
    const newItem = inputStore.filter((newVal) => {
      return newVal.id !== curcat; 
        	// comparing category for displaying data
    });
    // console.log("neweww ",curcat)
    // console.log("neweww ",newItem)
    // console.log(curcat)
    // se(newItem);
    setInputStore(newItem);
  };


  return (
    <div className="App">
      <div className="p-user">
        <h1>Pick Users</h1>
      </div>
      <div className="search-bar-container">
        <div className="appfirst">
          <StoreInput inputStore={inputStore} filterItem={filterItem} />
          <SearchBar setResults={setResults} />

        </div>
        {results && results.length > 0 && <SearchResultsList results={results} setInputStore={setInputStore} />}
      </div>
    </div>
  );
}

export default App;
