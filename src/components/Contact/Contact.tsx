import { useAppDispatch } from "../../redux/hooks";
import { useState } from "react";
import { deleteContact, changeContact } from "../../redux/contacts/operations";
import Modal from "../Modal/Modal";
import ModalChange from "../ModalChange/ModalChange";
import c from './Contact.module.css';
import toast from "react-hot-toast";

interface Props {
    id: string;
    name: string;
    number: string;
}

interface ChangeContact{
    name?: string;
    number?: string;
}

export default function Contact({ id, name, number }:Props) {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isChangeOpen, setIsChangeOpen] = useState<boolean>(false);

    const handleDelete = (): void => {
        setIsOpen(true); 
    };

    const onSubmit = (): void => {
        setIsChangeOpen(true);
    }

    const handleChangeContact = (newData: ChangeContact) =>{
        let updatedName = newData.name?.trim() || name;
        let updatedNumber = newData.number?.trim() || number;
        
        if (updatedName.length <= 3 || updatedName.length > 25) {
            toast.error("Name must be between 4 and 25 characters.");
            return;
        }
    
        if (updatedNumber.length !== 7) {
            toast.error("Phone number must be exactly 7 digits.");
            return;
        }
    
        
            dispatch(changeContact({ id, name: updatedName, number: updatedNumber }));
        setIsChangeOpen(false);


    }

    const confirmDelete = (): void => {
        dispatch(deleteContact(id)); 
        setIsOpen(false); 
    };

    const cancelDelete = (): void => {
        setIsOpen(false); 
        setIsChangeOpen(false);
    };

    return (
        <li>
            <p>{name}</p>
            <p>{number}</p>
            <div className={c.btnsContainer}> 
                <button className={c.btn} onClick={handleDelete} type="button">Delete</button>
                <button className={c.btn} onClick={onSubmit} type="button">Change contact</button>
            </div>
            
            {isOpen && <Modal onConfirm={confirmDelete}
            onCancel={cancelDelete} />}
            {isChangeOpen && <ModalChange onCancel={cancelDelete}
            onSubmit={handleChangeContact}
            defaultName={name}
            defaultNumber={number}/>}
        </li>
    );
}