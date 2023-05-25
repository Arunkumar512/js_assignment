import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './component/Navi';
import Chart from './component/Chart';
import Cards from './component/Card';
import Total_cards from './component/Total_cards';
import Item from './component/Item';


function App() {
  return (
    <div className="App">
      <Navi />
      <div className="main">
        <Cards />
        <Chart />
        <Total_cards />
      </div>
        <Item />
    </div>
  );
}

export default App;
