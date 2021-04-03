
import styles from './SearchBar.module.css';
import useFetch from './../../Hooks/useFetch';
import { GET_HEROS } from './../../Api';



const SearchBar = ({name, placeholder, value, setValue, onChange}) => {

    const {url} = GET_HEROS(value);
    const { request } = useFetch(url);
    
    function handleSubmit(event) {
        event.preventDefault();
        

    
        request(url);
        console.log('submit');
    }

    return (
        <form className={styles.SearchBar} onSubmit={handleSubmit}>
            <input label="Character" type="text" name="character" placeholder={placeholder} onChange={onChange} />
        </form>
    );
};

export default SearchBar;