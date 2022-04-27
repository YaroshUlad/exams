import React, {useState} from "react";


type UncontrolledAccordionPropsType = {
    title: string,
}

export const UncontrolledAccordion: React.FC<UncontrolledAccordionPropsType> = ({title}) => {
    let a = [1, 2, 3, 4, 5]
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
    const onClickHandler = () => {
        setIsCollapsed(!isCollapsed)
    }
    return (
        <div>
            <div>
                <span onClick={onClickHandler}>{title}</span>
                {/*<input type="button" value={'='} onClick={onClickHandler}/>*/}
            </div>
            {isCollapsed && <div>
                <ul>
                    {a.map(el =>{return <li>{el}</li>}

                        )
                    }
                </ul>
            </div>}
        </div>
    )
}