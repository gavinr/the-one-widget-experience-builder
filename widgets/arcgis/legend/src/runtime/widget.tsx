/** @jsx jsx */
import { BaseWidget, jsx, AllWidgetProps, DataSourceComponent } from 'jimu-core';
import { MapDataSource, DataSourceTypes, loadArcGISJSAPIModules, JimuMapViewComponent, JimuMapView} from 'jimu-arcgis';
import { WidgetPlaceholder } from 'jimu-ui';
//import { IMDataSourceJson, IMUseDataSource } from './types/app-config';
import { IMConfig } from '../config';
import {getStyle} from './lib/style';
import defaultMessages from './translations/default';
const legendIcon = require('./assets/icon.svg');

export enum LoadStatus {
  Pending = 'Pending',
  Fulfilled = 'Fulfilled',
  Rejected = 'Rejected'
}

export interface WidgetProps extends AllWidgetProps<IMConfig> {
}

export interface WidgetState{
  loadStatus: LoadStatus;
}

export default class Widget extends BaseWidget<WidgetProps, WidgetState>{

  private dataSource: MapDataSource;
  private mapView: __esri.MapView;
  private sceneView: __esri.SceneView;
  private MapView: typeof __esri.MapView;
  private SceneView: typeof __esri.SceneView;
  private legend: __esri.Legend;
  private Legend: typeof __esri.Legend;

  public refs: {
    mapContainer: HTMLInputElement;
    legendContainer: HTMLInputElement;
  }

  constructor(props) {
    super(props);
    this.state = {
      loadStatus: LoadStatus.Pending
    };
  }

  componentDidMount = () => {
  }

  createViewByDataSource(dataSource) {
    return this.loadViewModules(dataSource).then(() => {
      if (dataSource.type === DataSourceTypes.WebMap) {
        return new Promise( (resolve, reject) => this.createWebMapView(this.MapView, resolve, reject)) 
      } else if(dataSource.type === DataSourceTypes.WebScene) {
        return new Promise( (resolve, reject) => this.createSceneView(this.SceneView, resolve, reject)) 
      } else {
        return Promise.reject();
      }
    });
  }

  createWebMapView = (MapView, resolve, reject) => {
    this.destoryView();
    const mapViewOption: __esri.MapViewProperties = {
      map: this.dataSource.map,
      container: this.refs.mapContainer
    };
    this.mapView = new MapView(mapViewOption);
    this.mapView.when(() => {
      resolve(this.mapView)
    }, (error) => reject(error));
  }

  createSceneView = (SceneView, resolve, reject) => {
    this.destoryView();
    const mapViewOption: __esri.MapViewProperties = {
      map: this.dataSource.map,
      container: this.refs.mapContainer
    };
    this.sceneView = new this.SceneView(mapViewOption);
    this.sceneView.when(() => {
      resolve(this.sceneView)
    }, (error) => reject(error));
  }
  
  destoryView() {
    this.mapView && !this.mapView.destroyed && this.mapView.destroy();
    this.sceneView && !this.sceneView.destroyed && this.sceneView.destroy();
  }

  loadViewModules = (dataSource: MapDataSource): Promise <typeof __esri.MapView | typeof __esri.SceneView> => {
    if (dataSource.type === DataSourceTypes.WebMap) {
      if(this.MapView) { return Promise.resolve(this.MapView); }
      return loadArcGISJSAPIModules([
        'esri/views/MapView'
      ]).then(modules => {
        [
          this.MapView
        ] = modules;
        return this.MapView;
      })
    } else if(dataSource.type === DataSourceTypes.WebScene) {
      if(this.SceneView) { return Promise.resolve(this.SceneView); }
      return loadArcGISJSAPIModules([
        'esri/views/SceneView'
      ]).then(modules => {
        [
          this.SceneView
        ] = modules;
        return this.SceneView;
      });
    } else {
      return Promise.reject();
    }
  }


  destoryLegend = () => {
    this.legend && !this.legend.destroyed && this.legend.destroy();
  }

  createLegend = (view) => {
    let legendModulePromise;
    if(this.Legend) {
      legendModulePromise = Promise.resolve();
    } else {
      legendModulePromise = loadArcGISJSAPIModules([
        'esri/widgets/Legend'
      ]).then(modules => {
        [
          this.Legend
        ] = modules;
      });
    }
    return legendModulePromise.then( () => {
      const container = document && document.createElement('div');
      container.className = 'jimu-widget';
      this.refs.legendContainer.appendChild(container);

      this.destoryLegend();
      this.legend = new this.Legend({
        view: view,
        container: container
      });

      this.configLegend();
    });
  }

  configLegend = () => {
    if(this.legend) {
      const style = this.props.config.cardStyle ? {type: 'card', layout: this.props.config.cardLayout || 'auto'} : 'classic';
      const basemapLegendVisible = this.props.config.showBaseMap;
      this.legend.style = style;
      this.legend.basemapLegendVisible = basemapLegendVisible;
    }
  }

  onActiveViewChange = (jimuMapView: JimuMapView) => {
    if(jimuMapView && jimuMapView.view) {
      //this.setState({ loadStatus: LoadStatus.Pending})
      this.createLegend(jimuMapView.view).then(() => {
        this.setState({
          loadStatus: LoadStatus.Fulfilled
        })
      }).catch( (error) => console.error(error));
    } else {
      this.destoryLegend();
      //this.setState({ loadStatus: LoadStatus.Rejected })
    }
  }

  onDataSourceCreated = (dataSource: MapDataSource): void => {
    this.dataSource = dataSource;

    this.createViewByDataSource(dataSource).then((view) => {
      return this.createLegend(view);
    }).then(() => {
      this.setState({
        loadStatus: LoadStatus.Fulfilled
      })
    }).catch( (error) => console.error(error));
  }

  onCreateDataSourceFailed = (error): void => {
  }


  render() {
    const useMapWidget = this.props.useMapWidgetIds &&
                        this.props.useMapWidgetIds[0];
    const useDataSource = this.props.useDataSources &&
                        this.props.useDataSources[0];

    let content = null;
    let dataSourceContent = null;

    if(useMapWidget) {
      dataSourceContent = (
        <JimuMapViewComponent useMapWidgetIds={this.props.useMapWidgetIds} onActiveViewChange={this.onActiveViewChange} />
      );
    } else if (useDataSource) {
      dataSourceContent = (
        <DataSourceComponent useDataSource={useDataSource}
          onDataSourceCreated={this.onDataSourceCreated}
          onCreateDataSourceFailed={this.onCreateDataSourceFailed}/>
      );
    }

    if(!useMapWidget && !useDataSource) {
      this.destoryLegend();
      content = (
        <div className="widget-legend">
          <WidgetPlaceholder icon={legendIcon} autoFlip={true} message={this.props.intl.formatMessage({id: '_widgetLabel', defaultMessage: defaultMessages._widgetLabel})} widgetId={this.props.id}/>
        </div>
      );
    } else {
      let loadingContent = null;
      if(this.state.loadStatus === LoadStatus.Pending) {
        loadingContent = (
          <div style={{ position: 'absolute', left: '50%', top: '50%'}} className="jimu-secondary-loading"/>
        );
      }
      //else if(this.state.loadStatus === LoadStatus.Rejected){
      //  loadingContent = (
      //    <div style={{padding: '5px 10px'}}> Invalid map widget! </div>
      //  );
      //}

      if(window.jimuConfig.isInBuilder) {
        this.configLegend();
      }
      content = (
        <div className="widget-legend">
          {loadingContent}
          <div ref="legendContainer"></div>
          <div style={{position: 'absolute', opacity: 0}} ref="mapContainer">mapContainer</div>
          <div style={{position: 'absolute', display: 'none'}}>
            {dataSourceContent}
          </div>
        </div>
      );
    }
    return (
      <div css={getStyle(this.props.theme)} className="jimu-widget">
        {content}
      </div>
    );
  }
}
