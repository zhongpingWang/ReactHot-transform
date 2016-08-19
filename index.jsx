import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import NoMatchMe from './coms/a.jsx';

class NoMatch extends Component {

 
  render() {
    return (  <div>405 <NoMatchMe/></div> )
  }
}

ReactDOM.render(<NoMatch />,document.body);