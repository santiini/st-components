import React from 'react';
import { Select } from 'antd';
import { SelectProps } from 'antd/lib/select';
import { SelectValue } from 'antd/lib/tree-select';

class ExtendSelect extends React.Component<SelectProps<SelectValue>> {
  static Option = Select.Option;

  /* 过滤 select */
  onFilterChildren: SelectProps<SelectValue>['filterOption'] = (inputValue, option) => {
    const inputUpper = inputValue.toUpperCase();
    if (!option?.children) return false;
    return (
      option.children
        .toString()
        .toUpperCase()
        .indexOf(inputUpper) > -1
    );
  };

  render() {
    const { children, ...restProps } = this.props;
    return (
      <Select showSearch filterOption={this.onFilterChildren} {...restProps}>
        {children}
      </Select>
    );
  }
}

export default ExtendSelect;
