import PropTypes from "prop-types";
import React, { Component } from "react";
import { Base } from "@brandwatch/axiom-components";

export default class ColumnChartVisual extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base {...rest} className="ax-column-chart__visual">
        {children}
      </Base>
    );
  }
}
