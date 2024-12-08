var id      = document.getElementById('id-txt');
var Name    = document.getElementById('name-txt');
var gender  = document.getElementById('gender-txt');
var phone   = document.getElementById('phone-txt');
var addr    = document.getElementById('addr-txt');
var btnAdd  = document.getElementById('btn-add');
var tbody   = document.querySelector('tbody');
var txt = '';

btnAdd.addEventListener('click',function(){
    const employee ={
        id_key: id.value,
        name_key: Name.value,
        gender_key: gender.value,
        phone_key: phone.value,
        addr_key: addr.value
    }
    localStorage.setItem('emp',JSON.stringify(employee));
})


function getDataFromLocalstorage(){

    var getEmployee = JSON.parse(localStorage.getItem('emp'));
    txt += `
        <tr>
            <td>${getEmployee.id_key}</td>
            <td>${getEmployee.name_key}</td>
            <td>${getEmployee.gender_key}</td>
            <td>${getEmployee.phone_key}</td>
            <td>${getEmployee.addr_key}</td>
        </tr>
    `;
    tbody.innerHTML = txt
    
}
getDataFromLocalstorage();  