import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory, useParams}  from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();
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
    
    useEffect(() =>{
        loadUser()
    },[]);
    const onSubmit = async e => {
        e.preventDefault()
        await axios.put(`http://localhost:3003/users/${id}`,user);
        history.push("/");

    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
       setUser(result.data);
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h1 className="text-center mb-4">EditUser Traning</h1>
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
                    <button className="btn btn-warning btn-block">Add Training</button>
                </form>
            </div>
        </div>

    );
};




export default EditUser;