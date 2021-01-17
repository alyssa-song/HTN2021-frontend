import React from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2'
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Tabs, { TabList, Tab, TabPanel } from './../elements/Tabs';
import Image from '../elements/Image';
import moment from "moment";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class FeaturesTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = { chartData:{}};
    // day: [], week: [], month: [], year: []
  }

  componentDidMount() {
    // make requests and store
    axios.get('http://127.0.0.1:8000/api/messages/420')
      .then(res => {
        this.setState({ chartData: res.data });
        console.log(JSON.stringify(res));
      }).catch(function (error) {
          console.log(error);
      })
    /*
      axios.get('http://127.0.0.1:8000/api/messages/420/day')
      .then(res => {
        this.setState({ day: res.data });
      }).catch(function (error) {
          console.log(error);
      })
      axios.get('http://127.0.0.1:8000/api/messages/420/week')
      .then(res => {
        this.setState({ week: res.data });
      }).catch(function (error) {
          console.log(error);
      })
      axios.get('http://127.0.0.1:8000/api/messages/420/month')
      .then(res => {
        this.setState({ month: res.data });
      }).catch(function (error) {
          console.log(error);
      })
      axios.get('http://127.0.0.1:8000/api/messages/420/year')
      .then(res => {
        this.setState({ year: res.data });
      }).catch(function (error) {
          console.log(error);
      })
    */
  }

  render() {

    const {
      className, bottomOuterDivider, bottomDivider, hasBgColor, invertColor, pushLeft, ...props
    } = this.props;

    const outerClasses = classNames(
      'features-tabs section center-content',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-tabs-inner section-inner',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Sentiments',
      paragraph: JSON.stringify(this.state.chartData)
    };

    const startDate = new Date();

    // query date with startDate, go through all existing hours ()
    const day = canvas => {
      const labels = ["12:00AM", "1:00AM", "2:00AM", "3:00AM", "4:00AM", "5:00AM", "6:00AM", "8:00AM", "9:00AM", "10:00AM", "11:00AM",
        "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM", "6:00PM", "8:00PM", "9:00PM", "10:00PM", "11:00PM"];
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 100, 0);
      return {
        backgroundColor: gradient,
        labels,
        datasets: [
          {
            label: "Sentiment over time",
            data: [1, 0.4, 0.3, -0.5, 0.2, -0.3], //this.state.day,
            borderWidth: 3,
            fill: false,
            borderColor: "#2174ea"
          }
        ]
      };
    };

    const week = canvas => {
      const labels = []
      for (let i = 1; i <= 7; i++) {
        labels.push(moment(startDate).add(i, "days").toString().substr(0, 3));
      }
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 100, 0);
      return {
        backgroundColor: gradient,
        labels,
        datasets: [
          {
            label: "Sentiment over time",
            data: [12, 19, 3, 5, 2, 3], //this.state.week,
            borderWidth: 3,
            fill: false,
            borderColor: "#2174ea"
          }
        ]
      };
    };

    const month = canvas => {
      const labels = []
      const firstDay = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
      const daysInMonth = new Date(startDate.getFullYear(), startDate.getMonth()+1, 0).getDate();
      for (let i = 0; i < daysInMonth; i++) {
        const date = moment(firstDay).add(i, "days");
        labels.push(date.toString().substr(4, 6));
      }
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 100, 0);
      return {
        backgroundColor: gradient,
        labels,
        datasets: [
          {
            label: "Sentiment over time",
            data: [1, 0.4, 0.3, -0.5, 0.2, -0.3], //this.state.month,
            borderWidth: 3,
            fill: false,
            borderColor: "#2174ea"
          }
        ]
      };
    };

    const year = canvas => {
      const labels = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 100, 0);
      return {
        backgroundColor: gradient,
        labels,
        datasets: [
          {
            label: "Sentiment over time",
            data: [1, 0.4, 0.3, -0.5, 0.2, -0.3], // this.state.year,
            borderWidth: 3,
            fill: false,
            borderColor: "#2174ea"
          }
        ]
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
            <Tabs active="tab-a">
              <TabList>
                <Tab tabId="tab-a">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={require('./../../assets/images/features-tabs-icon-01.svg')}
                      alt="Tab icon 01"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Daily
                  </div>
                </Tab>
                <Tab tabId="tab-b">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={require('./../../assets/images/features-tabs-icon-02.svg')}
                      alt="Tab icon 02"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Weekly
                  </div>
                </Tab>
                <Tab tabId="tab-c">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={require('./../../assets/images/features-tabs-icon-03.svg')}
                      alt="Tab icon 03"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Monthly
                  </div>
                </Tab>
                <Tab tabId="tab-d">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={require('./../../assets/images/features-tabs-icon-04.svg')}
                      alt="Tab icon 04"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Yearly
                  </div>
                </Tab>
              </TabList>
              <TabPanel id="tab-a">
                <Line data={day}/>
              </TabPanel>
              <TabPanel id="tab-b">
                <Line data={week} />
              </TabPanel>
              <TabPanel id="tab-c">
                <Line data={month} />
              </TabPanel>
              <TabPanel id="tab-d">
                <Line data={year} />
              </TabPanel>              
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTabs.propTypes = propTypes;
FeaturesTabs.defaultProps = defaultProps;

export default FeaturesTabs;