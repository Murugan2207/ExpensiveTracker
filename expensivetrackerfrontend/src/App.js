import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenseData=[
    {
      id:"e1",
      title:"Car Insurance",
      amount:200,
      date: new Date(2022, 7, 22)
    }, 
     {
      id:"e2",
      title:"Bike Insurance",
      amount:400,
      date: new Date(2022, 7, 30)
    },
    {
      id:"e3",
      title:"Health Insurance",
      amount:500,
      date: new Date(2022, 5, 12)
    },
    {   id:"e4",
      title:"Gym Insurance",
      amount:600,
      date: new Date(2022, 3, 11)
    },
  ]
  return (
    <div className="App">
    
       <ExpenseItem title={expenseData[0].title} amount={expenseData[0].amount} date={expenseData[0].date} />
       <ExpenseItem  title={expenseData[1].title} amount={expenseData[1].amount} date={expenseData[1].date} />
       <ExpenseItem title={expenseData[2].title} amount={expenseData[2].amount} date={expenseData[2].date} />
       <ExpenseItem title={expenseData[3].title} amount={expenseData[3].amount} date={expenseData[3].date}  />
    </div>
  );
}

export default App;
