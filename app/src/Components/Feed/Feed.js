
import {useContext, useEffect} from 'react';
import { UserContext } from '../../UserContext';
import FeedPhoto from './FeedPhoto';

import styles from './Feed.module.css'
import FeedHeader from './FeedHeader';
import { useState } from 'react';

const Feed = () => {

    const { data, erro} = useContext(UserContext);
    const [values, setValues] = useState(['teste']);
    console.log(values)
       if (data){
            const results = data.data.results;
            return (
                <section>
                    <FeedHeader/>
                    <ul className={styles.gridContainer}>
                        {results.map((photo, index) => <FeedPhoto key={index} photo={photo} values={values} setValues={setValues} />)}
                    </ul>
                </section>
            );
        } else return null;
   
    
};

export default Feed;