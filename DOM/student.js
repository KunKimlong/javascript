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
        course:"Web Desgin",
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
        course:"Web Design",
        gender:"Male",
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