import styles from './FeedPhoto.module.css';
import { ReactComponent as HeartStroke } from '../../Assets/icones/heart/Path Copy 2@1,5x.svg';
import { ReactComponent as HeartFill } from '../../Assets/icones/heart/Path@1,5x.svg';
import { useState } from 'react';


const FeedPhoto = ({photo, values, setValues}) => {
    
    const [heartToggle, setHeartToggle] = useState(false);
    
    //console.log(heartToggle)
    function handleHeartToggle(){
        
        if(heartToggle){
            //remove id from value
            console.log('retirou')
            //const newArr = arr.filter(e => e !== '3')
            setValues(values.filter(value => value !== photo.id))
            setHeartToggle(!heartToggle);
        }else{
            //add id to value
            console.log('colocou')
            
            setValues([...values, photo.id])
            setHeartToggle(!heartToggle);
            
        }
    }
    return (
        <li>
            <img src={`${photo.thumbnail.path}.${photo.thumbnail.extension}`} alt={photo.name} width="200" height="200" />
            <div>
                <h3>{photo.name}</h3>
                {heartToggle ? <HeartFill onClick={handleHeartToggle}/> : <HeartStroke onClick={handleHeartToggle}/>}
            </div>
        </li> 
    )    
};

export default FeedPhoto;