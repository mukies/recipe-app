/** @format */

import { Card, Image, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Cards({ data }) {
    return (
        <Card>
            <div
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <img
                    style={{
                        height: "200px",
                        width: "100%"
                    }}
                    src={data.image_url}
                />
            </div>
            <Card.Content>
                <Card.Description>
                    <h5>{data.title}</h5>
                </Card.Description>
            </Card.Content>
            <Card.Content>
                <Button
                    as={Link}
                    to={`/details/${data.recipe_id}`}
                    size='tiny'
                    color='green'
                >
                    Recipes Details
                </Button>
                <Button
                    secondary
                    href={data.source_url}
                    target='_blank'
                    size='tiny'
                >
                    go to
                </Button>
            </Card.Content>
        </Card>
    );
}
