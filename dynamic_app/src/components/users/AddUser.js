import React, {useState} from 'react';
import axios from 'axios';
import {useHistory}  from 'react-router-dom';

const AddUser = () => {
    let history = useHistory();
    const [ user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    const {name,username,email,phone,website} = user;


    const onImnputChange =  e => {
        setUser({...user,[e.target.name]:e.target.value})
 
    };
    const onSubmit = async e => {
        e.preventDefault()
        await axios.post("http://localhost:3003/users",user);
        history.push("/");

    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h1 className="text-center mb-4">Add Traning</h1>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Name"
                            name="name"
                            value={name}
                            onChange={e => onImnputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Username"
                            name="username"
                            value={username}
                            onChange={e => onImnputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Email-id"
                            name="email"
                            value={email}
                            onChange={e => onImnputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Phone Number"
                            name="phone"
                            value={phone}
                            onChange={e => onImnputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Website"
                            name="website"
                            value={website}
                            onChange={e => onImnputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Add Training</button>
                </form>
            </div>
        </div>

    );
};


export default AddUser;
