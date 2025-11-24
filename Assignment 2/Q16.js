function Placeorder(callback){
    setTimeout(()=> {
        console.log("Order placed");
        callback();
    }, 1000);
}
function cookFood(callback){
    setTimeout(()=> {
        console.log("Food Cooking");
        callback();
    }, 2000);
}
function deliverFood(){
    setTimeout(()=> {
        console.log("Food delivered");
    }, 1500);
}
Placeorder(()=> {
    cookFood(()=> {
        deliverFood();
    });
});