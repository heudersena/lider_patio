import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from '../../../context/auth';
export default function Navegacao() {
  const { setIsLoggedIn, logount } = useAuth();

  return (


<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/">LIDER DE PÁTIO</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
               <Link className="nav-link" to="/relatorio">RELATÓRIO</Link>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li> */}
        </ul>
        <form className="form-inline my-2 my-lg-0">          
          <button onClick={logount} className="btn btn-outline-danger my-2 my-sm-0" type="submit">LOGOUNT</button>
        </form>
      </div>
    </nav>
  )
}