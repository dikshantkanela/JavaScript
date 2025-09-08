const obj = {
    name: 'Sample',
    regularFunc: function() {
        console.log(this); // Logs obj because `this` refers to the calling object
        
        setTimeout(function() {
            console.log(this); // Logs `window` (or `global` in Node.js)
        }, 100);
        
        setTimeout(() => {
            console.log(this); // Logs obj (inherits `this` from `regularFunc`)
        }, 100);
    }
};
obj.regularFunc();
