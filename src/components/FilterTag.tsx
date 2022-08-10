type TagProps = {
    filterName: string,
    removeFilter: (event: any) => void
}

export default function FilterTag({ filterName, removeFilter }: TagProps) {
    return (
        <li className='filter_tag'>
            <span>{filterName}</span>
            <button onClick={removeFilter} data-filtername={filterName} className='filter_tag_button'><img src='/Joblist/images/icon-remove.svg' alt='remove filter'></img></button>
        </li>
    )
}