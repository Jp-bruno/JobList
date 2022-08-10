import FilterTag from './FilterTag';

type FilterProps = {
    filters: string[],
    removeFilter: (event: any) => void,
    clearFilters: (event: any) => void
}

export default function Filter({ filters, removeFilter, clearFilters }: FilterProps) {

    return (
        <div className={`filter_wrapper ${filters.length > 0 ? 'on' : ''}`}>
            <ul className='filter_list'>
                {filters.map((element: string) => <FilterTag key={Math.random() * 1000} removeFilter={removeFilter} filterName={element} />)}
            </ul>
            <button onClick={clearFilters} className='clear_filters'>
                Clear
            </button>
        </div>
    )
}

