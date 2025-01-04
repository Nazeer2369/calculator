function show(input){

    document.getElementById("ip").value+=input;
}

function cal(){
    var output=eval(document.getElementById("ip").value);
    document.getElementById("ip").value=output;
}

function ac(){
    document.getElementById("ip").value="";
}

function sqr(x){
    document.getElementById("ip").value=x*x;
}


function sqrt(x){
    document.getElementById("ip").value=Math.sqrt(x);
    
}

back=()=>{
    let val=document.getElementById("ip").value;
    document.getElementById("ip").value=val.slice(0,-1);
}