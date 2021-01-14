import { useState, useEffect } from "react";
import Advice from "./Advice"
import axios from 'axios';
import { RANDOM_ADVICE_URL } from '../Constant'


function AdviceSlip() {
  const [advice, setAdvice] = useState(undefined);
  function getDataFromApi() {
    axios.get(RANDOM_ADVICE_URL).then(({ data: { slip } }) => {
      setAdvice(slip.advice);
    });
  }
  useEffect(() => {
    getDataFromApi();
  }, []);
  return (
    <div>
      <div className="random-advice">
        <Advice advice={advice} />
        <button onClick={getDataFromApi}>Call api</button>
      </div>
    </div>
  );
}
export default AdviceSlip;
// ([]) dependancy array, whenever var change will pass to useeefect,
// if array is empty useeffect only runs once, when conponent is rendered
// whenever the variable changes run function again
// if empty only run once
// component (line5) (line6) creating state and making it undefined
// (line7-11) component rendered get data from url then set advice to w.e in response from the api
// (line12) take {advice} and display it
// entire component rerendered when state changes
// no divs returns jsx not an object