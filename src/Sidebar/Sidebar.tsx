import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import 'antd/dist/antd.css';

interface ISidebar {
  onSetPoints: any;
  onAddZoom: any;
  onSubZoom: any;
  zoom: number;
}

const Sidebar = (
  {
    onSetPoints,
    onAddZoom,
    onSubZoom,
    zoom,
  }: ISidebar,
) => (
  <div className="sidebar-block">
    <Button style={{ marginBottom: '10px' }} type="primary" onClick={onSetPoints}>Добавить точки</Button>
    <h3>
      Текущий зум:
      {zoom}
    </h3>
    <Button onClick={onAddZoom}>Увеличить</Button>
    <Button onClick={onSubZoom}>Уменьшить</Button>
  </div>
);

function mapStateToProps(state: any) {
  return {
    zoom: state.zoom,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    onSetPoints: () => dispatch({ type: 'SET_POINTS' }),
    onAddZoom: () => dispatch({ type: 'ADD_ZOOM' }),
    onSubZoom: () => dispatch({ type: 'SUB_ZOOM' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
