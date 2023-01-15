import React, {useState} from 'react';
import Jumbotron from "../../components/cards/Jumbotron.jsx";
import axios from "axios";
import toast from "react-hot-toast";
import {useAuth} from "../../context/auth.jsx";
import {useNavigate} from "react-router-dom";

const Register = () => {

    // 1. States
    const [name, setName] = useState('Jony Ahmed');
    const [email, setEmail] = useState('example@example.com');
    const [password, setPassword] = useState('123456');

    // 2. hooks
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    // 3. handler for backend connection
    const submitHandler = async (e) =>{
        e.preventDefault();
        try{
            const {data} = await axios.post(
                `http://localhost:3000/api/v1/register`,
                {
                    name,
                    email,
                    password
                }
            )


            if(data?.error){
                toast.error(data.error);
            }else{
                localStorage.setItem('auth', JSON.stringify(data));
                setAuth({...auth, token: data.token, user: data.user});
                toast.success('Registration Successful');
                navigate('/')
            }

        }catch (err){
            console.log(err);
            toast.error('Registration failed. Try again.')
        }
    }


    return (
        <div>
            <Jumbotron title="Register" />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={submitHandler}>
                            <input
                                type="text"
                                className='form-control mb-4 p-2'
                                placeholder='Enter your name'
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                autoFocus
                            />
                            <input
                                type="email"
                                className='form-control mb-4 p-2'
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}

                            />
                            <input
                                type="password"
                                className='form-control mb-4 p-2'
                                placeholder='Enter your password'
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                            <button className='btn btn-primary' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;