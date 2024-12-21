// this < ---

// if we want refer the current context inside the object we need to use the this keyword
// for example the current contexts here are username and price inside the const user


const user = {
    username : "Tharunn",
    price : 499,

    welcomeMessage : function()
    {
       console.log(`welcome to our course Mr.${this.username}`);
    }
}

// user.welcomeMessage();
