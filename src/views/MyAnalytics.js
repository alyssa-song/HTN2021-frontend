import React from 'react';
import FeaturesTabs from '../components/sections/FeaturesTabs';
import FeaturesSplit from '../components/sections/FeaturesSplit';

class MyAnalytics extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FeaturesTabs topDivider bottomOuterDivider />
        <FeaturesSplit invertMobile imageFill topDivider />
      </React.Fragment >
    );
  }
}

export default MyAnalytics;