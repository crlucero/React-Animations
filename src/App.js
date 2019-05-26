import React, { Component } from 'react';
import './App.css';
import Comp1 from './comps/Comp1';
import Comp2 from './comps/Comp2';
import Comp3 from './comps/Comp3';
import { Transition, animated } from 'react-spring/renderprops';

class App extends Component {
  state = {
    showComp3: false
  };
  toggle = e => this.setState({ showComp3: !this.state.showComp3 });

  render() {
    return (
      <div>
        <Comp1 />
        <Comp2 toggle={this.toggle} />
        <Transition
          native
          items={this.state.showComp3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={{ duration: 500 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Comp3 />
              </animated.div>
            ))
          }
        </Transition>
      </div>
    );
  }
}

export default App;
