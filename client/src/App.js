import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState({ initial: true, loading: false });
  const handleSearch = async () => {
    setResult({ ...result, loading: true });
    fetch(`http://localhost:8000/api/search/${word}`)
      .then(async (res) => {
        const { valid } = await res.json();
        setResult({ ...result, initial: false, loading: false, valid });
      })
      .catch((err) => console.log(err));
  };
  console.log(`http://localhost:8000/api/search/${word}`);

  return (
    <div className="App">
      <header className="App-header">
        <p>Enter Word to Search</p>
        <div className="search-box">
          <input
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
            }}
            type="text"
            className="input-search"
            placeholder="Type to Search..."
          />
          <button className="btn-search" onClick={handleSearch}>
            <AiOutlineSearch />
          </button>
        </div>
        {!result.initial &&
          (result.loading ? (
            <p>Loading.....</p>
          ) : (
            <p>
              Word is <b>{result?.valid ? "Valid" : "not Valid"}</b>
            </p>
          ))}
      </header>
    </div>
  );
}

export default App;
