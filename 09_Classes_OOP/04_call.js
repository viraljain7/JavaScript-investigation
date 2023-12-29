function setUserName(name) {
    this.name = name
}

function createUser(name, company) {
    setUserName.call(this, name);//Two Important thing Keep in mind to add {Call && This}
    this.company = company;
}
const userone = new createUser("viral", "ChaiAurCode")
console.log(userone);