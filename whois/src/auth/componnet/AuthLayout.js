import React from 'react'
import { Col, Row, Typography, Form } from 'antd'

/**
 * 
 * @param {object} param
 * @param {() => void} param.onFinish
 * @param {import('react').ReactNode} param.children
 */
export default function AuthLayout({children, onFinish}){
    return (
        <>
            <Row justify="center" style={{marginTop: 100}}>
                <Col>
                    <Typography.Title style={{fontFamily: 'Nanum Pen Script'}}>
                        찾 아 야 한 다 
                    </Typography.Title>
                </Col>
            </Row>  
            <Row justify="center">
                <Col>
                    <Form
                        name="normal_login"
                        initialValues={{ remember: true }}
                        style={{width:300, marginTop:50}}
                        onFinish={onFinish}
                    >
                        {children}
                    </Form>
                </Col>
            </Row>
        </>
    )
}