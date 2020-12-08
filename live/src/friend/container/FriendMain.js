import React from 'react'
import {getNextFriend} from '../../common/mockData'
import {actions} from '../state'
import FriendList from '../component/FriendList.js'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import NumberSelect from '../component/NumberSelect'
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common'
import { getAgeLimit, getFriendsWithAgeLimit, getFriendsWithAgeShowLimit, getShowLimit } from '../state/selector'

export default function FriendMain() {
    const ageLimit = useSelector(getAgeLimit);
    const showLimit = useSelector(getShowLimit);
    const friendsWithAgeLimit = useSelector(getFriendsWithAgeLimit);
    const friendsWithAgeShowLimit = useSelector(getFriendsWithAgeShowLimit);

    const dispatch = useDispatch();
    
    function onAdd(){
        const friend = getNextFriend();
        dispatch(actions.addFriend(friend))
    }
    console.log('Friendmain render', friendsWithAgeLimit)
    return (
        <div>
            <button onClick={onAdd}>친구추가</button>
            <NumberSelect 
                onChange={v => dispatch(actions.setValue('ageLimit', v))}
                value={ageLimit}
                options={AGE_LIMIT_OPTIONS}
                postfix="세 이하만 보기"
            />
            <FriendList friends = {friendsWithAgeLimit}/>
            <NumberSelect
                onChange={v=>dispatch(actions.setValue('showLimit', v))}
                value={showLimit}
                options={SHOW_LIMIT_OPTIONS}
                postfix="명 이하만 보기 (연령 제한 적용)"
            />
            <FriendList friends = {friendsWithAgeShowLimit}/>

        </div>
    )
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT]
const SHOW_LIMIT_OPTIONS = [2,4,6, MAX_SHOW_LIMIT]