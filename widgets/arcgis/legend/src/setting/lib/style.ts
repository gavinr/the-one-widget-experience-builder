import { ThemeVariables, css, SerializedStyles, polished } from 'jimu-core';

export function getStyle(theme: ThemeVariables): SerializedStyles {
  return css`
    .widget-setting-legend{
      font-weight: lighter;
      font-size: 13px;

      .source-descript {
        color: ${theme.colors.palette.dark[600]};	
      }

      .webmap-thumbnail{
        cursor: auto;
        width: 100%;
        height: 120px;
        overflow: hidden;
        padding: 1px;
        border: ${polished.rem(2)} solid initial;
        img, div{
          width: 100%;
          height: 100%;
        }
      }

      .card-layout-content{
        width: 100%;
      }

      .legend-tools{
        .legend-tools-item{
          display: flex;
          margin-bottom: 8px;
        }
      }

      .map-selector-section .component-map-selector .form-control{
        width: 100%;
      }
    }
  `;
}
