import {ImmutableObject} from 'jimu-core';

export interface Config{
  showBaseMap?: boolean;
  cardStyle?: boolean;
  cardLayout?: string;
}

export type IMConfig = ImmutableObject<Config>;
