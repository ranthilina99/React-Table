import logo from './logo.svg';
import './App.css';
import { SortingTable } from './component/SortingTable';
import { FilteringTable } from './component/FilteringTable';
import { PaginationTable } from './component/PaginationTable';
import { RowSelection } from './component/RowSelection ';
import { ColumnOrder } from './component/ColumnOrder ';
import { ColumnHiding } from './component/ColumnHiding ';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <ColumnHiding/>
      </header>
    </div>
  );
}

export default App;
