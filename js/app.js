let countEL = document.getElementById("counter-el");
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total");
parseInt(totalEl);
let count = 0;
let total = 0;
function counter(){
    count += 1;
    total += 1;
    countEL.textContent=count;
    totalEl.textContent=total;
}

function save(){
    if(count == 0){
        alert("Nothing to save");
    }else{
    let saveLog = count + " - "
    saveEl.textContent += saveLog;

    count = 0;
    countEL.textContent = 0;
    }
}