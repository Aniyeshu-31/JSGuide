function reverse(str){
    let revstr ='';
    for(let i = 0;i<str.length;i++){
          revstr = str[i]+revstr;
    }
    str = revstr;
    console.log(revstr);
}

reverse("Hello");