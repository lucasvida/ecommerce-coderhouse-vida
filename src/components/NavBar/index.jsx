import "./navbar.css"


function NavBar(){
    return (<nav className="menu">
        <div>
           LOGOTIPO
        </div>
       <div>
               <ul>
                    <li>
                        <a href="#"> 🏡 HOME </a>
                    </li>
                    <li>
                        <a href="#"> 👩‍💻 SOBRE </a>
                    </li>
                    <li>
                        <a href="#"> 🛹 PRODUTOS </a>
                    </li>
                    <li>
                        <a href="#"> 📲 CONTATOS </a>
                    </li>
               </ul>
       </div>
        <div>
           <button className="btn-login">LOGIN</button>
        </div>
    </nav>)
    
}

export default NavBar;