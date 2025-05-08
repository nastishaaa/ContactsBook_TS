import { Link } from "react-router-dom";
import c from './BtnBackHome.module.css';

export default function BtnBackHome() {
    return(
        <div>
            <Link to='/'>
                <button className={c.btnBackHome} type="button">
                    Back Home
                </button>
            </Link>
        </div>
    );
}
