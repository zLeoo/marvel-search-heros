
import styles from './SearchBar.module.css';

import { GET_HEROS } from './../../Api';
import { useContext } from 'react';
import { UserContext } from './../../UserContext';



const SearchBar = ({name, placeholder, value, setValue, onChange}) => {

    const { url } = GET_HEROS(value);
    const { request } = useContext(UserContext);
    
    async function handleSubmit(event) {
        event.preventDefault();
        
        request(url);
        
    }

    return (
        <form className={styles.SearchBar} onSubmit={handleSubmit}>
            <input label="Character" type="text" name="character" placeholder={placeholder} onChange={onChange} />
        </form>
    );
};

export default SearchBar;