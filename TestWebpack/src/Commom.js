import axios from 'axios'
export default {
GetCommonAPI(url, fun){
    return axios.get(url)
        .then((response) => {
           if (fun && typeof fun === 'function') {
                fun(response.data);
           }
           return response.data; 
        })
        .catch((error) => {
           console.error("Error:", error);
           throw error; 
        });
},

 PostCommonAPI(url, data, fun) {
    return axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if (fun && typeof fun === 'function') {
            fun(response.data);
        }
        return response.data;
    }).catch(() => {
        console.error("Error:", error);
        throw error;
    });
        
}
}
