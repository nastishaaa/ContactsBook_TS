import BtnBackHome from "../../components/BtnBackHome/BtnBackHome"
import LoginForm from "../../components/LoginForm/LoginForm"
import c from './LoginPage.module.css'

export default function LoginPage() {
    return(
        <>
            <h2 className={c.title}>Login</h2>
            <LoginForm />
            <BtnBackHome />
        </>
    )
}