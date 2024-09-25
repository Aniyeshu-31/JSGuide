let str="python";
let links=document.links;
console.log(links);

Array.from(links).forEach(function(element)
{
    let h=element.href;
    if(h.includes(str))
    {
        console.log(h);
    }
    
})  
