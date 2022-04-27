import React, {useState} from "react";

export const UncontrolledRating = () => {
    const a = [1, 2, 3, 4, 5]
    const setRat = (id: number) => {
        setRating(id)
    }
    const [rating, setRating] = useState<number>(0)
    return (
        <div>
            {a.map(el => {
                return (
                    <Star id={el} callBack={setRat} selected={rating >= el}/>
                )
            })}
        </div>
    )
}
type StarProps = {
    id: number
    callBack: (id: number) => void
    selected: boolean
}
const Star = (props: StarProps) => {
    const onclickHandler = () => {
        props.callBack(props.id)
    }

    return (
        <span onClick={onclickHandler}>
            {props.selected ? <b>' x '</b> : " ' x ' " }
        </span>
    )
    /*if (props.selected) {
        return <span>
            <span onClick={onclickHandler}>
               <b>' x '</b>
            </span>
        </span>
    } else {
        return <span>
            <span onClick={onclickHandler}>
              ' x '
            </span>
        </span>
    }*/
}