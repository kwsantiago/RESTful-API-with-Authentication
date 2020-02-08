import React from 'react';
import axios from 'axios';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: [],
            price: [],
            picture: []
        };
    }

    componentDidMount = () => {
        axios.get('http://localhost:8080/api/dishes').then((res) => {
            for (var i = 0; i < res.data.length; i++)
            this.setState({
                name: [...this.state.name, res.data[i].name],
                price: [...this.state.price, res.data[i].price],
                picture: [...this.state.picture, res.data[i].picture]
            });
        }).catch ((err) => {
            console.log(err);
        });
    }

    Style = {
        margin: '10px',
        padding: '10px'
    };

    render() {
        return (
            <div className="ui list" style={this.Style}>
                <h1> Kyle's Restaurant Menu </h1>
            <div className="item">
                <img className="ui small rounded image" src={this.state.picture[0]} alt="lasagna"/>
            <div className="content">
            <h1><a className="header">{this.state.name[0]}</a></h1>
            <div className="description"> <h3> $ {this.state.price[0]} </h3> .    </div>
            </div>
            </div>
            </div>
   );
        }
    }

export default App;


