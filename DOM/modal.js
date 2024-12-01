var btnShow = document.querySelector('.btn-show');
var containerModal = document.getElementById('modal-container');
var btnClose = document.getElementById('btn-close');
var insideModal = document.querySelector('.inside-modal');
btnShow.addEventListener('click',()=>{
    containerModal.classList.remove('dis-none');
})
btnClose.addEventListener('click',()=>{
    containerModal.classList.add('dis-none')
})
insideModal.addEventListener('click',function(){
    containerModal.classList.add('dis-none')
})
