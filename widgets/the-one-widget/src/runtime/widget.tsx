/** @jsx jsx */
import { AllWidgetProps, BaseWidget, jsx } from "jimu-core";
import { IMConfig } from "../config";
import MyWidget from "the-one-widget";

export default class Widget extends BaseWidget<AllWidgetProps<IMConfig>, any> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="widget-demo jimu-widget m-2">
        <MyWidget></MyWidget>
      </div>
    );
  }
}
