import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class DeepComponent extends Component {
  deepState = (...a)=> {
    console.log(a);
    this.setState(...a);

    // when a[0] isn't a function (that needs an extra unwrapping step)
    // when it isn't nested - call original setState
    // when it is, call setState( state => {...} )
    // wherein the newState for that nested field
    //  is a merged copy of state[f] and {...a[0]}[f]

    // for now this will be what I make


    
    // the common findId in array fields problem would be solved
    // by storing all your data indexed { [id]: {...item},.. }
    // which also solves automatically props.key



    // this could also save partially evaluated queries (lijsp) in state
    // thus creating a lazy evaulated state (pullable streams - faucets)

    // even so much as parsing json fetch responses lazily,
    // and GCg old (stale) responses
    // or partially parsing responses if that should come to pass

    // or instead of passing functions as props, to pass lijsp queries
    // so the structure of the props could be dynamic at runtime
    // and available as a prop, ie for a form to autostructure


    // children components should be "stateful" and "functional" both
    // mountTo(statePathQuery
    //         state => { ...initState } // falsy block render?
    //         ({ state, widgets }, { trigger })=> (JSX)
    //        )

    // mounting an array (or part of a lazily evaluated array)
    // would be done using statePathQuery onto the key of the array

    // the mounted array would then render through a pluralizer
    // which could be a list, grid, windowed desktop, (browser) routes or tabs
    // or more exotic forms like 'slide show', 'snappy desktop', 'p2p tabs',..

    // each would maintain its own internal state for the arrangement
    //  eg: x, y, currentPage, [{x, y, z},..] (for windows)
    //  which (eg series mini forms) could determine based on previous progress
  }
}


class App extends DeepComponent {
  state = { a: { n: 123, m: 12 }, b: { n: 234, m: 23 } }
  
  componentDidMount(){
    this.setState({ a: { n: 23 } });
    this.deepState({ b: { n: 23 } });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
