// function asyn(){
//     return new Promise(
//         function(resolve,reject){
//             resolve(result);
//             reject(error);
//         }
//     )
// }
// asyn()
// .then(result => {"ravikaran"})
// .catch(error => {"srivastava"});


let pro = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Thanks");
        reject("Why?");
    },1000);
});
 
pro
.then(function(v){
    console.log(v);
    
})
.catch(function(c){
    console.log(c);
    
})