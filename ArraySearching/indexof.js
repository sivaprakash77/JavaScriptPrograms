function index_of_Element(result,elem){
    return result.indexOf(elem);
}

function multiple(num)
{
   let arr=[];
   for(let i=1;i<=num;i++){
    arr.push(i*10);
   }
   return arr;
}

// const result = ;
console.log(index_of_Element(multiple(10),70))