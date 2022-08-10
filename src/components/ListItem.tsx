type ListItemProps = {
    data: {
        id: number,
        company: string,
        logo: string,
        new: boolean,
        featured: boolean,
        position: string,
        role: string,
        level: string,
        postedAt: string,
        contract: string,
        location: string,
        languages: string[],
        tools: string[] | []
    },
    addFilter: (event: any) => void,
    filters: string[]
}

export default function ListItem({ data, addFilter, filters }: ListItemProps) {
    const allItemFilters = data.languages.concat(data.tools)
    allItemFilters.push(data.level, data.role)

    const isFiltered = filters.every(element => {
        return allItemFilters.find(el => el === element)
    })

    if (isFiltered || filters.length === 0) {
        return (
            <>
                <li className='list_item'>
                    <div className='list_item_content_wrapper'>
                        <img src={'/JobList' + data.logo} height='80px' alt='imagem_vaga' className='company_logo' />

                        <div className='list_item_job_description'>
                            <span className='list_item_title'>
                                {data.company}

                                <span className='list_item_title_options'>
                                    {
                                        data.new ?
                                            <div className='list_item_new'><p>NEW!</p></div>
                                            :
                                            null
                                    }
                                    {
                                        data.featured ?
                                            <div className='list_item_featured'><p>FEATURED</p></div>
                                            :
                                            null
                                    }
                                </span>
                            </span>

                            <span className='list_item_position'>
                                {data.position}
                            </span>

                            <span className='list_item_more'>
                                {data.postedAt}
                                <span className='list_item_dot'></span>
                                {data.contract}
                                <span className='list_item_dot'></span>
                                {data.location}
                            </span>
                        </div>

                        <div className='list_item_job_tools'>
                            <button key={Math.random() * 1000} className='job_tool' onClick={addFilter} data-itemname={data.role}>
                                {data.role}
                            </button>
                            <button key={Math.random() * 1000} className='job_tool' onClick={addFilter} data-itemname={data.level}>
                                {data.level}
                            </button>
                            {
                                data.tools.length > 0 ?
                                    data.tools.map((element: string) => {
                                        return (
                                            <button key={Math.random() * 1000} className='job_tool' onClick={addFilter} data-itemname={element}>
                                                {element}
                                            </button>
                                        )
                                    })
                                    :
                                    null
                            }
                            {
                                data.languages
                                    .map((element: string) =>
                                        <button key={Math.random() * 1000} className='job_tool' onClick={addFilter} data-itemname={element}>{element}</button>
                                    )
                            }
                        </div>
                    </div>
                </li>
            </>
        )
    }

    return null
}