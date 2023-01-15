import React from 'react';
import Jumbotron from "../components/cards/Jumbotron.jsx";
import {useAuth} from '../context/auth'
const Home = () => {

    const [auth, setAuth] = useAuth();

    return (
        <div>
            <Jumbotron title="Home Page" />
            <pre>{JSON.stringify(auth, null, 4)}</pre>
        </div>
    );
};

export default Home;