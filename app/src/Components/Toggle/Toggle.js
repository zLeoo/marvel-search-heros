import styles from './Toggle.module.css';
import { useContext } from 'react';
import { UserContext } from './../../UserContext';
import { GET_HEROS, GET_HEROS_BY_NAME } from '../../Api';
import useForm from './../../Hooks/useForm';



const Toggle = () => {
    
    const {valueGlobal ,request, toggle, setToggle} = useContext(UserContext);
    
    //console.log(toggle)

    function handleClick(){
        //console.log(valueGlobal)
        
        setToggle(!toggle)
        console.log(toggle)
        const {url} = !toggle ?  GET_HEROS_BY_NAME(valueGlobal) : GET_HEROS(valueGlobal);
        
        request(url);
    }

    return (
        <div className={`${styles.toggleContainer} ${toggle && styles.active}`} onClick={handleClick}>
            <div className={styles.circle}></div>
        </div>
    );
};

export default Toggle;