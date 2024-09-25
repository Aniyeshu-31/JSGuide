myJson = `{
    "first_name":"John",
    "last_name":"Doe",
    "isAdmin":"false",
    "score":11.575,
    "license":null,
    "items":["sunflower oil","colgate","Rice"],
    "myobj":{
        "name":"John",
        "marks":98
    }
}`
parsed = JSON.parse(myJson);

// console.log(parsed["myobj"]["marks"]);
console.log(parsed);
