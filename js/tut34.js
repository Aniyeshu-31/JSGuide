console.log("tutorial 34");

// Asycnchronous call requires the compute power of the Processor.

// Many request  interact things outside the processor. for eg:- they may communicate over a network or request data from the storage disk.

// this is a lot slower than getting it from memory.

// we don't want our processor to sit idle when such things are happening.

// Asynchronous Model allows multiple things to happen at the same time.

// Synchronous Model allows things happen one by one.(back to back);

// Asynchronous code can be written using :

// Async/await
// Callbacks
// promises


// Asynchronous Call...
setTimeout(()=>{
    for(let index=0;index<40000;index++){
        const element=index;
        console.log("This is index number"+index);
    }
},100);


console.log('Done printing');