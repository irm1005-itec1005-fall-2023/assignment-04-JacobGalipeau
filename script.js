/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
//const appID = "app";
//const li = document.createElement("li");
const ibox = document.getElementById("ibox");
const listitems = document.getElementById("list-items")
//const addbtn = document.getElementById("add-button")
//const checkbtn = document.getElementById("check-button")
//const removebtn = document.getElementById("remove-button")
//const txt = document.createTextNode("listitem");
//li.appendChild(txt);
/*const headingText = "To do. To done. ✅";*/

// DOM Elements
//let appContainer = document.getElementById(appID);

//
// Functions
function Additem(){
  if (ibox.value === ''){
    console.log("please, write something");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = ibox.value;
    listitems.appendChild(li);
  }
}
//
/*
// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();*/