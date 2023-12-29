console.log(Object.getOwnPropertyDescriptor(Math, "PI"));


let pie = {
    value: 3.14159
    // writable: true,
    // enumerable: true,
    // configurable: true
}
Object.defineProperty(pie, "value", {
    value: 3.141509,
    writable: false, // whether the property's value can be changed
    enumerable: false, // whether the property shows up in for...in loops and Object.keys()
    configurable: false // whether the property can be deleted or changed with defineProperty
});

console.log(Object.getOwnPropertyDescriptor(pie, "value"))