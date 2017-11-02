import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { MaskProps } from './PropsType';

export { MaskProps };

export default class Mask extends PureComponent<MaskProps, {}> {

  static defaultProps = {
    prefixCls: 'za-mask',
    visible: false,
    type: 'normal',
  };

  render() {
    const { prefixCls, className, visible, type, onClose, ...others } = this.props;
    const markCls = classnames(`${prefixCls}`, className, type);

    return visible
      ? <div className={markCls} onClick={onClose} {...others} />
      : null;
  }
}
