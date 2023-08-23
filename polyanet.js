import axios from 'axios';

const url = 'https://challenge.crossmint.io/api/polyanets';
const candidateId = 'e7b57a8b-9942-40b0-bb88-b467d1d0707d';
const headers = {
    'Content-Type': 'application/json',
};

const getParams = (row, column) => {
    return {
    "candidateId" : candidateId,
    "row": row,
    "column": column,
    }
}

export const createPolyanet = async (row,column) => {
    console.log("Creating Polyanet in row: ", row,"column: ", column);
    await axios.post(url, getParams(row,column), { headers, params: { candidateId } })
    .catch(function (error) {
        console.log(error);
    });
    console.log("Polyanet created!");
}

export const deletePolyanets = async (row,column) =>{
    console.log("Deleting Polyanet in row: ", row,"column: ", column);
    await axios.delete(url,{data : getParams(row,column)}, {headers, params: {candidateId}})
    .catch(function (error) {
        console.log(error);
    });
    console.log("Polyanet deleted!")
}