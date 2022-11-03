import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Steps } from 'antd';
import 'antd/dist/antd.css';
import './DataSteps.css'

const { Step } = Steps;

const DataSteps = () => {

  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', current);
    setCurrent(value);
  };

  return (
    <>
    <div className='bg-slate-800'>
      <Steps current={current} onChange={onChange}>
        <Step />
        <Step />
        <Step />
        <Step />
      </Steps>
    </div>
    </>
  )
}

export default DataSteps