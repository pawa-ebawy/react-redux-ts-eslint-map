import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const PointItem = (props: any) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Lat',
      dataIndex: 'lat',
      key: 'lat',
    },
    {
      title: 'Lon',
      dataIndex: 'lon',
      key: 'lon',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'action',
      render: (text: string, record: any) => (
        <span>
          <button
            type="button"
            onClick={() => { props.setCenter([record.lon, record.lat]); }}
          >
            Go to
          </button>
        </span>
      ),
    },
  ];
  return (
    <div className="points-block">
      <Table
        columns={columns}
        dataSource={props.pointsObject}
        rowKey={(record) => record.id}
        pagination={false}
      />
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    pointsObject: state.points,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setCenter: (number: number) => dispatch({ type: 'SET_CENTER', payload: number }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PointItem);
