let Totalseats = 120;
let Bookedseats = 78;
let Availableseats = Totalseats - Bookedseats;
let Status = "";
if(Availableseats < 20){
    Status = "Almost Full";
}
else if(Availableseats >= 20 && Availableseats <= 60){
    Status = "Moderate Available";
}
else {
    Status = "plenty of Seats Available";
}
console.log("AvailableSeats is: ",Availableseats);
console.log("Status is: ",Status);


