const saveToStorage = (key,data) =>{
    try{
        let parseData = JSON.stringify(data);
        localStorage.setItem(key, parseData);
    }
    catch (err){
        console.log("localStorage ERROR :", err)
    }
}

const getFromStorage = (key) =>{
    try{
        let data = JSON.parse(localStorage.getItem(key));
        if (data != null){
            return data;
        }
        return []
    }
    catch (err){
        console.log("localStorage ERROR :", err)
        return []
    }
}

export { getFromStorage , saveToStorage}