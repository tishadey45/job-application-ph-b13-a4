const interviewButton = document.querySelectorAll(".interview-button");
const rejectedButton = document.querySelectorAll(".rejected-button");

// console.log(interviewButton);
interviewButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    // console.log(event.target);
    // alert("Congratulations! You have been selected for an interview. Please check your email for further details.");
    const jobApply = event.target.closest(".job-apply");
    // console.log({jobApply,event});
    const companyName = jobApply.querySelector(".company-name").textContent;
    const position = jobApply.querySelector(".position").textContent;
    // console.log({companyName,position});
    const location = jobApply.querySelector(".location").textContent;
    // console.log({companyName,location});
    const jobType = jobApply.querySelector(".job-type").textContent;
    // console.log({jobType});
    const salary = jobApply.querySelector(".salary").textContent;
    const description = jobApply.querySelector(".description").textContent;
    // console.log({companyName,position,location,jobType,salary,description});
    // const interviewButton = jobApply.querySelector(".interview-button");
    // interviewButton.disabled = true;
    // const rejectedButton = jobApply.querySelector(".rejected-button");
    // rejectedButton.disabled = true;
    const interview = document.createElement("div");
    interview.className = `card job-apply bg-white p-6 rounded-xl mb-6 shadow-sm`;
    interview.innerHTML = `  <div class="flex justify-between">
                                    <h3 class="company-name text-lg font-semibold">${companyName}</h3>
                                    <i class="fa-regular fa-trash-can"></i>
                                </div>
                                <p class="position text-gray-600">${position}</p>
                                <p class="job-meta text-sm text-gray-500 mt-2">
                                    <span class="location">${location}</span> •
                                    <span class="job-type">${jobType}</span> •
                                    <span class="salary">${salary}</span>
                                </p>
                                <p class="description text-gray-600 mt-4">${description}</p>
                            <div class="flex gap-4 mt-4">
                                    <button class="interview-button px-4 py-2 border border-green-500 text-green-600 rounded-lg" disabled>Interview</button>
                                    <button class="rejected-button px-4 py-2 border border-red-500 text-red-600 rounded-lg" >Rejected</button> 
                            </div>
                                
                                `;
    const interviewTab = document.getElementById("interview-tab");
    // interviewTab.prepend(interview);
  });
});

rejectedButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    // console.log(event.target);
    // alert("We regret to inform you that your application has been rejected. We encourage you to apply for other opportunities in the future.");
    const jobApply = event.target.closest(".job-apply");
    // console.log({jobApply,event});
    const companyName = jobApply.querySelector(".company-name").textContent;
    const position = jobApply.querySelector(".position").textContent;
    // console.log({companyName,position});
    const location = jobApply.querySelector(".location").textContent;
    // console.log({companyName,location});
    const jobType = jobApply.querySelector(".job-type").textContent;
    // console.log({jobType});
    const salary = jobApply.querySelector(".salary").textContent;
    const description = jobApply.querySelector(".description").textContent;
    // console.log({companyName,position,location,jobType,salary,description});
    const rejected = document.createElement("div");
    rejected.className = `card job-apply bg-white p-6 rounded-xl mb-6 shadow-sm`;
    rejected.innerHTML = `  <div class="flex justify-between">
                                    <h3 class="company-name text-lg font-semibold">${companyName}</h3>
                                    <i class="fa-regular fa-trash-can"></i>
                                </div>
                                <p class="position text-gray-600">${position}</p>
                                <p class="job-meta text-sm text-gray-500 mt-2">
                                    <span class="location">${location}</span> •
                                    <span class="job-type">${jobType}</span> •
                                    <span class="salary">${salary}</span>
                                </p>
                                <p class="description text-gray-600 mt-4">${description}</p>
                              <div class="flex gap-4 mt-4">
                                    <button class="interview-button px-4 py-2 border border-green-500 text-green-600 rounded-lg" >Interview</button>
                                    <button class="rejected-button px-4 py-2 border border-red-500 text-red-600 rounded-lg" disabled>Rejected</button> 
                              </div>
                                `;
    const rejectedTab = document.getElementById("rejected-tab");
    // rejectedTab.prepend(rejected);
  });
});
