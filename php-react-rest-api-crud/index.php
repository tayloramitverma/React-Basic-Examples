<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP| MySQL | React.js | Axios Example</title>
    <script src= "https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script src= "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <!-- Load Babel Compiler -->
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div id='root'></div>
            </div>
        </div> 
    </div>
</body>
<script type="text/babel">

class ContactForm extends React.Component {
    state = {
        name: '',
        email: '',
        country: '',
        city: '',
        job: '',
        nameErrormsg: false,
        emailErrormsg: false
    }

    handleFormSubmit( event ) {

        event.preventDefault();

        if(this.state.name == ''){
            this.setState({nameErrormsg:true})
        }else{
            this.setState({nameErrormsg:false})
        }

        if(this.state.email == ''){
            this.setState({emailErrormsg:true})
        }else{
            this.setState({emailErrormsg:false})
        }

        let formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('email', this.state.email)
        formData.append('city', this.state.city)
        formData.append('country', this.state.country)
        formData.append('job', this.state.job)
        this.props.callBack(this.state);
        axios({
            method: 'post',
            url: 'http://192.168.1.40/avprojects/React/php-react-rest-api-crud/api/contacts.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            console.log(response);

        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
    }

    render() {
        return (
            <form>
                <div class="form-group">
                    <label for="appInputName">Name</label>
                    <input
                        type="text"
                        id="appInputName"
                        className="form-control"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                        placeholder="Enter Name" 
                    />
                    {this.state.nameErrormsg && <small className="text-danger">
                        Name is required.
                    </small> }
                    
                </div>

                <div class="form-group">
                    <label for="appInputEmail">Email</label>
                    <input
                        type="text"
                        id="appInputEmail"
                        className="form-control"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                        placeholder="Enter email" 
                    />
                    {this.state.emailErrormsg && <small className="text-danger">
                        Email is required.
                    </small> }
                </div>

                <div class="form-group">
                    <label for="appInputCountry">County</label>
                    <input
                        type="text"
                        id="appInputCountry"
                        className="form-control"
                        value={this.state.country}
                        onChange={e => this.setState({ country: e.target.value })}
                        placeholder="Enter Country" 
                    />
                </div>

                <div class="form-group">
                    <label for="appInputCity">City</label>
                    <input
                        type="text"
                        id="appInputCity"
                        className="form-control"
                        value={this.state.city}
                        onChange={e => this.setState({ city: e.target.value })}
                        placeholder="Enter City" 
                    />
                </div>

                <div class="form-group">
                    <label for="appInputJob">Job Title</label>
                    <input
                        type="text"
                        id="appInputJob"
                        className="form-control"
                        value={this.state.job}
                        onChange={e => this.setState({ job: e.target.value })}
                        placeholder="Enter Job" 
                    />
                </div>


                <input type="submit" className="btn btn-primary" onClick={e => this.handleFormSubmit(e)} value="Create Contact" />
            </form>
        );
    }
}

class App extends React.Component {

    state = {
        contacts: []
    }

    render() {
        return (
            <React.Fragment>
            <h1>Contact Management</h1>
            <table className="table table-striped" >
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>City</th>
                <th>Job</th>     
            </tr>

            {this.state.contacts.map((contact) => (
            <tr>
                <td>{ contact.name }</td>
                <td>{ contact.email }</td>
                <td>{ contact.country }</td>
                <td>{ contact.city }</td>
                <td>{ contact.job }</td>
            </tr>
            ))}
            </table>

            <ContactForm callBack={data=>this.handleCallBack(data)} />

            </React.Fragment>
        );
    }

    componentDidMount() {
        const url = 'http://192.168.1.40/avprojects/React/php-react-rest-api-crud/api/contacts.php';

        axios.get(url)
        .then(response => response.data)
        .then((data) => {
            this.setState({ contacts: data })
            console.log(this.state.contacts)
        })
    }

    handleCallBack(data){
        console.log(data, 'yes');
        this.setState({
            contacts: [...this.state.contacts, data]
        })
    }
  
}

ReactDOM.render(<App />, document.getElementById('root'));
</script>
</body>   
</html>