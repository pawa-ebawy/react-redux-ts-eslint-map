import * as importAll from '../Interface/IPoint';

const pointsData = [
  {
    id: 1,
    name: 'Point 1 (Кронштадт)',
    lat: 59.991788,
    lon: 29.775849,
  },
  {
    id: 2,
    name: 'Point 2 (Колпино)',
    lat: 59.748563,
    lon: 30.595637,
  },
  {
    id: 3,
    name: 'Point 3 (Выборг)',
    lat: 60.710524,
    lon: 28.749652,
  },
];

interface IAction {
  type: string;
  payload: number;
}

interface IState {
  points?: importAll.IPoint | [];
  center: Array<number>;
  zoom: number;
}

const initialState: IState = {
  points: [],
  center: [30.342656, 59.926291],
  zoom: 10,
};

export default function appReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case 'SET_POINTS':
      return {
        points: pointsData,
        center: state.center,
        zoom: state.zoom,
      };
    case 'ADD_ZOOM':
      return {
        points: state.points,
        center: state.center,
        zoom: state.zoom + 1,
      };
    case 'SUB_ZOOM':
      return {
        points: state.points,
        center: state.center,
        zoom: state.zoom - 1,
      };
    case 'SET_CENTER':
      return {
        points: state.points,
        center: action.payload,
        zoom: state.zoom,
      };
    default:
      return state;
  }
}
