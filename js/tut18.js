console.log("This is tutorial 18");
let btn = document.getElementById('btn');
btn.addEventListener("click",func1);
btn.addEventListener("mousedown",func3);
btn.addEventListener("dblclick",func2);
function func1(e)
{
 console.log("Thanks",e);
 e.preventDefault(); // prevents the form from getting submitted
}
function func2(e)
{
 console.log("Thanks its a Double Click",e);
 e.preventDefault(); // prevents the form from getting submitted
}

function func3(e)
{
 console.log("Thanks its a MouseDown",e);
 e.preventDefault(); // prevents the form from getting submitted
}

document.querySelector('.no').addEventListener('mouseenter',function()
{
    console.log("you have no entered");
})

document.querySelector('.no').addEventListener('mouseleave',function()
{
    console.log("you exited now");
})

document.querySelector('.container').addEventListener('mousemove',function(e)
{
    console.log(e.offsetX,e.offsetY);
    // document.body.style.backgroundColor ='red';
    document.body.style.backgroundColor =`rgb(${e.offsetX},${e.offsetX},154)`;
    console.log("you triggered mouse move event");
})