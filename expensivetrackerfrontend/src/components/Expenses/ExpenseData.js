import ExpenseItem from "./ExpenseItem"
import '../styles/ExpenseData.css'
import ExpensesFilter from "./ExpensesFilter"
import { useState } from "react"
function ExpenseData(){
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

      const[selectedFilteredYear,setSelectedFilterYear]=useState("2020")
    
      let filtersText="2019,2021 & 2022";
      if(selectedFilteredYear==="2020"){
        filtersText="2020,2021 & 2022"
      }
      else if(selectedFilteredYear==="2021"){
        filtersText="2022,2021 & 2022"
      }
      else{
        filtersText="2019,2021 & 2022"
      }
      
      const handleSelectedYear=(selectedYear)=>{
        setSelectedFilterYear(selectedYear)
      }
     

      

    return(
        <div className="expenses">
          <div>
            <ExpensesFilter selected={selectedFilteredYear} onFilteredYear={handleSelectedYear}/>

            <p>Data for years {filtersText} is Hidden</p>
        <ExpenseItem title={expenseData[0].title} amount={expenseData[0].amount} date={expenseData[0].date} />
        <ExpenseItem  title={expenseData[1].title} amount={expenseData[1].amount} date={expenseData[1].date} />
        <ExpenseItem title={expenseData[2].title} amount={expenseData[2].amount} date={expenseData[2].date} />
        <ExpenseItem title={expenseData[3].title} amount={expenseData[3].amount} date={expenseData[3].date}  />
        </div>
        </div>

    )
}
export default ExpenseData