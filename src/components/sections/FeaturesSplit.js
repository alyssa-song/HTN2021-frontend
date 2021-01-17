import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import {Bar} from 'react-chartjs-2'
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  constructor(props) {
    super(props);
    this.state = { pos:[], neg:[]};
  }

  componentDidMount() {
    // make requests and store
    axios.get('http://127.0.0.1:8000/api/positive/boon')
      .then(res => {
        this.setState({ pos: JSON.stringify(res.data) });
        console.log(this.state.pos);
      }).catch(function (error) {
          console.log(error);
      })

      axios.get('http://127.0.0.1:8000/api/negative/boon')
      .then(res => {
        this.setState({ neg: JSON.stringify(res.data) });
        console.log(this.state.neg);
      }).catch(function (error) {
          console.log(error);
      })
  }

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Your Most Used Words'
    };

    const topPositive = canvas => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 100, 0);
      const str = this.state.pos;
      const posWords = str.toString().substring(1, str.length - 2).split(',');
      return {
        backgroundColor: gradient,
        labels: posWords,
        datasets: [{
          label: 'positive words',
          data: [12, 10, 8, 6, 4],
          borderWidth: 1,
          backgroundColor: ['#2174ea', '#2174ea', '#2174ea', '#2174ea', '#2174ea']
        }]
      };
    };

    const topNegative = canvas => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 100, 0);
      const str = this.state.neg;
      const negWords = str.toString().substring(1, str.length - 2).split(',');
      return {
        backgroundColor: gradient,
        labels: negWords,
        datasets: [{
          label: 'negative words',
          data: [12, 10, 8, 6, 4],
          borderWidth: 1,
          backgroundColor: ['#041f3d', '#041f3d', '#041f3d', '#041f3d', '#041f3d']
        }]
      };
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>
              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <Bar data={topPositive} />
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-scale-up',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Bar data={topNegative} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;