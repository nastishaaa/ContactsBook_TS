import c from './HomePage.module.css'

export default function HomePage() {
    return(
        <>
            <h2 className={c.title}>Welcome! 🙋‍♀️</h2>
            <p className={c.subtitle}>This app will help you keep your contacts safe and organized.</p>

        <div className={c.features}>
            <div className={c.card}>
            <h3>📇 Manage Contacts</h3>
            <p>Quickly add, remove, and edit contacts in one place.</p>
            </div>
            <div className={c.card}>
            <h3>🔍 Easy Search</h3>
            <p>Find the right person in seconds using our smart search.</p>
            </div>
            <div className={c.card}>
            <h3>🔒 Safe & Secure</h3>
            <p>Your contact data stays private and protected.</p>
            </div>
        </div>
        </>
    )
}