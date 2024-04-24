//function without recursion

function fibonacci(num){
    let arr=[0,1];
    for(i=2;i<=num;i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    console.log(arr);
}
fibonacci(8);



//function with recursion


function fibonaccii(num){
    if(num==0){
        return 0;
    }
    else if(num==1){
        return [0,1];
    }
    else{
        let arr=fibonaccii(num-1);
        arr.push(arr[arr.length-1] + arr[arr.length-2])
        return arr;
    }
}
console.log(fibonaccii(8));