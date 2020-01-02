import React from 'react'
import './FetchData.css'
class FetchData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            loader: false
        };
    }

    componentDidMount(){
        this.setState({loader:true});
        fetch("https://api.github.com/users")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    users: data,
                    loader:false
                })
            })
    }

    render(){
        console.log(this.state.users);
        const userData = this.state.users;

        if(this.state.loader){
            return (
            <p>Loading...</p>
            );
        }else{
            let listUsers = userData.map((user, index)=> 
                <li key={index}> 
                <img src={user.avatar_url} alt={user.login} className="imagesize" />
                {user.login}</li>
            );

            return (
                <ul>{listUsers}</ul>
            )
        }

        
        
    }
}

export default FetchData;