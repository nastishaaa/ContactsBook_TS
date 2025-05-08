import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import c from './AppBar.module.css'

const Navigation = lazy(() => import('../../components/Navigation/Navigation'));
const AuthNav = lazy(() => import('../../components/AuthNav/AuthNav'));
const UserMenu = lazy(() => import('../../components/UserMenu/UserMenu'));

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={c.header}>
            <Suspense fallback={null}>
                <div className={c.navContainer}>
                    <Navigation />
                </div>
                <div className={c.menuContainer}>
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </div>
            </Suspense>
        </header>
    )
}

export default AppBar;