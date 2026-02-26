const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const interviewBtn = document.querySelectorAll(".interview-button");
const rejectedBtn = document.querySelectorAll(".rejected-button");

let interviewTotal = 0;
let rejectedTotal = 0;
interviewBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    // alert(
    //   "Congratulations! You have been selected for an interview. Please check your email for further details.",
    // );
    let interviewTotal = parseInt(interviewCount.textContent);
    // console.log(interviewTotal);
    interviewTotal++;
    interviewCount.textContent = interviewTotal;
    // interviewTotal++;
    // console.log(interviewTotal);

  });

});
rejectedBtn.forEach((button)=>{
   button.addEventListener("click",(event)=>{
    // alert(
    //   "We regret to inform you that your application has been rejected. We encourage you to apply for other opportunities in the future.",
    // );
     let rejectedTotal = parseInt(rejectedCount.textContent);
     rejectedTotal++;
     rejectedCount.textContent = rejectedTotal;
     
  }) 
})
