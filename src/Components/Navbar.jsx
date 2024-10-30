import "./CSS/Navbar.css"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [menu,setMenu] = useState("inicio")

    return (
        <div className="navbar">
            <ul className="nav-menu">
                <li onClick={ ()=>{ setMenu("inicio") } }><Link style={{textDecoration:'none'}} to='/'>Inicio</Link>  { menu === "inicio" ? <hr/> : <></> }</li>
                <li onClick={ ()=>{ setMenu("funciones") } }><Link style={{textDecoration:'none'}} to='/funciones'>Funciones</Link>  { menu === "funciones" ? <hr/> : <></> }</li>
                <li onClick={ ()=>{ setMenu("trigonometria") } }><Link style={{textDecoration:'none'}} to='/trigonometria'>Trigonometría</Link>  { menu === "trigonometria" ? <hr/> : <></> }</li>
                <li onClick={ ()=>{ setMenu("matrices") } }><Link style={{textDecoration:'none'}} to='/matrices'>Matrices</Link>  { menu === "matrices" ? <hr/> : <></> }</li>
            </ul>
        </div>
    )
}
export default Navbar