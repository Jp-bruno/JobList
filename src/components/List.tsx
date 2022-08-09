import ListItem from './ListItem';
import Filter from './FilterWrapper';
import { data } from '../data';
import { useState } from 'react';


export default function List() {
    const [filters, setFilters] = useState(['React', 'Frontend']);

    function addFilter(event:any) {
        const currentItem:string = event.target.dataset.itemname;

        return filters.some(el => el === currentItem) ?
        () => {return}
        :
        setFilters([...filters, currentItem])
    }

    function removeFilter(event:any) {
        const currentItem:string = event.target.dataset.filtername;
        
        const newArr = filters.filter((el) => {
            if (el === currentItem) {
                return false
            }
            return el
        })

        console.log(newArr)

        setFilters(newArr)
    }

    return (
        <>
            <Filter filters={filters} removeFilter={removeFilter} />
            <ul className={`list ${filters.length > 0 ? 'filtered' : ''}`}>
                {
                    data.map(element => <ListItem addFilter={addFilter} key={Math.random() * 10000} data={element} />)
                }
            </ul>
        </>
    )
}