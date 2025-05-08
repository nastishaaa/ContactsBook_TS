import c from './SearchBox.module.css'
import { useId } from "react";
import { useAppDispatch } from '../../redux/hooks';
import { changeFilter } from '../../redux/filters/slice';

export default function SearchBox() {
    const searchId = useId();
    const dispatch = useAppDispatch();
    
    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeFilter(e.target.value));
    }
    
    return (
        <div className={c.div}>
            <label>Find contacts by name</label>
            <input className={c.input}
                id={searchId}
                type="text"
                name="search"
                onChange={handleFilter}
            />
        </div>
    );
}