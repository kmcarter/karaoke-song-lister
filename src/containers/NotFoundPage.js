import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="row">
      <div className="col-12">
        <h1>404 Page Not Found</h1>
        <Link to="/"> Go back to homepage </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
