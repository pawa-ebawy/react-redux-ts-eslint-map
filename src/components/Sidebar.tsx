import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Dispatch } from 'redux';
import { IState, ISidebar } from '../interfaces';
import { addZoom, setPoints, subZoom } from '../actions/actions';

interface ISidebarFunc {
  onSetPoints: Dispatch;
  onAddZoom: Dispatch;
  onSubZoom: Dispatch;
  zoom: number;
}

const Sidebar = (
  {
    onSetPoints,
    onAddZoom,
    onSubZoom,
    zoom,
  }: ISidebarFunc,
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

function mapStateToProps(state: IState): ISidebar {
  return {
    zoom: state.zoom,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    onSetPoints: () => dispatch(setPoints()),
    onAddZoom: () => dispatch(addZoom()),
    onSubZoom: () => dispatch(subZoom()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
