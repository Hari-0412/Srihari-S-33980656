function startExam(callback) {
    setTimeout(()=> {
        console.log("Exam Started");
        callback();
    },2000);
}
function evaluateExam(callback) {
    setTimeout(()=> {
        console.log("Evaluating Answers");
        callback();
   },2000);
}
function declareResult() {
    setTimeout(()=> {
        console.log("Result Declared");
        
    },2000);
}
startExam(()=>{
    evaluateExam(()=>{
        declareResult();

    });
});