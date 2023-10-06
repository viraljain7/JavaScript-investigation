let user={
    uname:"vira",
    price:999,
    welcomeMess:function () {
        console.log(`${this.uname}, welcome to website`)
        console.log(this)
    }
}

user.welcomeMess()
user.uname="sam" 
user.welcomeMess()
console.log(this)
