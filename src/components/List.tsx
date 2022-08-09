import ListItem from './ListItem';
import { data } from '../data';


export default function List() {
    return (
        <ul className='list'>
            {
                data.map(element => <ListItem key={Math.random() * 10000} data={element}/>)
            }
        </ul>
    )
}