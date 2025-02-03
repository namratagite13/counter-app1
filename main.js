

const displayCount = document.getElementById("displayCount");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

increaseBtn.onclick = function(){
    count++;

    displayCount.textContent = count
}


decreaseBtn.onclick = function(){
    count--;

    displayCount.textContent = count

}

resetBtn.onclick = function(){
    count = 0

    displayCount.textContent = count

}