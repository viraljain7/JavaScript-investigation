let promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Await-1");
    resolve();
  }, 1000);
});
promiseOne.then(() => {
  console.log("resolve-1");
  console.log(
    "<----------------------------------------------------------------->"
  );
});
// <==========================================================>
// <==========================================================>
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Await-2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("resolve-2");
  console.log(
    "<----------------------------------------------------------------->"
  );
});

// <==========================================================>
// <==========================================================>
let promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Await-3");
    resolve({ username: "viral", email: "chai@code" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(`${user.username} : resolve-3`);
  console.log(user);
  console.log(
    "<----------------------------------------------------------------->"
  );
});

// <==========================================================>
// <==========================================================>
let promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    console.log("Async Await-4");
    if (!error) {
      resolve({ username: "viral", email: "chai@code" });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    return `${user.username}`;
  })
  .then((username) => {
    console.log(username);
    console.log(
      "<----------------------------------------------------------------->"
    );
  })
  .catch((error) => {
    console.log(error);
    console.log(
      "<----------------------------------------------------------------->"
    );
  });

// <==========================================================>
// <==========================================================>
let promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    console.log("Async Await-5");
    if (!error) {
      resolve({ username: "viral", email: "chai@code" });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});
promiseFive
  .then((user) => {
    return user.username;
  })
  .then((username) => {
    console.log(username);
    console.log(
      "<----------------------------------------------------------------->"
    );
  })
  .catch((error) => {
    console.log(error);
    console.log(
      "<----------------------------------------------------------------->"
    );
  });
// <==========================================================>
// <==========================================================>
let promiseSix = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    console.log("Async Await-6");
    if (!error) {
      resolve({ username: "viral", email: "chai@code" });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});
promiseSix
  .then((user) => {
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise is Finally Over");
    console.log(
      "<----------------------------------------------------------------->"
    );
  });

// <==========================================================>
// <==========================================================>

let promiseSeven = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    console.log("Async Await-7");
    if (!error) {
      resolve({ username: "viral", email: "chai@code" });
    } else {
      reject("something went wrong in Asyn Await");
    }
  }, 1000);
});
async function consumePromiseSeven() {
  try {
    const response = await promiseSeven;
    console.log(response);
  } catch (error) {
    console.log(error);
    console.log(
      "<----------------------------------------------------------------->"
    );
  }
}
consumePromiseSeven();

// <==========================================================>
// <==========================================================>

async function consumePromiseEight() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json;
    // const data = await response.json();//ye use krna hai
    console.log(data);
    console.log(
      "<----------------------------------------------------------------->"
    );
  } catch (error) {
    console.log(error);
  }
}
consumePromiseEight();

// <==========================================================>
// <==========================================================>
fetch("https://dummyjson.com/users")
  .then((response) => {
    // return response.json();
    return response.json;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
