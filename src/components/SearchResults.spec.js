import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults';
import SongTitleList from './common/SongTitleList';

describe('<SearchResults />', () => {
  it('should display <SongTitleList />', () => {
    const props = {
      searchTerm: "abc"
    };

    const wrapper = shallow(<SearchResults {...props} />);
    // console.log(wrapper.debug()); // View shallowly rendered component
    const actual = wrapper.find(SongTitleList).first().text();
    const expected = '<SongTitleList />';

    expect(actual).toEqual(expected);
  });
});
