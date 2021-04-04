import styles from './FeedPhoto.module.css';
import { ReactComponent as HeartStroke } from '../../Assets/icones/heart/Path Copy 2@1,5x.svg';
import { ReactComponent as HeartFill } from '../../Assets/icones/heart/Path@1,5x.svg';


const FeedPhoto = ({photo}) => {
    console.log(photo)
    return (
        <li>
            <img src={`${photo.thumbnail.path}.${photo.thumbnail.extension}`} alt={photo.name} width="200" height="200" />
            <div>
                <h3>{photo.name}</h3>
                <HeartFill/>
            </div>
        </li> 
    )    
};

export default FeedPhoto;