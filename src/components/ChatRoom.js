import React, {Component} from 'react'

class ChatRoom extends Component{

	constructor(props,context){
		super(props,context)
		this.updateMesage = this.updateMesage.bind(this)
		this.submitMessage = this.submitMessage.bind(this)
		this.state = {
			message: '',
			messages: [
			]
		}
	}
	componentDidMount(){
		firebase.database().ref('messages/').on('value',(snapshot)=>{
			const currentMessages = snapshot.val()
			if(currentMessages !=null){
				this.setState({
					messages: currentMessages
				})
			}
		})
	}
	submitMessage(){
		console.log('submitMessage:' + this.state.message)
		const nextMessage = {
			id: this.state.messages.length,
			text: this.state.message
		}
		// var list = Object.assign([],this.state.messages)
		// list.push(nextMessage)
		// this.setState({
		// 	messages: list
		// })
		firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
	}
	updateMesage(event){
		
		this.setState({
			message: event.target.value
		})
	}
	render(){
		const currentMessages = this.state.messages.map((message,i) => {
			return(
				<li key={message.id}>{message.text}</li>
				)
		})
		return(

			<div>
			<ol>
			{currentMessages}
			</ol>
			<input onChange={this.updateMesage} type="textContent" placeholder="Message"/>
			<br/>
			<button onClick={this.submitMessage}>Submit Message</button>
			</div>
			)
	}
}
export default ChatRoom