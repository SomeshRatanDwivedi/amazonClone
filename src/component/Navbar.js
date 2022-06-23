import logo from "../images/amazon-logo.png"
export default function Navbar(cart){

    return (
        <nav className="upper-navbar">
            <div className="logo-parent" >
                <img className="logo" src={logo}/>
                <span className="dot-in">.in</span>
            </div>
            <div className="input-parent">
                 <input className="input" type="text"/>
                 <div className="search"><i className="fa-solid fa-magnifying-glass search-child"></i></div>
            </div>
            <div className="card-parent">
                  <div className="card">
                      <span className="card-i"><i className="fa-solid fa-cart-arrow-down"></i></span>
                      <span className="card-text">{cart.cart.length}</span>
                  </div>
                  <div className="signup">
                      <a>Login/Signup</a>

                  </div>
            </div>
        </nav>
    )
}