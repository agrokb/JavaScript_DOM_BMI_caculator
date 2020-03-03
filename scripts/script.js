// 程式碼寫在這裡！
function calculateBMI(){
    var weight = document.querySelector("#bodyWeight").value;
    var height = document.querySelector("#bodyHeight").value/100;
    var bmi    = Math.floor(weight/(height*height));
    document.querySelector("#resultText").innerHTML = bmi;
    if(bmi >23.5){
        document.querySelector("#health").innerHTML = "過重";
    }
}

