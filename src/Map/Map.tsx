import React from 'react';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { fromLonLat } from 'ol/proj';
import {
  Style,
  Circle as CircleStyle,
  Stroke,
  Fill,
} from 'ol/style';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import { OSM, Vector as VectorSource } from 'ol/source';
import { connect } from 'react-redux';

type MapProps = {
  pointsObject: any;
  center: Array<number>;
  zoom: number;
}

class Map extends React.Component<MapProps, any> {
  view: OlView;

  map: OlMap;

  constructor(props: any) {
    super(props);
    const view = new OlView({
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

    const vector = new VectorLayer({
      source: vectorSource,
      style: new Style({
        image: new CircleStyle({
          radius: 10,
          fill: new Fill({ color: 'blue' }),
          stroke: new Stroke({ color: '#000', width: 1 }),
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

function mapStateToProps(state: any) {
  return {
    pointsObject: state.points,
    center: state.center,
    zoom: state.zoom,
  };
}

export default connect(mapStateToProps)(Map);
