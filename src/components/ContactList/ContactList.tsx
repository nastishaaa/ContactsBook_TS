import Contact from '../Contact/Contact';
import { useAppSelector } from '../../redux/hooks';
import c from './ContactList.module.css';
import { selectVisibleContacts } from '../../redux/filters/slice';

export default function ContactList() {
    const visibleContacts = useAppSelector(selectVisibleContacts )
    return (
        <ul className={c.list}>
            {visibleContacts.map(({ id, name, number }) => (
                <Contact id={id} key={id} name={name} number={number} />
            ))}
        </ul>
    );
}