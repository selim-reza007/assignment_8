import { useState } from "react";
import Layout from "../layout/layout";
import ExpenseList from "../components/expenseList";
import { IncomeAmount } from "../dabase";


export default function Income() {

    const [income, setIncome] = useState({
        title: '',
        amount: 0,
        date: ''
    });

    const handleSubmit = () => {
        IncomeAmount.push(income);
        setIncome({
            title: '',
            amount: 0,
            date: ''
        });
    }

    return (
        <div className="min-h-screen bg-blue-300">
            <Layout />
            <p className="text-4xl text-center">Income window</p>
            <div className="input-container w-2/3 mx-auto">
                <div className="form-control mt-2">
                    <label className="input-group input-group-vertical">
                        <span>Income received from</span>
                        <input value={income.title} onChange={e => setIncome({ ...income, title: e.target.value })} type="text" placeholder="Enter income source" className="input input-bordered" />
                    </label>
                </div>

                <div className="form-control mt-2">
                    <label className="input-group input-group-vertical">
                        <span>Amount received</span>
                        <input value={income.amount} onChange={e => setIncome({ ...income, amount: e.target.value })} type="number" placeholder="Amount earned in number" className="input input-bordered" />
                    </label>
                </div>

                <div className="form-control mt-2">
                    <label className="input-group input-group-vertical">
                        <span>Date</span>
                        <input value={income.date} onChange={e => setIncome({ ...income, date: e.target.value })} type="date" className="input input-bordered" />
                    </label>
                </div>

                <div className="btn-container w-full mt-2 text-center">
                    <button onClick={handleSubmit} className="btn btn-warning w-6/12">Submit</button>
                </div>
            </div>
            <ExpenseList title={"--Income List--"} list={ IncomeAmount } />
        </div>
    );
}