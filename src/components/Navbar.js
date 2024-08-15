import {Link} from "react-router-dom";
function Navbar(){

    return(
      <>
        

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="logo">S</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add-new-item">Add New Item</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/displayAllItem">display All Item</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="displayAllItem">update Item</Link>
        </li>
      </ul>
    </div>
    
  </div>

  
</nav>
      </>
    );
  }
  
export default Navbar;  