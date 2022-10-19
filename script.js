const toptext = document.querySelector(".top")
const container = document.querySelector(".container")
const myColors = [  "#443929",
                    "#b49d37",
                    "#601e0f",
                    "#3e5461",
                    "#a9a8a6",
                    "#a12523",
                    "#293e36",
                    "#ad6a27"
                        ]
    


function getRandomInt(max) {
 
    return Math.floor(Math.random() * max);
  }

let number = getRandomInt(8);
console.log(number)
console.log(myColors)
console.log(myColors[number])

container.style.backgroundColor = myColors[number]
toptext.style.color = myColors[number]

document.querySelector("#autofocus").focus();