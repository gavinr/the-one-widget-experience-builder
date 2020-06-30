import { ThemeVariables, css, SerializedStyles } from 'jimu-core';

export function getStyle(theme: ThemeVariables): SerializedStyles {
  return css`
    overflow: auto;
    .widget-legend {
      width: 100%;
      height: 100%;

      .esri-legend {
        background-color: ${theme.colors.palette.light[100]};
        color: ${theme.colors.black}
      }

      .esri-widget__heading {
        color: ${theme.colors.black};
      }

      .esri-legend--card.esri-widget{
        background-color: ${theme.colors.palette.light[300]};
        color: ${theme.colors.black}
      }

      .esri-legend--card__section {
        width: 100%;
        background-color: ${theme.colors.palette.light[100]};
        color: ${theme.colors.black}
      }

      .esri-legend--card__carousel-indicator-container {
        background-color: ${theme.colors.palette.light[300]};
      }

      .esri-legend--card__service {
        width: 100%;
      }

      .esri-legend--card__service-caption-container {
        background-color: ${theme.colors.palette.light[300]};
        color: ${theme.colors.black};
      }

      /*
      .esri-legend--card__carousel-indicator {
        background-color: ${theme.colors.palette.dark[900]};
      }
      */
    }
  `;
}
