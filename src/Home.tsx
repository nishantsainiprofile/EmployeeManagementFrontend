import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="text-center">
        <h1 className="mb-4">Welcome to the Home Page</h1>
        <p className="lead">
          You have successfully logged in. This is your homepage.
        </p>
        <button className="btn btn-primary mt-3">Explore More</button>
      </div>
    </div>
  );
};

export default Home;
