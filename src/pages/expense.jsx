import { useState } from "react";
import Layout from "../layout/layout";
import { ExpenseAmount } from "../dabase";
import ExpenseList from "../components/expenseList";

export default function Expense() {

    const [expense, setExpense] = useState({
        title: '',
        amount: 0,
        date: ''
    });

    const handleSubmit = () => {
        ExpenseAmount.push(expense);
        // console.log(ExpenseAmount);
        setExpense({
            title: '',
            amount: 0,
            date: ''
        });
    }

    return (
        <div className="min-h-screen bg-blue-300">
            <Layout />
            <p className="text-4xl text-center">Expense window</p>
            <div className="input-container w-2/3 mx-auto">
                <div className="form-control mt-2">
                    <label className="input-group input-group-vertical">
                        <span>Expensed in</span>
                        <input onChange={e => setExpense({ ...expense, title: e.target.value })} value={expense.title} type="text" placeholder="Enter expensed area" className="input input-bordered" />
                    </label>
                </div>

                <div className="form-control mt-2">
                    <label className="input-group input-group-vertical">
                        <span>Amount expensed</span>
                        <input onChange={e => setExpense({ ...expense, amount: e.target.value })} value={expense.amount} type="number" placeholder="Amount expensed in number" className="input input-bordered" />
                    </label>
                </div>

                <div className="form-control mt-2">
                    <label className="input-group input-group-vertical">
                        <span>Date</span>
                        <input onChange={e => setExpense({ ...expense, date: e.target.value })} value={expense.date} type="date" className="input input-bordered" />
                    </label>
                </div>

                <div className="btn-container w-full mt-2 text-center">
                    <button onClick={handleSubmit} className="btn btn-warning w-6/12">Submit</button>
                </div>
            </div>
            <ExpenseList list = {ExpenseAmount} title = {"--Expense list--"}/>
        </div>
    );
}