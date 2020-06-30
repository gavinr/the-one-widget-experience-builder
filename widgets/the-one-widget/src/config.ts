import { ImmutableObject } from "seamless-immutable";
import { IMJimuLayerViewInfo } from "jimu-arcgis";

export interface Config {
  layerId: string;
  layerViewInfo?: IMJimuLayerViewInfo;
}

export type IMConfig = ImmutableObject<Config>;
