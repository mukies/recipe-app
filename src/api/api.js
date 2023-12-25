/** @format */

export async function apiQuery(key) {
    try {
        const data = await fetch(
            `https://forkify-api.herokuapp.com/api/search?q=${key}`
        );
        const result = await data.json();

        return result;
    } catch (err) {
        console.log("error-->", err.message);
    }
}

export async function apiDetails(key) {
    try {
        const data = await fetch(
            `https://forkify-api.herokuapp.com/api/get?rId=${key}`
        );
        const result = await data.json();

        return result;
    } catch (err) {
        console.log("error-->", err.message);
    }
}
