

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
        if (fetchResponse.status === 200) {
            const response =  await fetchResponse.json();
            return response.data;
        }
        return []
    } catch (e) {
        console.log(e);
        return e;
    }
}