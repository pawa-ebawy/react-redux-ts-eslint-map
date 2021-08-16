import React from 'react';
import OlMap from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import {
  Style,
  Circle as CircleStyle,
  Stroke,
  Fill,
} from 'ol/style';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import { Cluster, OSM, Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { connect } from 'react-redux';
import { IMap, IState } from '../interfaces';

class Map extends React.Component<IMap> {
  view: View;

  map: OlMap;

  constructor(props: any) {
    super(props);
    const view = new View({
      center: fromLonLat(props.center),
      zoom: props.zoom,
    });
    this.view = view;

    const map = new OlMap({
      target: '',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view,
    });
    this.map = map;
  }

  componentDidMount() {
    this.map.setTarget('map');
  }

  componentDidUpdate() {
    this.view.animate({
      center: fromLonLat(this.props.center),
    });

    this.view.animate({
      zoom: this.props.zoom,
    });

    const features = this.props.pointsObject.map((point: {
      lon: number;
      lat: number;
    }) => new Feature({
      geometry: new Point(fromLonLat([point.lon, point.lat])),
    }));

    const vectorSource = new VectorSource({
      features,
    });

    const clusterSource = new Cluster({
      distance: 40,
      minDistance: 40,
      source: vectorSource,
    });

    const vector = new VectorLayer({
      source: clusterSource,
      style: new Style({
        image: new CircleStyle({
          radius: 5,
          fill: new Fill({ color: '#1890ff' }),
          stroke: new Stroke({ color: '#fff', width: 1 }),
        }),
      }),
    });

    this.map.addLayer(vector);
  }

  render() {
    return (
      <div id="map" style={{ width: '100%', height: 'calc(70vh - 50px)' }} />
    );
  }
}

function mapStateToProps(state: IState) {
  return {
    pointsObject: state.points,
    center: state.center,
    zoom: state.zoom,
  };
}

export default connect(mapStateToProps)(Map);
