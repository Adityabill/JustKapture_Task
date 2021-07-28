function fibo_action(){

function fibo_s(n){
    if (n<=1){
        return n;
    }

    else{
        return fibo_s(n-1)+fibo_s(n-2);
    }

}

const num = document.getElementById("num").value;

if(num<0){
    document.write("Enter number starting from zero");
}

else{
   for(let i=0; i<=num; i++ ){
    document.write(fibo_s(i)+"\n");
   }
}
}


