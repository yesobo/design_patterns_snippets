var revealModuleTest = (function() {
    
    function priv1() {
        return 1;   
    }
    
    return {
        // we have to use object notation in the return statement
        doPriv:function() {
            return priv1();
        }, 
        pub1:function() {
            return 2;
        }, 
        testpub:function() {
            // we have to repeat the module name when referring to public functions
            return revealModuleTest.pub1()*2;   
        }
        
    }
    
}());

console.log(revealModuleTest.doPriv());

console.log(revealModuleTest.pub1());

console.log(revealModuleTest.testpub());