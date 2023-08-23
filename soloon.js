import axios from 'axios';

const url = 'https://challenge.crossmint.io/api/soloons';
const candidateId = 'e7b57a8b-9942-40b0-bb88-b467d1d0707d';
const headers = {
    'Content-Type': 'application/json',
};

const getParams = (color,row, column) => {
    return {
    "candidateId" : candidateId,
    "row": row,
    "column": column,
    "color" : color,
    }
}

const getParamsDelete = (row, column) => {
    return {
    "candidateId" : candidateId,
    "row": row,
    "column": column
    }
}

export const createSoloon = async (soloon,row,column) => {
    const color = soloon.split("_")[0].toLowerCase()
    console.log("Creating Soloon in row: ", row,"column: ", column, "color: ", color);
    await axios.post(url, getParams(color,row,column), { headers, params: { candidateId } })
    .catch(function (error) {
        console.log(error);
    });
    console.log("Soloon created!");
}

export const deleteSoloon = async (row,column) =>{
    console.log("Deleting Soloon in row: ", row,"column: ", column);
    await axios.delete(url,{data : getParamsDelete(row,column)}, {headers, params: {candidateId}})
    .catch(function (error) {
        console.log(error);
    });
    console.log("Soloon deleted!")
}