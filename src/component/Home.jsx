/** @format */
import "../App.css";
import { Button } from "semantic-ui-react";
import {Link} from 'react-router-dom'
export default function Home() {
    return (
        <div className='home' style={{ marginTop: "50px" }}>
            <div className='center'>
            <p>Welcome to Mukesh Cafe</p>
            <Button primary as={Link} to='/recipes' >Search Recipes</Button>
            </div>
        </div>
    );
}
