/** @format */
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Nav() {
    return (
        <Menu fixed='top' size='large' borderless>
            <Menu.Item>
                <Image
                    style={{
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px"
                    }}
                    src='https://png.pngtree.com/template/20191219/ourmid/pngtree-nature-recipe-logo-template-nature-food-logo-template-image_341447.jpg'
                    alt='logo'
                />
            </Menu.Item>
            <Menu.Item
                
                style={{ fontWeight: "bold" }}
                as={Link}
                to='/'
                color='teal'
                name='Home'
            />

            <Menu.Item
                
                style={{ fontWeight: "bold" }}
                as={Link}
                to='/recipes'
                name='Recipes'
            />
        </Menu>
    );
}
