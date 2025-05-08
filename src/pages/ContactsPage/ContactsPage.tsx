import { selectIsLoading, selectError } from "../../redux/contacts/selectors"
import { useDispatch } from "react-redux";
import { lazy } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import c from './ContactsPage.module.css'

import ContactsForm from '../../components/ContactsForm/ContactsForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return(
        <>
            <h1 className={c.title}>Phonebook</h1>
            <ContactsForm />
            <SearchBox />
            {isLoading && !isError && <h3>Loading...</h3>}
            <ContactList />
        </>
    )
}