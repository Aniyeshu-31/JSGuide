console.log("We are in tutorial 17 of JS");
// document.getElementById('heading').addEventListener
// ('click',function(e)
document.getElementById('heading').addEventListener
('mouseover',function(e)
{
    let variable;
    console.log('you have clicked the heading');
    // location.href='//google.com';
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = e.target.id;
    variable = Array.from(e.target.classList);
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
});