console.log("Welcomw to tutorial 25 of JS");
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/
// create a div Element.
let divElem= document.createElement('div');
// Add text to it.
let text;
let val= localStorage.getItem('text');
if(val==null)
{
    text = document.createTextNode('this is an element. click to edit it');
}
else
{
    text=document.createTextNode(val);
}
divElem.appendChild(text);
divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style','border:2px solid black; width:154px; margin:34px; padding:23px;');
let container = document.querySelector('.container');
let myfirst = document.getElementById('first');
// console.log(divElem,container , first);
 
container.insertBefore(divElem,first);

// addEventListener to divElem

divElem.addEventListener('click',function(e)
{
    let notetextarea;
    notetextarea = document.getElementsByClassName('textarea');
    if(notetextarea.length==0)
    {
    let html = elem.innerHTML;
    divElem.innerHTML=`<textarea class="form-control textarea" id="textarea" rows="3">${html}</textarea>`;
    }

    let textarea=document.getElementById('textarea');
    // let textarea=document.getElementsByClassName('textarea')[0]; 
    // another way of doing the above step
    

// listen blur event if click out on textarea.

textarea.addEventListener('blur', function(e)
{
    elem.innerHTML= textarea.value;
    localStorage.setItem('text',textarea.value);
})
})

