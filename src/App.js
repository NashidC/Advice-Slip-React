import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import AdviceSlip from "./components/AdviceSlip"
import SearchedAdvice from "./components/SearchedAdvice";
import { SEARCHED_ADVICE_URL } from "./Constant";

function App() {
  return (
    <div className="App">
      <Header />
      <AdviceSlip />
      <SearchedAdvice />
    </div>
  );
}
export default App;
