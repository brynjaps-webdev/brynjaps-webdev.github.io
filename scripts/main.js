const myImage   = document.querySelector("img");
let myButton    = document.querySelector("button");
let myHeading   = document.querySelector("h1");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/strong.png") {
    myImage.setAttribute("src", "images/strong2.png");
  } else {
    myImage.setAttribute("src", "images/strong.png");
  }
};

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Health is cool, ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Health is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };