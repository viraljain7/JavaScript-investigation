const user = {
    userName: "viral Jain",
    greeting: function () {
        console.log(`Welcome to ChaiAurCode ${this.userName}`);
        console.log(this);
    }
}
console.log(user.userName);
user.greeting()

function createUser(username, channel) {
    this.username = username;
    this.channel = channel;
    return this;//implicating this is returning  
}
const userone = new createUser("viral", "Padle")
const usertwo = new createUser("hitesh sir", "ChaiAurCode")
console.log(userone);
console.log(usertwo);