const prompt = require('prompt-sync')();
var arr = [];
do{
    console.log("------[Array]------");
    console.log("1.INPUT");
    console.log("2.OUTPUT");
    console.log("3.SEARCH");
    console.log("4.UPDATE");
    console.log("5.REMOVE");
    console.log("6.SORT");
    console.log("7.EXIT");
    
    var  op = Number(prompt("Enter option: "));
    switch(op){
        case 1:{
            var n = Number(prompt("How many number to add in array: "))
            for(i=0;i<n;i++){
                var value = Number(prompt("Enter value of array: "));
                arr.push(value);
            }
            break;
        }
        case 2:{
            arr.forEach((val,i) => {
                console.log("Arr["+i+"] = "+val);
            });
            break;
        }
        case 3:{
            var search = Number(prompt("Enter Number = "));
            // var check = arr.includes(search);//return true false
            var check = arr.indexOf(search);// if found return index if not found return -1
            if(check > -1){
                console.log("Found at "+check+" = "+arr[check]);
            }
            else{
                console.log("Search not found");
                
            }
        }
        case 4:{
            var search = Number(prompt("Enter Number = "));
            // var check = arr.includes(search);//return true false
            var check = arr.indexOf(search);// if found return index if not found return -1
            if(check > -1){
                arr[check] = Number(prompt("Ente new Value = "));
                console.log("Update success");
            }
            else{
                console.log("Search not found");
                
            }
        }
        case 5:{
            var search = Number(prompt("Enter Number = "));
            // var check = arr.includes(search);//return true false
            var check = arr.indexOf(search);// if found return index if not found return -1
            if(check > -1){
                arr.splice(check,1);
                console.log("Delete Success");
            }
            else{
                console.log("Search not found");
            }
        }
        case 6:{
            arr.sort();//minimun to maximum
            arr.reverse();//reverse array
            console.log("Sort Success");
        }
    }
}while(op!=7);






