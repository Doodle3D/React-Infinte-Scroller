import CircularProgress from 'material-ui/CircularProgress';
import InfiniteScroll from '../src/index.js';
import React from 'react';

class App extends React.Component {
  state = {
    counter: 0
  };

  loadMore = (page) => {
    return new Promise(resolve => {
      setTimeout(() => {
        this.setState({ counter: this.state.counter + 10 });
        resolve();
      }, 1000);
    });
  };

  render() {
    const { counter } = this.state;

    return <InfiniteScroll
      hasMore={counter < 100}
      loader={<CircularProgress style={{ margin: '0 auto', display: 'block' }} />}
      loadMore={this.loadMore}
    >
      {Array.from(Array(counter)).map((item, i) => <h2>{i}</h2>)}
    </InfiniteScroll>;
  }
}

export default App;
