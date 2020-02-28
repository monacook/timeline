let now = moment().format("L");
// console.log(now.format(now));

const populateDefault = date => {   
    let month = date[0] + date[1];    
    let day = date[3] + date[4];
    let year = date[6] + date[7] + date[8] + date[9];

    document.getElementById('monthSelector').value = month;
    document.getElementById('daySelector').value = day;
    document.getElementById('yearInput').value = year;
}

populateDefault(now);
console.log(now); // todays date

let end = now;
console.log("end " + end); 
// console.log("end " + end); 

const differenceDate = () => {
    let dateDiff = moment(end).diff(now, 'days'); 
    console.log(dateDiff);
    document.getElementById("dateDifference").innerHTML = end + " is " + dateDiff + " days from now.";
}

differenceDate();

const endDateListener = () => {
    end = document.getElementById('monthSelector').value + "/" + document.getElementById('daySelector').value + "/" + document.getElementById('yearInput').value;
    // console.log("Current end date is " + end);
//     console.log("Current end date is " + end);
    differenceDate();

}

document.getElementById("monthSelector").addEventListener("change", endDateListener);
document.getElementById("daySelector").addEventListener("change", endDateListener);
document.getElementById("yearInput").addEventListener("change", endDateListener);







