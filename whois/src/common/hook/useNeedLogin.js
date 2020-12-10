import { useSelector } from "react-redux";
import {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { AuthStatus } from "../constant";

export default function useNeedLogin(){
    const history = useHistory();
    const state = useSelector(state => state.auth.status)
    useEffect(() => {
        if(state === AuthStatus.NotLogin){
            history.replace('/login')
        }
    },[state, history])
}