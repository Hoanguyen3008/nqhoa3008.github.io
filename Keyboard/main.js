const keyBoard = document.querySelector('.keyboard')

keyBoard.addEventListener('keypress', e =>{
    console.log(e)
    /*if(e.keyCode === 50 || e.keyCode === 90){
        alert('Xin lỗi! Bạn không thể sử dụng phím: ' + e.key )
        e.preventDefault()
    }*/
})