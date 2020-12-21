import React, { useEffect, useState } from 'react'
import { Row, Col, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import Settings from '../component/Settings'
import SearchInput from './SearchInput'
import History from '../../common/component/History'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../state'
import { actions as authActions } from '../../auth/state/index'
import useNeedLogin from '../../common/hook/useNeedLogin'

export default function Search() {
  ///////////login
  useNeedLogin();

  function logout() {
    dispatch(authActions.fetchLogout())
  }
  ////////////

  const history = useSelector(state => state.search.history)
  const dispatch = useDispatch()
  const [loadingbar, setLodingbar] = useState(null)

  useEffect(() => {
    loadHistory()
  }, [])

  function loadHistory() {
    console.log(page)
    dispatch(actions.fetchAllHistory(page));
    setPage(page + 1)
  }

  //infinite scroll
  const [page, setPage] = useState(0)

  const observer = new IntersectionObserver(entries => {
    loadHistory()
  }, { threshold: 1 })

  useEffect(() => {
    if (loadingbar) {
      observer.observe(loadingbar)
    }

    return () => {
      if (loadingbar) {
        return observer.unobserve(loadingbar)
      }
    }
  }, [loadingbar])
  //////////////////


  return <>
    <Row justify="end" style={{ padding: 20 }}>
      <Col><Settings logout={logout} /></Col>
    </Row>
    <Row justify="center" style={{ marginTop: 100 }}>
      <Col>
        <p style={{ fontSize: '60px', fontFamily: 'Nanum Pen Script' }}>찾 아 야 한 다</p>
      </Col>
    </Row>
    <Row justify="center" style={{ marginTop: 50 }}>
      <Col span={12} md={16} lg={12}><SearchInput /></Col>
    </Row>
    <Row justify="center" style={{ marginTop: 50 }}>
      <Col span={12} md={16} lg={12}><History items={history} /></Col>
    </Row>
    <Row justify="center" style={{ marginTop: 40 }}>
      <Col>
        <div ref={setLodingbar}>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24, bottom: 20 }} spin />} />
        </div>
      </Col>
    </Row>
  </>
} 
