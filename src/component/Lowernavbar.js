import { Link } from "react-router-dom"
export default function Lowernavbar(){
    return(
        <div className="Lower-Navbar">
               <ul className="Lower-Navbar-parent">
                <Link to='/home'><li className="Lower-Navbar-Content">All</li></Link>
                <Link to='/shirt'><li className="Lower-Navbar-Content">Shirt</li></Link>
                <Link to='/pant'><li className="Lower-Navbar-Content">Pant</li></Link>
                </ul>
        </div>
    )
}