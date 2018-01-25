console.log("Node.js is running....");

function queryDatafromDB(callback){
    setTimeout(function(){
        var result = "Finished query.";
        callback(result);
    },2000);
}

function main(){
    queryDatafromDB(function(r){
        console.log("result:"+r);
    });
    //console.log("Display result:"+queryDatafromDB());
}

main();


/*setTimeout(function(){
    console.log("Hello world");
},2000);

console.log("hello."); */

/* === exp ====*/

/*setInterval(function(){
    console.log("Fetching data from www.google.com");
},2000);

setInterval(function(){
    console.log("Fetching data from www.kabook.com");
},4000);

*/