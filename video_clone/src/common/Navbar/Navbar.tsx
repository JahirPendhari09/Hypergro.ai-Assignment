import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; 

const Navbar = () => {

    return <div className={styles.mainNavbar} >
        <div className={styles.logo} >
            <Link  to ="" onClick={()=> window.location.href="/"} >Home</Link>
            <h2>Video Clone</h2>
        </div>
    </div>
}

export { Navbar }