import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'


export type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
            <Affair // should work
                key={a.id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
                affair={a}
                deleteAffairCallback={props.deleteAffairCallback}
            />
        ))

    const onAllHandler = () => {
        props.setFilter('all')
    } // need to fix
    const onHighHandler  = () => {
        props.setFilter('high')
    }
    const onMiddleHandler = () => {
        props.setFilter('middle')
    }
    const onLowHandler = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={onAllHandler} className={'all'}>All</button>
            <button onClick={onHighHandler} className={'high'}>High</button>
            <button onClick={onMiddleHandler} className={'middle'}>Middle</button>
            <button onClick={onLowHandler} className={'low'}>Low</button>
        </div>
    )
}

export default Affairs
