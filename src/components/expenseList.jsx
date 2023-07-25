// import { ExpenseAmount } from "../dabase";

export default function ExpenseList(props) {
    // console.log(ExpenseAmount); //re-rendering problem is arised here
    return (
        <div className="w-6/12 mx-auto mt-10 text-stone-900">
            <p className="text-xl font-semibold text-center border-b-2">{ props?.title }</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props?.list?.map((ea,i) => {
                                return (
                                    <tr key={i}>
                                        <td>{ea.title}</td>
                                        <td>{ea.amount}</td>
                                        <td>{ea.date}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}