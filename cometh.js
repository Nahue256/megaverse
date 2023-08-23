import axios from 'axios';

const url = 'https://challenge.crossmint.io/api/comeths';
const candidateId = 'e7b57a8b-9942-40b0-bb88-b467d1d0707d';
const headers = {
    'Content-Type': 'application/json', 
};

const getParams = (direction,row, column) => {
    return {
    "candidateId" : candidateId,
    "row": row,
    "column": column,
    "direction" : direction
    }
}

const getParamsDelete = (row, column) => {
    return {
    "candidateId" : candidateId,
    "row": row,
    "column": column
    }
}

export const createCometh = async (cometh,row,column) => {
    const direction = cometh.split("_")[0].toLowerCase()
    console.log("Dreating Cometh in row: ", row,"column: ", column, "direction: ", direction);
    await axios.post(url, getParams(direction,row,column), { headers, params: { candidateId } })
    .catch(function (error) {
        console.log(error);
    });
    console.log("Cometh created!");
}

export const deleteCometh = (row,column) =>{
    console.log("Deleting Cometh in row: ", row,"column: ", column);
    axios.delete(url,{data : getParamsDelete(row,column)}, {headers, params: {candidateId}})
    .catch(function (error) {
        console.log(error);
    });
    console.log("Cometh deleted!");
}