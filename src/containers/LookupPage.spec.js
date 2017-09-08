import React from 'react';
import {shallow} from 'enzyme';
import {LookupPage} from './LookupPage';
import FuelSavingsForm from '../components/FuelSavingsForm';

describe('<LookupPage />', () => {
  it('should contain <FuelSavingsForm />', () => {
    const actions = {
      saveFuelSavings: () => { },
      calculateFuelSavings: () => { }
    };
    const fuelSavings = {};
    const wrapper = shallow(<LookupPage actions={actions} fuelSavings={fuelSavings}/>);

    expect(wrapper.find(FuelSavingsForm).length).toEqual(1);
  });
});
