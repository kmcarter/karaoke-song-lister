import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

describe('<TextInput />', () => {
  it('should be an input element', () => {
    const props = {
      name: "search",
      onChange: jest.fn(),
      value: "ab"
    };

    const wrapper = shallow(<TextInput {...props} />);

    expect(wrapper.type()).toEqual('input');
  });

  it('should handle change', () => {
    const props = {
      name: "search",
      onChange: jest.fn(),
      value: "ab"
    };

    const wrapper = shallow(<TextInput {...props} />);

    expect(wrapper.type()).toEqual('input');
    expect(props.onChange).not.toBeCalled();
    wrapper.simulate('change', {target: {value: "abc"}});
    expect(props.onChange).toBeCalledWith('search', "abc");
  });
});
