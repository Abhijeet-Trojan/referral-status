import React from 'react';
import { Table } from 'antd';
import DataSteps from './DataSteps';
import CandidateData from './CandidateData';
import Reward from './Reward';
import './DataSteps.css';



const DataTable = () => {
    const columns = [
        {
          title: 'Candidate',
          dataIndex: 'candidate',
          key: 'candidate',
        },
        {
          title: 'Reffered Interview Hired Joined',
          dataIndex: 'reffered',
          key: 'reffered',
        //   render: (text, record) => <DataSteps />
        },
        {
          title: 'Reward',
          dataIndex: 'reward',
          key: 'reward',
        },
      ];
      const data = [
        {
          key: '1',
          candidate: <CandidateData name="Anmol Mahajan" role="Data Analyst" userIcon={require('../assets/icon-48.png')} />,
          reffered: <DataSteps />,
          reward: <Reward amount="2000" />,
        },
        {
          key: '2',
          candidate: <CandidateData name="Pradeep Kumar" role="Sr. Manager" userIcon={require('../assets/icon-48.png')} />,
          reffered: <DataSteps />,
          reward: <Reward amount="70000" />,
        },
        {
          key: '3',
          candidate: <CandidateData name="Ankush" role="Jr.Backend Associate" userIcon={require('../assets/icon-48.png')} />,
          reffered: <DataSteps />,
          reward: <Reward amount="5000" />,
        },
        {
          key: '4',
          candidate: <CandidateData name="Ankit" role="Android Developer" userIcon={require('../assets/icon-48.png')} />,
          reffered: <DataSteps />,
          reward: <Reward amount="1000" />,
        },
        {
          key: '5',
          candidate: <CandidateData name="Aadhar Toshniwal" role="Sr.Frontend Developer" userIcon={require('../assets/icon-48.png')} />,
          reffered: <DataSteps />,
          reward: <Reward amount="200" />,
        },
    ];

  return (
    <>
      <Table className='dataTable' columns={columns} dataSource={data} pagination={false} />
    </>
  )
}

export default DataTable
