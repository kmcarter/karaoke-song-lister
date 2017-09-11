import React from 'react';
import SearchForm from '../components/SearchForm';
import AlphabetList from '../components/common/AlphabetList';

const HomePage = () => {
  return (
    <div>
      <div className="jumbotron mt-3">
        <h1>LividLiquid Karaoke Song List</h1>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card mb-3">
            <div className="card-header">
              <h3>List by Artist</h3>
            </div>
            <div className="card-body">
              <AlphabetList artistOrTitle="artist" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
        <div className="card mb-3">
          <div className="card-header">
            <h3>List by Title</h3>
            </div>
            <div className="card-body">
              <AlphabetList artistOrTitle="title" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
        <div className="card mb-3">
          <div className="card-header">
            <h3>Search by Keyword</h3>
            </div>
            <div className="card-body">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
