const arr = [34,52,62,6,6,34,52]
const res = arr.filter((res,index) =>{

    console.log(index);
    return arr.indexOf(res) === index 
} 
)
console.log(res);