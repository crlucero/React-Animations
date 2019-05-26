import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops'; // this import works

export class Comp2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1500 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component 2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                ipsum quod, provident aperiam placeat voluptates rem eaque
                dolore ducimus aliquam nulla omnis necessitatibus accusamus
                autem cumque, quam quae assumenda ad??
              </p>
              <button onClick={this.props.toggle} style={btn}>
                Show Comp 3
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
const c2Style = {
  background: 'slateblue',
  color: 'white',
  padding: '1.5rem'
};
const btn = {
  background: '#333',
  color: 'white',
  borderRadius: '5%',
  border: 'none',
  padding: '1rem 3rem',
  textTransform: 'uppercase',
  margin: '25px 0'
};

export default Comp2;

// import React from 'react';
// import { useSpring, animated, config } from 'react-spring';

// export default function Comp2() {
//   const props = useSpring({
//     opacity: 1,
//     marginTop: 0,
//     from: { opacity: 0, marginTop: -500 },
//     delay: 2000,
//     duration: 1000,
//     config: config.slow
//   });

//   return (
//     <animated.div style={props}>
//       <div style={c2Style}>
//         <h1>Component 2</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsum
//           quod, provident aperiam placeat voluptates rem eaque dolore ducimus
//           aliquam nulla omnis necessitatibus accusamus autem cumque, quam quae
//           assumenda ad??
//         </p>
//       </div>
//     </animated.div>
//   );
// }

// const c2Style = {
//   background: 'slateblue',
//   color: 'white',
//   padding: '1.5rem'
// };
