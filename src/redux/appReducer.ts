import {
  ADD_ZOOM,
  SET_CENTER,
  SET_POINTS,
  SUB_ZOOM,
} from '../actions/actionTypes';
import { IState, IAction } from '../interfaces';

let pointsData: [] = [];

const getData = async () => {
  const response = await fetch('/orders.json');
  const result = await response.json();
  pointsData = await result.Orders.map((marker: any) => ({
    id: marker.id,
    name: marker.name,
    lon: marker.lon,
    lat: marker.lat,
  }));
};

getData();

const initialState: IState = {
  points: [],
  center: [37.622513, 55.753220],
  zoom: 10,
};

export default function appReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case SET_POINTS:
      return {
        points: pointsData,
        center: state.center,
        zoom: state.zoom,
      };
    case ADD_ZOOM:
      return {
        points: state.points,
        center: state.center,
        zoom: state.zoom + 1,
      };
    case SUB_ZOOM:
      return {
        points: state.points,
        center: state.center,
        zoom: state.zoom - 1,
      };
    case SET_CENTER:
      return {
        points: state.points,
        center: action.payload,
        zoom: 17,
      };
    default:
      return state;
  }
}
