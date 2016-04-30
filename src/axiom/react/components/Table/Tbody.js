import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class Tbody extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children } = this.props;

    return (
      <tbody {...this.props}>
        {children}
      </tbody>
    );
  }
}

export default enhance(Tbody)(
  addDisplayName('Tbody'),
  addPropTypes('global'),
  addClassName('global'),
);