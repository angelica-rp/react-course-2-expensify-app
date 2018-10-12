import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/loginpage';

test('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLoginGoogle on button click', () => {
    let startLoginGoogle = jest.fn();
    let wrapper = shallow(<LoginPage startLoginGoogle={startLoginGoogle} />);
    wrapper.find('button').at(0).simulate('click');
    expect(startLoginGoogle).toHaveBeenCalled();
});