
import styles from './SearchBar.module.css';

import { GET_HEROS, GET_HEROS_BY_NAME } from './../../Api';
import { useContext } from 'react';
import { UserContext } from './../../UserContext';



const SearchBar = ({name, placeholder, value, setValue, onChange}) => {

    const {setValueGlobal, request, toggle} = useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();

        setValueGlobal(value);

        const {url} = toggle ?  GET_HEROS_BY_NAME(value) : GET_HEROS(value);

        request(url);

        
        
    }

    return (
        <form className={styles.SearchBar} onSubmit={handleSubmit}>
            <input label="Character" type="text" name="character" placeholder={placeholder} onChange={onChange} />
        </form>
    );
};

export default SearchBar;