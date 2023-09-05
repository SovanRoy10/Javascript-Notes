const buttons = document.querySelectorAll('.button')

// buttons[0].addEventListener('click',()=>{
//     document.body.style.backgroundColor = buttons[0].id
// })

// buttons[1].addEventListener('click',()=>{
//     document.body.style.backgroundColor = buttons[1].id
// })

// buttons[2].addEventListener('click',()=>{
//     document.body.style.backgroundColor = buttons[2].id
// })

// buttons[3].addEventListener('click',()=>{
//     document.body.style.backgroundColor = buttons[3].id
// })

buttons.forEach(function(button){

    button.addEventListener('click',function(e){
        // console.log(e)
        // console.log(e.target)
        if(e.target.id=='grey'){
            document.body.style.backgroundColor = e.target.id
        }
        else if(e.target.id=='white'){
            document.body.style.backgroundColor = e.target.id
        }
        else if(e.target.id=='yellow'){
            document.body.style.backgroundColor = e.target.id
        }
        else if(e.target.id=='blue'){
            document.body.style.backgroundColor = e.target.id
        }
    })
})
