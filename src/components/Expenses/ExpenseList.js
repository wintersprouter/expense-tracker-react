import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './ExpenseList.css'
function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map(expense => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  )
}

export default ExpenseList
