import React, { useState } from 'react'
import {getNextTimeline} from '../../common/mockData'
import {actions} from '../state/index'
import TimelineList from '../component/TimelineList.js'
import { useSelector, useDispatch } from 'react-redux'

export default function TimelineMain() {
    const [currentText, setCurrentText] = useState('')
    const text = useSelector(state => state.timeline.text)
    const dispatch = useDispatch();
    const timelines = useSelector(state => state.timeline.timelines)
    const isLoading = useSelector(state => state.timeline.isLoading)
    const error = useSelector(state => state.timeline.error)

    function onAdd(){
        const timeline = getNextTimeline();
        dispatch(actions.addTimeline(timeline))
    }
    function onLike(e){
        const id = Number(e.target.dataset.id);
        const timeline = timelines.find(item => item.id === id);
        dispatch(actions.requestLike(timeline))
    }
    function onChangeText(e){
        const text = e.target.value;
        dispatch(actions.trySetText(text))
        setCurrentText(text)
    }

    console.log('TimelineMain render')
    return (
        <div>
            <button onClick={onAdd}>타임라인 추가</button>
            <TimelineList timelines={timelines} onLike={onLike} />
            {isLoading && <p>전송 중...</p>}
            {!!error && <p>ERROR!</p>}
            <input type="text:" value={currentText} onChange={onChangeText} />
            {!!text && <p>{text}</p>}
        </div>
    )
}

