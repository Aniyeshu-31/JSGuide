console.log('This is tutorial 53');

// Generators in Javascript

function* numberGen(){
    let i=1;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while(true){
        yield i++;
    }
}

const ngen= numberGen();
for (let i=1; i<=100; i++) {
    
    console.log(ngen.next().value);
}
