/** @format */
import RecipeList from "../component/List.jsx";
import Search from "../component/Search.jsx";
import { useState, useEffect } from "react";
import { apiQuery } from "../api/api.js";
import Loading from "../component/Loader.jsx";

export default function Recipes() {
    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [load, setLoad] = useState(true);
    useEffect(() => {
        next();
    }, []);
    async function next(key = "pizza") {
        // console.log("next", key);
        setId(key);
        const items = await apiQuery(key);
        console.log("item", items);
        if (items.recipes) {
            setLoad(false);
            await setData(items.recipes);
        } else {
            setData(items);
        }
    }

    return (
        <div style={{ marginTop: "0px" }}>
            <Search getData={next} />
            {load ? <Loading /> : <RecipeList id={id} data={data} />}
        </div>
    );
}
