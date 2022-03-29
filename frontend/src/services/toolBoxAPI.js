

export const getFiles = async () => {
    const BASE_URL = process.env.REACT_APP_API_URL;
    const url = `${BASE_URL}/files/data`;
    const settings = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const fetchResponse = await fetch(url, settings);
        if (fetchResponse.status === 200 || fetchResponse.status === 202 || fetchResponse.status === 500) {
            const response =  await fetchResponse.json();
            return response;
        }
        return []
    } catch (e) {
        console.log(e);
        return e;
    }
}
export const getOneTest = async (fileName) => {
    const BASE_URL = process.env.REACT_APP_API_URL;
    const url = `${BASE_URL}/files/list/?fileName=${fileName}`;
    const settings = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const fetchResponse = await fetch(url, settings);
        if (fetchResponse.status === 200||fetchResponse.status === 202||fetchResponse.status === 500) {
            const response =  await fetchResponse.json();
            return response;
        }
        return []
    } catch (e) {
        console.log(e);
        return e;
    }
}