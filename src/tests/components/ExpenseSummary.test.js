import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should correctly render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary totalCount={1} totalAmount={2355}/>);
    expect(wrapper).toMatchSnapshot();
});


test('should correctly render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary totalCount={10} totalAmount={452045}/>);
    expect(wrapper).toMatchSnapshot();
});