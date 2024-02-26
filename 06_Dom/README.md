# Dom manipulation (video 31 & 32)

## NodeList Vs HtmlCollection

```js
className=class|| id=id
window ==> object
console.log(window)
console.log(document.baseURI)
console.log(document.links)
console.dir(document)
```

```js
document.getElementById("id");
document.getElementById("id").innerHTML = "Try Something New";
document.getElementById("id").id;
document.getElementById("id").className;
document.getElementById("id").getAttribute("name");
document.getElementById("id").getAttribute("class");
```

```js
document.getElementById("id").setAttribute("class", "bg-grey text-red"); //overwrite krta hai
```

```js
document.querySelector('input[type="password"]');
myp = document.querySelectorAll("p");
myp.forEach((p) => {
  p.style.padding = "10px";
});
myp = document.getElementsByClassName("para");
myp[0].style.color = "red";
```

```js
Array.from("para");
```

```js
document.querySelector(".text").textContent;
document.querySelector(".text").innerHTML;
document.querySelector(".text").innerText;
```

- `textContent` : Raw text content of an element, including nested elements.
- `innerHTML` : Parsed HTML content of an element, including tags.
- `innerText` : Visible text content, excluding hidden elements or styled content.

# video 33

```js

 <body>
    <div class="parent">
      <div class="day">Monday</div>
      <div class="day">Tuesday</div>
      <div class="day">Wednesday</div>
      <div class="day">Sunday</div>
    </div>
  </body>
  <script>
    let parent = document.querySelector(".parent");
    console.log(parent.children); // HTMLCollection(4) [div.day, div.day, div.day, div.day]
    console.log(parent.children[1].innerHTML); // Tuesday
    console.log(parent.firstElementChild); // <div class="day">Monday</div>
    console.log(parent.lastElementChild); //  <div class="day">Sunday</div>

    let dayone = document.querySelector(".day"); //expensive operator
    console.log(dayone); // <div class="day">Monday</div>
    console.log(dayone.parentElement);
   //  <div class="parent">
        //   <div class="day">Monday</div>
        //   <div class="day">Tuesday</div>
        //   <div class="day">Wednesday</div>
        //   <div class="day">Sunday</div>
   // </div>
    console.log(dayone.nextElementSibling); //  <div class="day">Tuesday</div>

    console.log("Nodes", parent.childNodes); // Nodes NodeList(9) [text, div.day, text, div.day, text, div.day, text, div.day, text]
  </script>

```

```js
// <------------ Create new Element------------->

// Create a new div element
let div = document.createElement("div");

// div.className = "mylist"; //not to use
// div.id = "myid"; //because of overwrite property
// div.innerHTML = "Custom Div"; //not good of performance of website

// Set attributes for the div
div.setAttribute("title", "generated Title");
div.setAttribute("id", "myId");
div.setAttribute("class", "mylist");

// Set styles for the div
div.style.backgroundColor = "red";
div.style.padding = "10px";

// Create a text node with the content "Chai Aur Code"
let addText = document.createTextNode("Chai Aur Code");

// Append the text node to the div
div.appendChild(addText);

// Append the div to the body of the HTML document
document.body.appendChild(div);

// Log the div to the console
console.log(div);
```

## video 34

```js
// <+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// <------------ Create new Element Via Function------------->
// <+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>

const AddLang = function (lang) {
  const myList = document.createElement("li");
  const myLang = document.createTextNode(lang);

  // Append the text node to the list item
  myList.appendChild(myLang);

  const myUOList = document.querySelector(".language");
  myUOList.appendChild(myList);
};

AddLang("Typescript");
AddLang("Python");
AddLang("Java");
```

```js
// <+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// <------------ Edit Element ------------->
// <+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
const secondEl = document.querySelector("li:nth-child(2)");
const newLiText = document.createTextNode("Mojo");
const newLi = document.createElement("li");
newLi.appendChild(newLiText);
secondEl.replaceWith(newLi);

// not optimized
const firstEl = document.querySelector("li:first-child");
// firstEl.innerHTML = "<li>Html</li>";
// firstEl.outerHTML = "<li>Http</li>";
```

```js
// <+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
// <------------ Remove Element ------------->
// <+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
const lastEl = document.querySelector("li:last-child");
lastEl.remove();
```
