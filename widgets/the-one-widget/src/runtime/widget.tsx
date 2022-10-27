/** @jsx jsx */
import { AllWidgetProps, BaseWidget, jsx } from "jimu-core";
import { IMConfig } from "../config";
import MyWidget from "the-one-widget";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";

import Sketch from "esri/widgets/Sketch";

export default class Widget extends BaseWidget<AllWidgetProps<IMConfig>, any> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="the-one-widget jimu-widget m-2">
        {this.props.hasOwnProperty("useMapWidgetIds") &&
          this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds.length === 1 && (
            <JimuMapViewComponent
              useMapWidgetId={this.props.useMapWidgetIds[0]}
              onActiveViewChange={(jmv: JimuMapView) => {
                if (jmv && jmv.view) {
                  this.setState({
                    jimuMapView: jmv,
                  });
                }
              }}
            />
          )}
        <MyWidget
          mapView={this.state.jimuMapView ? this.state.jimuMapView.view : false}
          featureLayerId={this.props.config.layerId}
          modules={[Sketch]}
        ></MyWidget>
      </div>
    );
  }
}
