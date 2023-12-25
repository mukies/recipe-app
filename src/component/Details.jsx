/** @format */
import {
    Container,
    Grid,
    Image,
    Header,
    Segment,
    Button
} from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { apiDetails } from "../api/api.js";
import { useEffect, useState } from "react";
import "../App.css";
import Loading from "../component/Loader.jsx";

export default function Details() {
    const [item, setItem] = useState({});
    const [load, setLoad] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        next();
    }, []);
    async function next() {
        console.log("id", id);
        const result = await apiDetails(id);

        console.log("result", result);
        if (result.recipe) {
            setLoad(false);
            setItem(result.recipe);
        }
    }

    return (
        <Container className='detailContainer'>
            {load ? (
                <Loading />
            ) : (
                <Header>
                    <Header.Content className='headerText'>
                        <h1 style={{ color: "gray" }}>Recipe Details: </h1>
                    </Header.Content>
                </Header>
            )}
            {load ? (
                <Loading />
            ) : (
                <Button
                    style={{ margin: "10px" }}
                    size='tiny'
                    color='red'
                    as={Link}
                    to='/recipes'
                >
                    back
                </Button>
            )}
            {load ? (
                <Loading />
            ) : (
                <Grid columns={1}>
                    <Grid.Row>
                        <Grid.Column>
                            <Image
                                style={{ marginTop: "20px" }}
                                href={item.source_url}
                                target='_blank'
                                src={item.image_url}
                                alt='thumbnail'
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header style={{marginBottom:'20px'}} >
                                <Header.Content as={"h1"}>
                                    {item.title}
                                </Header.Content>

                                <Grid columns={2}>
                                    <Grid.Column>
                                        <Header.Subheader
                                            style={{ marginBottom: "10px" }}
                                        >
                                            <span
                                                style={{
                                                    fontWeight: "bold",
                                                    fontSize: "15px"
                                                }}
                                            >
                                                social rank:{" "}
                                            </span>{" "}
                                        </Header.Subheader>
                                        <Header.Subheader>
                                            <span
                                                style={{
                                                    fontWeight: "bold",
                                                    fontSize: "15px"
                                                }}
                                            >
                                                powered by:{" "}
                                            </span>{" "}
                                        </Header.Subheader>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header.Subheader
                                            style={{ marginBottom: "10px" }}
                                        >
                                            <span
                                                style={{
                                                    fontWeight: "bold",
                                                    color: "#36e136",

                                                    fontSize: "14px"
                                                }}
                                            >
                                                {item.social_rank.toFixed()}
                                            </span>{" "}
                                        </Header.Subheader>
                                        <Header.Subheader>
                                            <span
                                                style={{
                                                    fontWeight: "bold",
                                                    fontSize: "14px",
                                                    color: "blue",
                                                    
                                                }}
                                            >
                                                {item.publisher}
                                            </span>{" "}
                                        </Header.Subheader>
                                    </Grid.Column>
                                </Grid>
                            </Header>
                            <Button
                                size='tiny'
                                href={item.publisher_url}
                                target='_blank'
                                color='green'
                            >
                                publisher site
                            </Button>
                            <Button
                                size='tiny'
                                href={item.source_url}
                                target='_blank'
                                secondary
                            >
                                recipe site
                            </Button>

                            <Header
                                as={"h2"}
                                style={{
                                    marginTop: "20px",
                                    marginBottom: "20px"
                                }}
                            >
                                Ingredients
                            </Header>
                            <Segment.Group>
                                {item.ingredients &&
                                    item.ingredients.map((i, id) => (
                                        <Segment key={item.recipe_id} as={"h6"}>
                                            {i}
                                        </Segment>
                                    ))}
                            </Segment.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )}
        </Container>
    );
}
