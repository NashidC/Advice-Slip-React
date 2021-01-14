import { useState } from "react";
import Advice from "./Advice";
import axios from "axios";
import { SEARCHED_ADVICE_URL } from "../Constant";

function SearchedAdvice() {
  const [searchAdvice, setSearchAdvice] = useState("");
  const [searchedApi, setSearchedApi] = useState(undefined);
  const searchUrl = `${SEARCHED_ADVICE_URL}${searchAdvice}`;
  function getDataFromSecondApi() {
    console.log(searchUrl);
    axios.get(searchUrl).then(({ data }) => {
      setSearchedApi(data);
      console.log(data);
    });
  }
  return (
    <div>
      {searchedApi === undefined ? (
        ``
      ) : (
          <Advice searchedApi={searchedApi.slips[0].advice} />
        )}
      <input
        onChange={(event) => {
          setSearchAdvice(event.target.value);
          console.log(event.target.value);
        }}
      ></input>
      <button onClick={getDataFromSecondApi}>Call api</button>
    </div>
  );
}
export default SearchedAdvice;