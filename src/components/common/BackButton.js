import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const BackButton = () => {
  return (
    <header className="header mt-3 mb-3">
      <Link to="/" className="btn btn-primary btn-lg">
        <Icon className="fa-long-arrow-left" />
        {" Back"}
      </Link>
    </header>
  );
};

export default BackButton;