const fetch = require('node-fetch');

const baseURL = process.env.WSTOOLBOX;
const secretKey = process.env.SECRET;

const headers=  {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `${secretKey}`
    }
}
const headers2=  {
    method: 'GET',
    headers: {
        'Content-Type': 'text/csv',
        'Authorization': `${secretKey}`
    }
}

const getFilesService = async () => {
    let response = [];
    await fetch(`${baseURL}/files`,headers)
        .then(res => res.json())
        .then(data => {response=data;})
        .catch(error => {
            console.log(error);
        });
    return response;
}
const downlandFileCsv = async (file) => {
    let response ="";
    await fetch(`${baseURL}/file/${file}`,headers2)
        .then(res => res.text())
        .then(data => {
            const csvData=[];
            const lines = data.split("\n");
            for (let i = 0; i < lines.length; i++) {
                csvData[i] = lines[i].split(",");
            }
            if(csvData.length>1){
                response=csvData;
            }
        })
        .catch(error => {
            console.log(error);
        });
    return response;
}

module.exports = { getFilesService , downlandFileCsv };