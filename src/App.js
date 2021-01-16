import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutAlternative from './layouts/LayoutAlternative';

// Views 
import Home from './views/Home';
import MyAnalytics from './views/MyAnalytics';
import Setup from './views/Setup'

class App extends React.Component {

  componentDidMount() {
    document.body.classList.add('is-loaded')
    this.refs.scrollReveal.init();
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.refs.scrollReveal.init();
    }
  }

  render() {
    return (
      <ScrollReveal
        ref="scrollReveal"
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/setup" component={Setup} layout={LayoutAlternative} />
            <AppRoute exact path="/my-analytics" component={MyAnalytics} layout={LayoutAlternative} />
          </Switch>
        )} />
    );
  }
}

export default withRouter(props => <App {...props} />);