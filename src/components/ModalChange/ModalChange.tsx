import c from './ModalChange.module.css';
import React, { useState } from 'react';

export interface UserInfo { 
    name: string;
    number: string;
}

interface Props {
    onCancel: () => void;
    onSubmit: (user: UserInfo) => void;
    defaultName: string;
    defaultNumber: string;
}

export default function ModalChange({ onCancel, onSubmit, defaultName, defaultNumber } : Props) {
    const [contactName, setContactName] = useState(defaultName || '');
    const [contactNumber, setContactNumber] = useState(defaultNumber || '');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ name: contactName, number: contactNumber });
    };

    const clickClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if(e.target === e.currentTarget){
            onCancel();
        }
    }

    return (
        <div className={c.modalOverlay} onClick={clickClose}>
            <div className={c.modalContent}>
                <h2 className={c.modalTitle}>Change contact info</h2>
                <form className={c.form} onSubmit={handleSubmit}>
                    <label htmlFor="name" className={c.label}>Contact Name</label>
                    <input
                        className={c.input}
                        type="text"
                        id='name'
                        name="name"
                        value={contactName}
                        autoComplete="off"
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Enter new name"
                    />

                    <label htmlFor="number" className={c.label}>Contact Number</label>
                    <input
                        className={c.input}
                        type="tel"
                        id='number'
                        name="number"
                        autoComplete="off"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        placeholder="Enter new number"
                    />

                    <div className={c.modalButtons}>
                        <button type="submit" className={`${c.modalButton} ${c.modalButtonSave}`}>
                            Save Changes
                        </button>
                        <button type="button" className={`${c.modalButton} ${c.modalButtonCancel}`} onClick={onCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
