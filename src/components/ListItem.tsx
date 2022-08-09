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
    }
}

export default function ListItem({ data }: ListItemProps) {
    return (
        <>
            <li className='list_item'>
                <div className='list_item_content_wrapper'>
                    <img src={data.logo} height='80px' alt='imagem_vaga'></img>

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
                        <span className='job_tool'>
                            {data.role}
                        </span>
                        <span className='job_tool'>
                            {data.level}
                        </span>
                        {
                            data.tools.length < 1 ?
                                data.tools.map((element: any) => {
                                    return (
                                        <span className='job_tool'>
                                            {element}
                                        </span>
                                    )
                                })
                                :
                                null
                        }
                        {
                            data.languages.map((element: any) => <span className='job_tool'>{element}</span>)
                        }
                    </div>
                </div>
            </li>
        </>
    )
}