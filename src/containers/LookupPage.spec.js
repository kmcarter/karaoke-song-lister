import React from 'react';
import {shallow} from 'enzyme';
import {LookupPage} from './LookupPage';
import SearchResults from '../components/SearchResults';

describe('<LookupPage />', () => {
  it('should contain <SearchResults />', () => {
    const match = {
      params: {
        letter: "b",
        artistOrTitle: "artist"
      }
    };
    const wrapper = shallow(<LookupPage match={match} />);

    expect(wrapper.find(SearchResults).length).toEqual(1);
  });
});
