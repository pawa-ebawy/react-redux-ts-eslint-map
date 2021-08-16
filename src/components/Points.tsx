import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { IState } from '../interfaces';
import { setCenter } from '../actions/actions';

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
];

const PointItem: React.FC = (props: any) => (
  <div className="points-block">
    <Table
      columns={columns}
      dataSource={props.pointsObject}
      rowKey={(record) => record.id}
      onRow={(record) => ({
        onClick: () => { props.setCenter([record.lon, record.lat]); },
      })}
    />
  </div>
);

function mapStateToProps(state: IState) {
  return {
    pointsObject: state.points,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setCenter: (number: number) => dispatch(setCenter(number)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PointItem);
