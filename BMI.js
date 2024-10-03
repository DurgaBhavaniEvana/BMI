
document.getElementById('b').addEventListener('click',function(){
    var val1=parseInt(document.getElementById('i1').value);
    var val2=parseInt(document.getElementById('i2').value);
    
    var result=(val1/((val2*0.01)*(val2*0.01))).toFixed(2);
    if(result>=30){
    document.getElementById("m").textContent="BMI Value :"+result+" (obese)";
    }
    else{
        document.getElementById("m").textContent="BMI Value :"+result+"  (not obese)";
    }
});


