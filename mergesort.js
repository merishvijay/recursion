function mergeSort(array){
    if(array.length <=1){
        return array;
    }
    else{
        let mid=Math.floor(array.length/2);
        let leftArray=array.slice(0,mid);
        let rightArray=array.slice(mid,array.length);
        return merge(mergeSort(leftArray),mergeSort(rightArray));
    }
}


function merge(leftArray,rightArray){
    let result=[];
    let indexLeft=0;
    let indexRight=0;


    while(indexLeft<leftArray.length && indexRight<rightArray.length){
        if(leftArray[indexLeft] < rightArray[indexRight]){
            result.push(leftArray[indexLeft]);
            indexLeft++;
        }
        else{
            
                result.push(rightArray[indexRight]);
                indexRight++;
        }
    }

    while(indexLeft < leftArray.length){
        result.push(leftArray[indexLeft]);
            indexLeft++;
    }

    while(indexRight < rightArray.length){
        result.push(rightArray[indexRight]);
            indexRight++;
    }

    return result;
}

console.log(mergeSort([79, 100, 105, 110]));