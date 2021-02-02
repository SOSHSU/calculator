function plusNum()
{
    var strNum1 = document.querySelector("#number1").value
    var strNum2 = document.querySelector("#number2").value
    var intNum1 = parseInt(strNum1)
    var intNum2 = parseInt(strNum2)
    var result = (intNum1+intNum2)
    document.querySelector(".display").innerHTML = result
}
function minusNum()
{
    var strNum1 = document.querySelector("#number1").value
    var strNum2 = document.querySelector("#number2").value
    var intNum1 = parseInt(strNum1)
    var intNum2 = parseInt(strNum2)
    var result = (intNum1-intNum2)
    document.querySelector(".display").innerHTML = result
}
function productNum()
{
    var strNum1 = document.querySelector("#number1").value
    var strNum2 = document.querySelector("#number2").value
    var intNum1 = parseInt(strNum1)
    var intNum2 = parseInt(strNum2)
    var result = (intNum1*intNum2)
    document.querySelector(".display").innerHTML = result
}
function divideNum()
{
    var strNum1 = document.querySelector("#number1").value
    var strNum2 = document.querySelector("#number2").value
    var intNum1 = parseInt(strNum1)
    var intNum2 = parseInt(strNum2)
    var resultOfDecimals = (intNum1/intNum2)
    var resultOfInteger = parseInt(resultOfDecimals)
    var remainder = (intNum1%intNum2)
    document.querySelector(".display").innerHTML = (resultOfInteger + " remainder " + remainder)
}