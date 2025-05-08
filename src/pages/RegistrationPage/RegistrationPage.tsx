import BtnBackHome from '../../components/BtnBackHome/BtnBackHome.js'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx'
import c from './RegistrationPage.module.css'

export default function RegistrationPage() {
    
    return(
        <>
            <h2 className={c.title}>Registration</h2>
            <RegistrationForm />
            <BtnBackHome />
        </>
    )
}