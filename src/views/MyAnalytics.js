import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import FeaturesSplit from '../components/sections/FeaturesSplit';
// import some required elements
import Image from '../components/elements/Image';
import Input from '../components/elements/Input';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Modal from '../components/elements/Modal';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';
import Tabs, { TabList, Tab, TabPanel } from '../components/elements/Tabs';
import { Link } from 'react-router-dom';
import Checkbox from '../components/elements/Checkbox';

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