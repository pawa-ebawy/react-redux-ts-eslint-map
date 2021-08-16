export interface IPoint {
  readonly id: number | string;
  name?: string;
  lat: number;
  lon: number;
}

export interface IState {
  points?: IPoint[];
  center: number[];
  zoom: number;
}

export interface IAction {
  type: string;
  payload: number;
}

export interface ISidebar {
  zoom: number;
}

export interface IMap {
  pointsObject: IPoint[];
  center: number[];
  zoom: number;
}