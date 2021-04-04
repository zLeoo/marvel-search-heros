
import {useContext} from 'react';
import { UserContext } from '../../UserContext';
import FeedPhoto from './FeedPhoto';

import styles from './Feed.module.css'
import FeedHeader from './FeedHeader';

const Feed = () => {

    const { data, erro, request } = useContext(UserContext);
    
    if (data){
        const results = data.data.results;
        return (
            <section>
                <FeedHeader/>
                <ul className={styles.gridContainer}>
                    {results.map(photo => <FeedPhoto key={photo.id} photo={photo}/>)}
                </ul>
            </section>
        );
    } else return null;
    
};

export default Feed;