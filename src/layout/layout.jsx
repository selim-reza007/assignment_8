import { NavLink, Link } from "react-router-dom";

export default function Layout() {

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Home</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-20">
                    <li><NavLink to={'/income'}>Income</NavLink></li> 
                    <li><NavLink to={'/expense'}>Expense</NavLink></li>
                </ul>
            </div>
        </div>
    );
}