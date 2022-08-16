import React from 'react'
import { Col, Row } from 'antd';
import './index.css';

const Header = () => {
  return (
    <div className='header-container'>

      <Row>
        <Col span={8} className="app-name">React Trip</Col>
        <Col span={2} className>Home</Col>
        <Col span={2}>Contact us</Col>
        <Col span={2}>About</Col>
        <Col span={6}>Pinky Preshma</Col>
        <Col span={4}>Logout</Col>

      </Row>
    </div>
  )
}

export default Header