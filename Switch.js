let Savings = 9999;

switch (true){
    case Savings >= 10000 && Savings <=59999:
        console.log("Amazing..! You can buy an Android Mobile")
        break;
    case Savings >= 60000:
        console.log("WOW..!! You can Buy Apple IPhone")
        break;
    case Savings > 5000 && Savings <= 10000:
        console.log("You can buy Basic modal mobile")
        break;
    default:
        console.log("Better luck next time. You can't afford mobile now.")

}