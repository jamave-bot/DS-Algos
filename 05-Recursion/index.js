
//============================
// countDown
//============================

function countDown(num){
    if (num <= 0){//base case
        console.log("Add done!")
        return;
    }
    console.log(num);
    num--;
    countDown(num) // recursive call
}

