import React, {Component} from "react"

class Form extends Component {
    state = {
        name: "",
        lastName: "",
        email: "",
        password: ""
    }

    change = (event) => {
        const name = event.target.name;
        const lastName = event.target.lastName;
        const email = event.target.email;
        const password = event.target.password;
        const value = event.target.value;

        this.setState({[name]: value})
        this.setState({[lastName]: value})
        this.setState({[email]: value})
        this.setState({[password]: value})
    }

    componentDidUpdate() {
        console.log(this.state);
      }

    render() {
        return (
            <form className="App">
                <input type="text" name="name" onChange={this.change}/> Name <br/>
                <input type="text" name="last-name" onChange={this.change}/> Last name <br/>
                <input type="email" name="email" onChange={this.change}/> E-mail <br/>
                <input type="password" name="password" onChange={this.change}/> Password <br/>
            </form>
        )
    }
}

export default Form