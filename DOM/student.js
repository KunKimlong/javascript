var attendentScore = document.getElementById('att_score');
var assignmentScore = document.getElementById('ass_score');
var examScore = document.getElementById('exam_score');
var totalScore = document.getElementById('total_score');
var average = document.getElementById('average');
var grade = document.getElementById('grade');
var showStudent = document.getElementById('showStudent');

attendentScore.addEventListener("keyup",function(){ //when input
    totalScore.value = Number(attendentScore.value) + Number(assignmentScore.value) + Number(examScore.value)
    average.value = (totalScore.value/3).toFixed(2);
    grade.value = (average.value >=90 )?"A":
                (average.value>=80)?"B":
                (average.value>=70)?"C":
                (average.value>=60)?"D":
                (average.value>=50)?"E":"F"
});
assignmentScore.addEventListener('keyup',function(){
    totalScore.value = Number(attendentScore.value) + Number(assignmentScore.value) + Number(examScore.value)
    average.value = (totalScore.value/3).toFixed(2);
    grade.value = (average.value >=90 )?"A":
                (average.value>=80)?"B":
                (average.value>=70)?"C":
                (average.value>=60)?"D":
                (average.value>=50)?"E":"F"
})
examScore.addEventListener('keyup',function(){
    totalScore.value = Number(attendentScore.value) + Number(assignmentScore.value) + Number(examScore.value)
    average.value = (totalScore.value/3).toFixed(2);
    grade.value = (average.value >=90 )?"A":
                (average.value>=80)?"B":
                (average.value>=70)?"C":
                (average.value>=60)?"D":
                (average.value>=50)?"E":"F"
})

const students = [
    {
        id:"EC001",
        name:"Sok Dara",
        gender:"Male",
        course:"Web Backend",
        assScore:90,
        attScore:90,
        examScore:90,
        totalScore:270,
        average:90.00,
        grade:'A'
    },
    {
        id:"EC002",
        name:"Sok Mesa",
        course:"Web Backend",
        gender:"Female",
        assScore:90,
        attScore:90,
        examScore:90,
        totalScore:270,
        average:90.00,
        grade:'A'
    },
    
]

function displayStudent(){
    var txt = ``;
    students.map((value,index,array)=>{
        txt+=`
            <tr>
                <td>${index+1}</td>
                <td>${value.id}</td>
                <td>${value.name}</td>
                <td>${value.gender}</td>
                <td>${value.course}</td>
                <td>${value.attScore}</td>
                <td>${value.assScore}</td>
                <td>${value.examScore}</td>
                <td>${value.totalScore}</td>
                <td>${value.average}</td>
                <td>${value.grade}</td>
                <td>
                    <button data-bs-toggle="modal" onclick="showUpdate(${index})" id="btn-show-update" data-bs-target="#exampleModal" class="btn btn-outline-warning">Update</button>
                    <button class="btn btn-outline-danger" onclick="openDelete(${index})" data-bs-toggle="modal" data-bs-target="#modleDete">Delete</button>
                </td>
            </tr>
        `;
    })

    showStudent.innerHTML = txt
}

displayStudent();

var btnSubmit = document.getElementById('btn-submit');
var btnReset = document.getElementById('btn-reset');
var idTxt = document.getElementById('id-txt');
var nameTxt = document.getElementById('name-txt');
var genderTxt = document.getElementsByName('gender');
console.log(genderTxt);

var course = document.getElementById('course-txt');
var att_score = document.getElementById('att_score');
var ass_score = document.getElementById('ass_score');
var exam_score = document.getElementById('exam_score');
var total_score = document.getElementById('total_score');
var average = document.getElementById('average');
var grade = document.getElementById('grade');

btnSubmit.addEventListener('click',function(){
    var gender = '';
    if(genderTxt[0].checked){
        gender = genderTxt[0].value
    }
    else{
        gender = genderTxt[1].value
    }

    students.push({
        id:idTxt.value,
        name:nameTxt.value,
        gender:gender,
        course:course.value,
        assScore:ass_score.value,
        attScore:att_score.value,
        examScore:exam_score.value,
        totalScore:total_score.value,
        average:average.value,
        grade:grade.value
    })

    displayStudent();
    btnReset.click();
})
var btnUpdate = document.getElementById('btn-update');
function showUpdate(index){

    if(students[index].gender == "Male"){
        genderTxt[0].setAttribute('checked','checked')
    }
    else{
        genderTxt[1].setAttribute('checked','checked')
    }
    document.getElementById('index-txt').value = index
    idTxt.value = students[index].id;
    nameTxt.value = students[index].name
    course.value = students[index].course
    ass_score.value = students[index].assScore
    att_score.value = students[index].attScore
    exam_score.value = students[index].examScore
    total_score.value = students[index].totalScore
    average.value = students[index].average
    grade.value = students[index].grade
}

btnUpdate.addEventListener('click',function(){
    var index = document.getElementById('index-txt').value;
    var gender = '';
    if(genderTxt[0].checked){
        gender = genderTxt[0].value
    }
    else{
        gender = genderTxt[1].value
    }
    students[index].id = idTxt.value;
    students[index].gender = gender;
    students[index].name = nameTxt.value;
    students[index].course = course.value;
    students[index].assScore = ass_score.value;
    students[index].attScore = att_score.value;
    students[index].examScore = exam_score.value;
    students[index].totalScore = totalScore.value;
    students[index].average = average.value;
    students[index].grade = grade.value;

    displayStudent();
});

function openDelete(index){
    document.getElementById('h4-delete').setAttribute('delete_value',index);
}

document.getElementById('btn-delete').addEventListener('click',function(){
    var index = document.getElementById('h4-delete').getAttribute('delete_value');
    students.splice(index,1);
    displayStudent();
})