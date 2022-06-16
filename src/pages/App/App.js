import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from 'src/pages/LandingPage/LandingPage';

const App = (props) => {
  return (
    <Router>
      <Fragment>
        <LandingPage />
        <Routes>
          <Route exact path='/' component={LandingPage} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
