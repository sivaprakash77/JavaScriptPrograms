function sort_array(arr){

    const result = (arr.sort((a,b)=>{return (a-b)}));
    return result;

}
let arr = [12,34,56,78,23,1,1,2,33,4,5,77,88,1];
console.log(sort_array(arr));