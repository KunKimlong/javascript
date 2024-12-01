var arrayItem 
= [111,255,127,118,222];

var tbody = document.querySelector('tbody');
var number = document.getElementById('num_txt');
var btnSubmit = document.getElementById('btn-submit');
const popup = (title,text,icon)=>{
    swal({
        title: title,
        text: text,
        icon: icon,
        button: "Done",
      });
}

const showArray = ()=>{
    var show = '';
    arrayItem.forEach((value,index,array)=>{
        show = show+`
        <tr>
            <td>${index}</td>
            <td>${value}</td>
            <td>
                <button onclick="updateArray(${index})" class="btn btn-outline-warning">Update</button>
                <button onclick="deleteArray(${index})" class="btn btn-outline-danger">Delete</button>
            </td>
        </tr>
    `
    })
    tbody.innerHTML = show
}

const updateArray = (index)=>{
    console.log("updateArray = "+index);
    var btnUpdate = document.getElementById('btn-update');
    btnUpdate.classList.remove('d-none');
    number.value = arrayItem[index]
    btnUpdate.addEventListener('click',function(){
        console.log("Event Update = "+index);
        if(index!=-1){
            arrayItem[index] = number.value;
            showArray();
            btnUpdate.classList.add('d-none');
            number.value = '';
            popup("Success","Update Success",'success');
        }
        index = -1;
    })
}

const deleteArray = (index)=>{
    arrayItem.splice(index,1);
    showArray();
    popup("Success","Delete Success",'success');
}

showArray();
btnSubmit.addEventListener('click',function(){
    if(number.value != ""){
        arrayItem.push(number.value);
        showArray();
        number.value= ''
        popup("Success","Add Success",'success');
    }
    else{
        popup("Error","Can not add empty",'error');
    }
    
});