import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import Icon from '../components/common/Icon';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/searchActions';
import SearchResults from '../components/SearchResults';

export const LookupPage = (props) => {
  return (
    <div>
      <Link to="/">
        <Icon className="fa-long-arrow-left" />
        {" Back"}
      </Link>
      <h1 className="alt-header"><strong>{props.match.params.letter}</strong> {props.match.params.artistOrTitle}s</h1>
      <SearchResults searchTerm={props.match.params.letter} />
    </div>
  );
};

LookupPage.propTypes = {
  match: PropTypes.object
};

function mapStateToProps(state) {
  return {
    songs: state.songs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LookupPage));
