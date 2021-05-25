function upSideDownClick()
{
    alert("let me tell you a story about how my text got flipped upside down!")
}

var myCounter = 0 
function increaseMyCount(elementName)
{
    myCounter++
    var element = document.getElementById(elementName)
    element.value = myCounter
    console.log(`The current count is ${myCounter}!!`);
}

function decreaseMyCount(elementName)
{
    myCounter--
    var element = document.getElementById(elementName)
    element.value = myCounter
    console.log(`The current count is ${myCounter}!!`);
}