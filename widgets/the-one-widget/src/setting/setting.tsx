/** @jsx jsx */
import {
  React,
  FormattedMessage,
  css,
  jsx,
  DataSourceManager,
} from "jimu-core";
import { BaseWidgetSetting, AllWidgetSettingProps } from "jimu-for-builder";
import {
  JimuMapViewSelector,
  SettingSection,
  SettingRow,
  JimuLayerViewSelector,
} from "jimu-ui/advanced/setting-components";
import { IMConfig } from "../config";
import defaultMessages from "./translations/default";
import { IMJimuLayerViewInfo } from "jimu-arcgis";

interface IState {}

export default class Setting extends BaseWidgetSetting<
  AllWidgetSettingProps<IMConfig>,
  IState
> {
  dsManager = DataSourceManager.getInstance();

  constructor(props) {
    super(props);

    this.state = {};
  }

  onAllowOverlapPropertyChange = (evt: React.FormEvent<HTMLInputElement>) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set("allowOverlap", evt.currentTarget.checked),
    });
  };

  onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds,
    });
  };

  onLayerSelected = (jimuLayerViewInfo: IMJimuLayerViewInfo) => {
    console.log("layer selected", jimuLayerViewInfo);
    const dataSourceId = jimuLayerViewInfo
      ? jimuLayerViewInfo.datasourceId
      : null;
    const dataSource: any = this.dsManager.getDataSource(dataSourceId);
    const layer = dataSource ? dataSource.layer : null;
    const layerId = layer ? layer.id : null;
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config
        .set("layerViewInfo", jimuLayerViewInfo)
        .set("layerId", layerId),
    });
  };

  onSnappingDistanceChanged = (event: number) => {
    this.setState({ snappingDistanceInput: event });
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set("snappingDistance", event),
    });
  };

  onMaxAreaChanged = (event: number) => {
    this.setState({ maxAreaInput: event });
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set("maxArea", event),
    });
  };

  render() {
    const style = css`
      .widget-setting-the-one-widget {
        .single-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
      }
    `;
    return (
      <div css={style}>
        <div className="widget-setting-the-one-widget">
          <SettingSection
            className="map-selector-section"
            title={this.props.intl.formatMessage({
              id: "mapWidgetLabel",
              defaultMessage: defaultMessages.selectMapWidget,
            })}
          >
            <SettingRow>
              <JimuMapViewSelector
                onSelect={this.onMapWidgetSelected}
                useMapWidgetIds={this.props.useMapWidgetIds}
              />
            </SettingRow>
          </SettingSection>

          <SettingSection
            className="map-selector-section"
            title={this.props.intl.formatMessage({
              id: "layerIdLabel",
              defaultMessage: defaultMessages.layerId,
            })}
          >
            <SettingRow>
              <div className="w-100">
                <JimuLayerViewSelector
                  useMapWidgetIds={this.props.useMapWidgetIds}
                  onSelect={this.onLayerSelected}
                  jimuLayerViewInfo={
                    this.props.config && this.props.config.layerViewInfo
                  }
                ></JimuLayerViewSelector>
              </div>
            </SettingRow>
          </SettingSection>
        </div>
      </div>
    );
  }
}
