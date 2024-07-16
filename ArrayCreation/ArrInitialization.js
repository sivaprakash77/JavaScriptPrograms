function initialization(arr,k){
    for(let i=0;i<k;i++){
        arr.push(i);
    }
    return arr;
}
let arr=[];
let k=5;
console.log(initialization(arr,k));