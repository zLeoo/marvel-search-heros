
import {useContext} from 'react';
import { UserContext } from '../../UserContext';

import styles from './FeedHeader.module.css'
import { ReactComponent as Hero } from '../../Assets/icones/heroi/noun_Superhero_2227044@1,5x.svg';
import { ReactComponent as HeartStroke } from '../../Assets/icones/heart/Path Copy 2@1,5x.svg';
import { ReactComponent as HeartFill } from '../../Assets/icones/heart/Path@1,5x.svg';

const FeedHeader = () => {
    const { data, erro, request } = useContext(UserContext);
    
    
    return (
        <div className={styles.container}>
            Encontrados {data.data.total} herois
            <div className={styles.wrapper}>
                <Hero/>
                <div>Ordenar por nome</div>
                <div>Somente Favoritos</div>
                <HeartFill/>
            </div>
        </div>
    );
};

export default FeedHeader;