import ExpenseData from './components/Expenses/ExpenseData';
import { NewExpense } from './components/Expenses/NewExpense';

function App() {
  const addExpense=(expenses)=>{
    console.log("in APP.js")
    console.log(expenses)

  }
  
  return (
    <div className="App">
      <NewExpense  onAddExpense={addExpense}/>
      <ExpenseData/>
    </div>
  );
}

export default App;
