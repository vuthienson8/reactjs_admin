import React, { Component } from 'react';
import auth from '../../apis/authen';

class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                username: "",
                password: ""
            },
            message: ""
        }
    }
    
    onValueChange = (event) =>{
        console.log(event.target.name, event.target.value);
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        })
    }

    submit = () =>{
        const {data, message} = this.state;
        this.setState({message: "Loading..."})
        // alert("Call Api with username is: "+ data.username+ " and password is: "+ data.password)
        auth.login(data).then((result) => {
            console.log("result: ", result)
            this.setState({message: "Logged In!"})
        })
        .catch((err) =>{
            console.log("Error:", err);
            this.setState({message: "LogIn Failed!"})
        })
    }

    render() {
        const { data , message} = this.state;
        console.log("Data is: ", data)
        return (
            <form>
                <legend>Login</legend>
                <b>{message}</b><br />
                <label htmlFor="username">User name</label>
                <input type="text" name="username" id="username" placeholder="username" value={data.username} onChange={this.onValueChange} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="password" value={data.password} onChange={this.onValueChange} />
                <br />
                <input type="button" value="Login" onClick={this.submit}/>
            </form>
        );
    }
}

export default LoginPage;