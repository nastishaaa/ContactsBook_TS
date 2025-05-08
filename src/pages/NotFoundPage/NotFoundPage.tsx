import { Link } from 'react-router-dom';
import c from './NotFoundPage.module.css';

export default function NotFoundPage() {
    return(
        <div className={c.content}>
            <h1>Not found page</h1>
            <h2>Go back to <Link className={c.a} to="/">Home</Link></h2>
        </div>
    )
}