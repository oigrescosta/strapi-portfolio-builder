import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import Quote from './components/Quote'
import Article from './components/Article'
import Entry from './components/Entry'
import ComplexEntry from "./components/ComplexEntry"

import mockPage from './utils/page'
import React, { Component } from 'react';

class App extends React.Component {
  state = {
    page: null
  }

  async componentDidMount() {
    const pages_res = await axios({
      method: 'GET',
      url: 'http://localhost:1337/pages/1',
    })
    
    console.log("App.componentDidMount pages_res", pages_res)
    this.setState({page: pages_res.data})
  }

  render() {
    const {page} = this.state
    console.log("App.render mockPage", mockPage)
    return (
      <div className="App">
        {page && page.content &&
          <>
            {page.content.map(component =>(
            <>
              {component.__component === 'page.quote' &&
                <Quote data={component} />
              }
              {component.__component === 'page.article' &&
                <Article data={component} />
              }
              {component.__component === 'page.entry' &&
                <Entry data={component} />
              }
              {component.__component === 'page.complex-entry' &&
                <ComplexEntry data={component} />
              }
            </>
            ))}
          </>
        }
      </div>
    );
  }
}

export default App;
