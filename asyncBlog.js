function fetchdata(){
    return new promise((resolve)=>{
        setTimeout(() => {
            resolve("post Data Fetched")
        },2000);
    })
};

function fetchcommment(){
    return new promise((resolve)=>{
        setTimeout(() => {
            resolve("post Data Fetched")
        },2000);
    })
};

async function getBlogData() {
    try {
        console.log("Fetching blog data");
        Promise.all([fetchdata(),fetchcommment()]);
        
        
    } catch (error) {
        console.log("An error occured while fetching data",error);
        
        
    }
    
}