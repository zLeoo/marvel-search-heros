import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../Assets/logo/Group@1,5x.svg';

import SearchBar from "../SearchBar/SearchBar";
import SubTitle from './SubTitle';
import useForm from './../../Hooks/useForm';

const Header = () => {

    const search = useForm(); 

    
    
    return (
        <div>
            <div className={styles.logoContainer} >
                <Logo/>
                <SubTitle/>
                <SearchBar name="search" placeholder="Type the character's name" {...search}/>
            </div>
        </div>
    );
};

export default Header;