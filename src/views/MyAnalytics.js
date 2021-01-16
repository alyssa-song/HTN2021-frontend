import React from 'react';
// import section header
// import sections
import FeaturesSplit from '../components/sections/FeaturesSplit';
// import some required elements

class Secondary extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FeaturesSplit invertMobile imageFill topDivider />
      </React.Fragment >
    );
  }
}

export default Secondary;