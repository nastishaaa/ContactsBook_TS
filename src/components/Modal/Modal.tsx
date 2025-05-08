
import c from './Modal.module.css';

interface Props {
    onConfirm: () => void;
    onCancel: () => void;

}

export default function Modal({ onConfirm, onCancel }: Props) {
    const clickClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if(e.target === e.currentTarget){
            onCancel();
        }
    }
    
    return (
        <div className={c.modalOverlay} onClick={clickClose}>
            <div className={c.modalContent}>
                <h2 className={c.modalTitle}>Are you sure you want to delete?</h2>
                <div className={c.modalButtons}>
                    <button className={c.modalButtonConfirm} onClick={onConfirm}>Yes</button> 
                    <button className={c.modalButtonCancel} onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    );
}
