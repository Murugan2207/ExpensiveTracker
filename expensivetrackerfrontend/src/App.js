import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenseData=[
    {
      title:"Car Insurance",
      amount:200,
      date: new Date(2022, 7, 22)
    }, 
     {
      title:"Bike Insurance",
      amount:200,
      date: new Date(2022, 7, 22)
    },
    {
      title:"Health Insurance",
      amount:200,
      date: new Date(2022, 7, 22)
    },
    {
      title:"Gym Insurance",
      amount:200,
      date: new Date(2022, 7, 22)
    },
  ]
  return (
    <div className="App">
    
       <ExpenseItem />
    </div>
  );
}

export default App;
