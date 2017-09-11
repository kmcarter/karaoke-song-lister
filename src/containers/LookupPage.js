import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import BackButton from '../components/common/BackButton';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/searchActions';
import LookupResults from '../components/LookupResults';

export const LookupPage = (props) => {
  return (
    <div>
      <BackButton />
      <h1 className="text-capitalize"><strong>{props.match.params.letter}</strong> {props.match.params.artistOrTitle}s</h1>
      <LookupResults artistOrTitle={props.match.params.artistOrTitle} searchTerm={props.match.params.letter} />
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
