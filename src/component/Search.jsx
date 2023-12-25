/** @format */
import { useState } from "react";
import { Grid, Input, Form } from "semantic-ui-react";
import "../App.css";

export default function Search({ getData }) {
    const [searchText, setSearchText] = useState("");
    function submit() {
        //  value(searchText);

        getData(searchText);
        console.log("clicied");
        setSearchText("");
    }
    return (
        <Grid textAlign='center' className='main-col' column={1}>
            <Grid.Row>
                <Grid.Column>
                    <h1>
                        search with in the{" "}
                        <span style={{ color: "teal", fontWeight: "bold" }}>
                            nature
                        </span>
                    </h1>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Form
                        style={{ marginRight: "30px" }}
                        onSubmit={() => searchText !== "" && submit()}
                    >
                        <Input
                            onChange={e => setSearchText(e.target.value)}
                            value={searchText}
                            size='large'
                            action={{
                                icon: "search",
                                color: "blue",
                                size: "big"
                            }}
                            placeholder='search recipes'
                        />
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}
