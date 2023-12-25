/** @format */
import { Container, Grid } from "semantic-ui-react";
import Cards from "./Card.jsx";
import "../App.css";

export default function RecipeList({ data, id }) {
    return (
        <Container style={{ marginTop: "20px" }} textAlign='center'>
            <h2>recipes list for: {id}</h2>

            <Grid columns='1' centered>
                {data.length > 0 ? (
                    data.map(data => (
                        <Grid.Column>
                            <Cards data={data} />
                        </Grid.Column>
                    ))
                ) : (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "50px",
                            color: "violet",

                            fontWeight: "bold"
                        }}
                    >
                        <h1>No Results Found !!!</h1>
                    </div>
                )}
            </Grid>
        </Container>
    );
}

