// 버튼을 누르면 orange class 부착 기존에 붙어있던 클래스는 제거
// show 클래스명 부착

// for 문

for(var i = 0; i < 3; i++){
    
}


document.querySelectorAll('.tab-button')[0].addEventListener('click', function(){
    document.querySelectorAll('.tab-button')[0].classList.add('orange');
    document.querySelectorAll('.tab-button')[1].classList.remove('orange');
    document.querySelectorAll('.tab-button')[2].classList.remove('orange');
    document.querySelectorAll('.tab-content')[0].classList.add('show');
    document.querySelectorAll('.tab-content')[1].classList.remove('show');
    document.querySelectorAll('.tab-content')[2].classList.remove('show');
});

document.querySelectorAll('.tab-button')[1].addEventListener('click', function(){
    document.querySelectorAll('.tab-button')[0].classList.remove('orange');
    document.querySelectorAll('.tab-button')[1].classList.add('orange');
    document.querySelectorAll('.tab-button')[2].classList.remove('orange');
    document.querySelectorAll('.tab-content')[0].classList.remove('show');
    document.querySelectorAll('.tab-content')[1].classList.add('show');
    document.querySelectorAll('.tab-content')[2].classList.remove('show');
    
});

document.querySelectorAll('.tab-button')[2].addEventListener('click', function(){
    document.querySelectorAll('.tab-button')[0].classList.remove('orange');
    document.querySelectorAll('.tab-button')[1].classList.remove('orange');
    document.querySelectorAll('.tab-button')[2].classList.add('orange');
    document.querySelectorAll('.tab-content')[0].classList.remove('show');
    document.querySelectorAll('.tab-content')[1].classList.remove('show');
    document.querySelectorAll('.tab-content')[2].classList.add('show');
});

// $('.list').click(function(e){
//    if(e.target == document.querySelectorAll('.tab-button')[0]){
//     탭열기(0);
//    } 
// })