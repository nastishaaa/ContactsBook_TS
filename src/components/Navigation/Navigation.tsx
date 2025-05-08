
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useAppSelector } from "../../redux/hooks";
import { NavLink } from "react-router-dom";
import { Suspense } from "react";
import c from './Navigation.module.css';

export default function Navigation() {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    return(
        <div className={c.container}>
            <Suspense fallback={<div>Loading...</div>}>
                <nav>
                    <NavLink className={c.navText} to='/'>
                        <h2>Home</h2>
                    </NavLink> 
                    {isLoggedIn && <NavLink className={c.navText} to='/contacts'><h2>Contacts</h2></NavLink>}
                </nav>
            </Suspense>
            

            
        </div>
    )
    
}
