var theDojo = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var dojoDiv = document.querySelector("#the-dojo");
var ninjaCount = 0;
while (ninjaCount < 10){
    var row = Math.floor(Math.random() * 10)
    var col = Math.floor(Math.random() * 10)
    if (theDojo[row][col] !==7){
        theDojo[row][col] = 7
        ninjaCount++
    }
}

function render(theDojo) {
var result = "";
for(var i=0; i<theDojo.length; i++) {
    for(var j=0; j<theDojo[i].length; j++) {
        result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
}
return result;
}

function howMany(i, j, element) {
    if (theDojo[i][j] === 7){
        location.reload()
    } else {
        console.log({i, j})
    }
    var count = 0;
    for (var row = i - 1; row <= i+1; row++){
        for (var col = j - 1; col <= j+1; col++){
            if(row >=0 && row <theDojo.length && col >=0 && col < theDojo[i].length && theDojo[row][col] === 7){
                count++
            }
        }
    }
    element.innerText = count
    console.log('There are ${count} ninjas hiding in adjacent squares.')
}

console.table(theDojo);

dojoDiv.innerHTML = render(theDojo);    

