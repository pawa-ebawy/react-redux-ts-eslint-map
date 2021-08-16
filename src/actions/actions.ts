import {
  ADD_ZOOM,
  SET_CENTER,
  SET_POINTS,
  SUB_ZOOM,
} from './actionTypes';

export function setPoints() {
  return {
    type: SET_POINTS,
  };
}

export function setCenter(number: number) {
  return {
    type: SET_CENTER,
    payload: number,
  };
}

export function addZoom() {
  return {
    type: ADD_ZOOM,
  };
}

export function subZoom() {
  return {
    type: SUB_ZOOM,
  };
}
