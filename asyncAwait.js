function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({name:"chaicode", url:"https://chaicode.com"})   
        }, 2500);
    });
};

async function getUserData(){
    try {
        console.log("Fetching the user data ...");
        const userData = await fetchUserData();
        console.log("User data: ",userData);
    } catch (error) {
        console.log("error fetching data",error);
    } 
}

getUserData();