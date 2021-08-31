import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

class App extends React.Component{
  render(){   
    return(
      <div>
        <Navbar />     
        <Cards />
        <h5>{'Made with <3 by'}
        <a href="https://twitter.com/juanigallo">@JuaniGallo</a>
        </h5>
      </div>     
    );
  }
}
export default App;
