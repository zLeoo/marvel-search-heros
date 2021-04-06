
import {useContext} from 'react';
import { UserContext } from '../../UserContext';

import styles from './FeedHeader.module.css'
import { ReactComponent as HeroIcon } from '../../Assets/icones/heroi/noun_Superhero_2227044@1,5x.svg';
import { ReactComponent as HeartStroke } from '../../Assets/icones/heart/Path Copy 2@1,5x.svg';
import { ReactComponent as HeartFill } from '../../Assets/icones/heart/Path@1,5x.svg';
import Toggle from '../Toggle/Toggle';
import { useState } from 'react';

const FeedHeader = () => {
    const { data, erro, request } = useContext(UserContext);
    
    const [heartToggle, setHeartToggle] = useState(false);
    
    return (
        <div className={styles.container}>
            Encontrados {data.data.total} herois
            <div className={styles.wrapper}>
                <HeroIcon className={styles.heroIcon}/>
                <div>Ordenar por nome</div>
                <Toggle/>
                <div>Somente Favoritos</div>
                {heartToggle ? <HeartFill className={styles.heartIcon} onClick={() => setHeartToggle(!heartToggle)}/> : <HeartStroke className={styles.heartIcon} onClick={() => setHeartToggle(!heartToggle)}/>}
            </div>
        </div>
    );
};

export default FeedHeader;