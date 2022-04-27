import React from "react";
import s from './SwitchOnOff.module.css'

type SwitchOnOffPropsType = {
    isOn:boolean
}
export const SwitchOnOff = (props: SwitchOnOffPropsType) => {
    return (
        <div className={s.wrapper}>
            {props.isOn===false && <>
                <div>ON</div>
                <div className={s.off}>OFF</div>
                <div className={s.off}>O</div>
            </> }
            {props.isOn && <><
                div className={s.on}>ON</div>
                <div >OFF</div>
                <div className={s.on}>O</div></>}
        </div>

    )
}