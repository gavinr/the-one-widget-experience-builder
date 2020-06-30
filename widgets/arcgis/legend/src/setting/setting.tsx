/** @jsx jsx */
import {Immutable, ImmutableObject, DataSourceJson, IMState, FormattedMessage, jsx, getAppStore, UseDataSource} from 'jimu-core';
import {Switch, Radio, Label} from 'jimu-ui';
import {JimuMapViewSelector, SettingSection, SettingRow} from 'jimu-ui/setting-components';
import {DataSourceTypes} from 'jimu-arcgis';
import {BaseWidgetSetting, AllWidgetSettingProps} from 'jimu-for-builder';
import {SelectedDataSourceJson/*, DataSourceSelector*/} from 'jimu-ui/data-source-selector';
import {IMConfig} from '../config';
import defaultMessages from './translations/default';
//import MapThumb from './components/map-thumb';
import {getStyle} from './lib/style';


export enum CardLayout {
  Auto = 'auto',
  SideBySide = 'side-by-side',
  Stack = 'stack'
}

interface ExtraProps{
  dsJsons: ImmutableObject<{ [dsId: string]: DataSourceJson}>;
}

export interface WidgetSettingState{
  cardStyle: boolean;
  cardLayoutValue: string;
}

export default class Setting extends BaseWidgetSetting<AllWidgetSettingProps<IMConfig> & ExtraProps, WidgetSettingState>{

  supportedDsTypes = Immutable([DataSourceTypes.WebMap, DataSourceTypes.WebScene]);

  static mapExtraStateProps = (state: IMState): ExtraProps => {
    return {
      dsJsons: state.appStateInBuilder.appConfig.dataSources
    }
  }

  constructor(props){
    super(props);
    this.state = {
      cardStyle: this.props.config.cardStyle || false,
      cardLayoutValue: this.props.config.cardLayout || CardLayout.Auto
    };
  }

  getPortUrl = (): string => {
    const portUrl = getAppStore().getState().portalUrl;
    return portUrl;
  }

  onOptionsChanged = (checked, name): void => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(name, checked),
    });
    if(name === 'cardStyle') {
      this.setState({
        cardStyle: checked
      });
    }
  };

  onRadioChange = (cardLayout: CardLayout) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('cardLayout', cardLayout),
    });

    this.setState({
      cardLayoutValue: cardLayout 
    });
  }

  onToggleUseDataEnabled = (useDataSourcesEnabled: boolean) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSourcesEnabled
    });
  }

  onDataSourceSelected = (allSelectedDss: SelectedDataSourceJson[], currentSelectedDs?: SelectedDataSourceJson) => {
    if(!allSelectedDss){
      return;
    }
    const useDataSources: UseDataSource[] = allSelectedDss.map(ds => ({
      dataSourceId: ds.dataSourceJson && ds.dataSourceJson.id,
      rootDataSourceId: ds.rootDataSourceId
    }));

    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: useDataSources
    });
  }

  onDataSourceRemoved = () => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: []
    });
  }

  onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds
    });
  }

  render(){
    //const portalUrl = this.getPortUrl();
    const mapDsIds = [];
    if (this.props.useDataSources) {
      for (let i = 0; i < this.props.useDataSources.length; i++) {
        mapDsIds.push(this.props.useDataSources[i].dataSourceId);
      }
    }

    let cardLayoutContent = null;
    if(this.state.cardStyle) {
      cardLayoutContent = (
        <div className="card-layout-content pl-2">
          <div className="w-100 legend-tools">
            <div className="legend-tools-item card-style-radio">
              <Radio id="auto" style={{ cursor: 'pointer' }}
                name="auto" onChange={e => this.onRadioChange(CardLayout.Auto)} checked={this.state.cardLayoutValue === CardLayout.Auto} />
              <Label style={{ cursor: 'pointer' }} for="auto" className="ml-1">{this.props.intl.formatMessage({id: 'auto', defaultMessage: 'Auto'})}</Label>
            </div>
          </div>
          <div className="w-100 legend-tools">
            <div className="legend-tools-item card-style-radio">
              <Radio id="side-by-side" style={{ cursor: 'pointer' }}
                name="side-by-side" onChange={e => this.onRadioChange(CardLayout.SideBySide)} checked={this.state.cardLayoutValue === CardLayout.SideBySide} />
              <Label style={{ cursor: 'pointer' }} for="side-by-side" className="ml-1">{this.props.intl.formatMessage({id: 'sideBySide', defaultMessage: defaultMessages.sideBySide})}</Label>
            </div>
          </div>
          <div className="w-100 legend-tools">
            <div className="legend-tools-item card-style-radio">
              <Radio id="stack" style={{ cursor: 'pointer' }}
                name="stack" onChange={e => this.onRadioChange(CardLayout.Stack)} checked={this.state.cardLayoutValue === CardLayout.Stack} />
              <Label style={{ cursor: 'pointer' }} for="stack" className="ml-1">{this.props.intl.formatMessage({id: 'stack', defaultMessage: defaultMessages.stack})}</Label>
            </div>
          </div>
        </div>
      )
    }

    return ( 
      <div css={getStyle(this.props.theme)}>
        <div className="widget-setting-legend">

          {/*
          <SettingSection title={this.props.intl.formatMessage({id: 'sourceLabel', defaultMessage: defaultMessages.sourceLabel})}>
            <SettingRow>
              <div className="source-descript">{this.props.intl.formatMessage({id: 'sourceDescript', defaultMessage: defaultMessages.sourceDescript})}</div>
            </SettingRow>
            <SettingRow>
              <DataSourceSelector isMultiple={false} types={this.supportedDsTypes} selectedDataSourceIds={Immutable(mapDsIds)}
                useDataSourcesEnabled={true} /onToggleUseDataEnabled={this.onToggleUseDataEnabled}/ mustUseDataSource={true}
                onSelect={this.onDataSourceSelected} onRemove={this.onDataSourceRemoved}
              />
            </SettingRow>
            {portalUrl && this.props.dsJsons && this.props.useDataSources && this.props.useDataSources.length === 1 && <SettingRow>
                <div className="w-100">
                  <div className="webmap-thumbnail" title={this.props.dsJsons[this.props.useDataSources[0].dataSourceId].label}>
                    <MapThumb mapItemId={this.props.dsJsons[this.props.useDataSources[0].dataSourceId] ? 
                      this.props.dsJsons[this.props.useDataSources[0].dataSourceId].itemId : null} 
                      portUrl={this.props.dsJsons[this.props.useDataSources[0].dataSourceId] ? 
                        this.props.dsJsons[this.props.useDataSources[0].dataSourceId].portalUrl : null} ></MapThumb>
                  </div>
                </div>
            </SettingRow>}
          </SettingSection>
        */}

          <SettingSection className="map-selector-section" title={this.props.intl.formatMessage({id: 'sourceLabel', defaultMessage: defaultMessages.sourceLabel})}>
            {/*
            <SettingRow>
              <div className="map-selector-descript">{this.props.intl.formatMessage({id: 'sourceDescript', defaultMessage: 'set an interactive map **'})}</div>
            </SettingRow>
            */}
            <SettingRow label={<FormattedMessage id="selectMapWidget" defaultMessage={defaultMessages.selectMapWidget}/>}>
            </SettingRow>
            <SettingRow>
              <JimuMapViewSelector onSelect={this.onMapWidgetSelected} useMapWidgetIds={this.props.useMapWidgetIds} />
            </SettingRow>
          </SettingSection>

          <SettingSection title={this.props.intl.formatMessage({id: 'options', defaultMessage: defaultMessages.options})}>
            <SettingRow label={<FormattedMessage id="showBaseMap" defaultMessage={defaultMessages.showBaseMap}/>}>
              <Switch className="can-x-switch" checked={(this.props.config && this.props.config.showBaseMap) || false}
                data-key="showBaseMap" onChange={evt => {this.onOptionsChanged(evt.target.checked, 'showBaseMap')}} />
            </SettingRow>
            <SettingRow label={<FormattedMessage id="cardStyle" defaultMessage={defaultMessages.cardStyle}/>}>
              <Switch className="can-x-switch" checked={(this.props.config && this.props.config.cardStyle) || false}
                data-key="cardStyle" onChange={evt => {this.onOptionsChanged(evt.target.checked, 'cardStyle')}} />
            </SettingRow>
            <SettingRow flow="wrap">
              {cardLayoutContent}
            </SettingRow>
          </SettingSection>
        </div>
      </div>
    );
  }
}
