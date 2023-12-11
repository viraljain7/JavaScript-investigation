let myobj = {

    "key": "value",
    "IN": "India",
    "ENG": "England"
}

for (const key in myobj) {
    console.log(key," :- ",myobj[key]);
}

let arr=[1,2,3,"viral",true]
for (const key in arr) {
    console.log(key," :- ",arr[key]);
}

// iteration on map is not possible
