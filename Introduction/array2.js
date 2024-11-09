var arr = [10,20,30,40,50];
console.log("For in");
for(var i in arr){
    console.log(arr[i]);   
}
console.log("For of");
for(var val of arr){
    console.log(val);
}
console.log("Foreach");
arr.forEach(function(val,index,array){
    console.log(val);
    console.log(index);
    console.log(array);
})
console.log("Map");
arr.map(function(val,index,array){
    console.log(val);
    console.log(index);
    console.log(array);
})
console.log("Filter");
arr.filter(function(val,index,array){
    console.log(val);
    console.log(index);
    console.log(array);
})

