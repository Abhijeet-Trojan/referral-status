import React from 'react';
import { Col, Row } from 'antd';
import './Candidate.css'

const CandidateData = (props) => {
  return (
    <>
      <Row>
        <Col flex="65px">
            <img src={props.userIcon} />
        </Col>
        <Col flex="auto">
            <Row><span className='userName'>{props.name}</span></Row>
            <Row><span className='userRole'>{props.role}</span></Row>
        </Col>
      </Row>
    </>
  )
}

export default CandidateData
