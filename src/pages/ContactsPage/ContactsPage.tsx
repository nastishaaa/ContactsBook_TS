import { selectIsLoading, selectError } from "../../redux/contacts/selectors"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import c from './ContactsPage.module.css'

import ContactsForm from '../../components/ContactsForm/ContactsForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';

export default function ContactsPage() {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(selectIsLoading);
    const isError = useAppSelector(selectError);

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