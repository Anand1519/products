import data from "../mockData/products.json"
const offline = true;

export const getAllProducts =  async () => {
    if(offline){
        return data;
    }
    else{
        const response = await fetch("https://api4286.s3.ap-south-1.amazonaws.com/products.json", {
            method: 'get'
          });
          return response.json();
    }
}