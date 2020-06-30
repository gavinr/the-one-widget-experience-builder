import { ThemeVariables, css, SerializedStyles } from 'jimu-core';
import { IMConfig } from '../../config';

export function getStyle(theme: ThemeVariables, widgetConfig: IMConfig): SerializedStyles {
  let displayItemIcon;
  let itemLableOutLine; 
  if(widgetConfig.setVisibility && widgetConfig.useMapWidget) {
    displayItemIcon = 'block';
    itemLableOutLine = ''; 
  } else {
    displayItemIcon = 'none';
    itemLableOutLine = 'unset'; 
  }
  return css`
    overflow: auto;
    .widget-layerlist {
      width: 100%;
      height: 100%;

      .esri-layer-list {
        background-color: ${theme.colors.palette.light[100]};
        color: ${theme.colors.black}
      }

      .esri-layer-list__item {
        background-color: ${theme.colors.palette.light[100]};
      }
      .esri-layer-list__item-label:focus {
        outline: ${itemLableOutLine};
      }

      .esri-layer-list__item--invisible-at-scale .esri-layer-list__item-title {
        color: ${theme.colors.palette.light[800]}
      }

      .esri-layer-list__child-toggle{
        color: ${theme.colors.black}
      }

      .esri-layer-list__item-toggle-icon {
        display: ${displayItemIcon};
      }

      .esri-layer-list__item-actions-menu-item:hover {
        background-color: ${theme.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions-menu-item--active, .esri-layer-list__item-actions-menu-item--active:hover {
        background-color: ${theme.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions {
        background-color: ${theme.colors.palette.light[200]};
        color: ${theme.colors.black}
      }
      
      .esri-layer-list__item-action:hover {
        background-color: ${theme.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions-list {
        border-color: ${theme.colors.palette.light[500]};
      }
    }
  `;
}
