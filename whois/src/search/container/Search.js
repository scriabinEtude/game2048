import React, { useEffect } from 'react'
import { Row, Col } from 'antd'
import Settings from '../component/Settings'
import SearchInput from './SearchInput'
import History from '../../common/component/History'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../state'
import {actions as authActions} from '../../auth/state/index'
import useNeedLogin from '../../common/hook/useNeedLogin'

export default function Search() {
  useNeedLogin();
  const history = useSelector(state => state.search.history)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchAllHistory());
  }, [dispatch])

  function logout(){
    dispatch(authActions.fetchLogout())
  }

  return <>
    <Row justify="end" style={{padding:20}}>
        <Col><Settings logout={logout}/></Col>
    </Row>
    <Row justify="center" style={{marginTop:100}}>
        <Col>
            <p style={{fontSize:'60px', fontFamily:'Nanum Pen Script'}}>찾 아 야 한 다</p>
        </Col>
    </Row>
    <Row justify="center" style={{marginTop:50}}>
        <Col span={12} md={16} lg={12}><SearchInput /></Col>
    </Row>
    <Row justify="center" style={{marginTop:50}}>
        <Col span={12} md={16} lg={12}><History items={history} /></Col>
    </Row>
  </>
} 
