import { NavLink } from "react-router-dom"
import Privator from "../assets/logo.png"
import male from "../assets/male.png"
import female from "../assets/female.png"

const Navbar = () => {
    return (
        <div className="px-16 py-3 flex justify-between items-center shadow-md sticky top-0 z-20 bg-white">
            <div className="flex gap-x-4 items-center">
                <NavLink to="/">
                    <img src={Privator} alt="" className="h-12"/>
                </NavLink>
            </div>
            <div className="flex gap-x-5">
                <NavLink to="/course">Course</NavLink>
                <NavLink to="/course">My list</NavLink>
                <NavLink to="/course">Cart</NavLink>
            </div>
            <div className="flex gap-x-5 items-center">
                <div>
                    <NavLink to="/profile/user">
                        <img src={female} alt="" className="w-9" />
                    </NavLink>
                </div>
                <h1>login</h1>
            </div>
        </div>
    )
}

export default Navbar