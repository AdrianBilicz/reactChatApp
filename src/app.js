import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ChatRoom from './components/ChatRoom.js'

class App extends Component {

	render(){
		return(
				<div>
					This is the React App!
					<ChatRoom/>
				</div>
			)
	}
}
ReactDOM.render(<App/>, document.getElementById('app'))