import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('h1').lenght).tobe('Expensify');
    // const renderer = new ReactShallowRendered();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});


