
document.addEventListener("DOMContentLoaded", button);
function button() {
    //make button
    let button = document.createElement("button");
    //add button txt
    let btnText =  document.createTextNode("add square");
    //set button class
    button.className = "button";
    //insert txt in button
    button.appendChild(btnText);
    //put button in body
    document.body.appendChild(button);
    //create id counter
    let id = 0;

    //listen for btn click
    button.addEventListener("click", buttonClick);
    function buttonClick() {
        id++;
        //create div
        let square = document.createElement("div");
        //set id to incremented id
        square.id = id;
        //set div class
        square.className = "black-square";
        //create p
        let p = document.createElement("p");
        //create squareText variable and set it to the id
        let squareText = document.createTextNode(id);
        //put square text into p
        p.appendChild(squareText);
        //put p in the div
        square.appendChild(p);
        //put div in the body
        document.body.appendChild(square);
        //set opacity of p to 0
        p.style.opacity = "0";
        
        //listen for mouse to hover over div
        square.addEventListener("mouseenter", hover);
        function hover() {
            p.style.opacity="1";
        }

        //listen for mouse to stop hovering over div
        square.addEventListener("mouseleave", noHover);
        function noHover() {
            p.style.opacity="0";
        }

        //listen for click on div
        square.addEventListener("click", squareClick);
        function squareClick() {
            //gen random num 1 through 5
            let num = Math.floor(Math.random() * 6);
            //set color based on num value
            if (num === 0) {
                square.style.backgroundColor = "#AFFF33";
            } else if (num === 1) {
                square.style.backgroundColor = "#FF33F5";
            } else if (num === 2) {
                square.style.backgroundColor = "#33FFFD";
            } else if (num === 3) {
                square.style.backgroundColor = "#333EFF";
            } else if (num === 4) {
                square.style.backgroundColor = "#FF3C33";
            } else if (num === 5) {
                square.style.backgroundColor = "#33FFC3";
            }
        }

        //listen for doubleclick on div
        square.addEventListener("dblclick", squareDoubleClick);
        function squareDoubleClick() {
            //check for odd or even
            if (square.id % 2 === 0) {
                //set variable to current ID + 1
                let elementID = square.id + 1;
                //set variable to element with that ID
                let element = document.getElementById(elementID);
                //delete element or display an alert depending on if the element exists
                if (element == null) {
                    alert("Square with ID " + elementID + " does not exist.")
                } else {
                    element.parentNode.removeChild(element);
                }      
            } else {
                //set variable to current ID - 1
                let elementID = square.id - 1;
                //set variable to element with that ID
                let element = document.getElementById(elementID);
                //delete element or display an alert depending on if the element exists
                if (element == null) {
                    alert("Square with ID " + elementID + " does not exist.")
                } else {
                    element.parentNode.removeChild(element);
                }
            }
        }
    }
}