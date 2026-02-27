window.updateCount = function () {
  const allContainer = document.getElementById("card-body");
  const interviewContainer = document.getElementById("interview-tab");
  const rejectedContainer = document.getElementById("rejected-tab");

  const tabTitle = document.getElementById("tab-title");
  const jobCount = document.getElementById("job-count");

  // Dynamic Calculation
  const allLeft = allContainer?.querySelectorAll(".job-apply").length || 8;
  const interviewCount =
    interviewContainer?.querySelectorAll(".job-apply").length || 0;
  const rejectedCount =
    rejectedContainer?.querySelectorAll(".job-apply").length || 0;

  // --- Empty State Logic Start ---
  const emptyStateHTML = `
        <div class="empty-state tab-content border-base-300 bg-base-100 flex flex-col items-center text-center justify-center p-20 w-full">
            <img src="./jobs.png" alt="No Jobs" class="mb-4">
            <h3 class="text-xl font-bold">No jobs available</h3>
            <p>Check back soon for new job opportunities</p>
        </div>
    `;

  const handleEmptyState = (container, count) => {
    if (!container) return;
    const existingEmpty = container.querySelector(".empty-state");

    if (count === 0) {
      if (!existingEmpty) {
        container.innerHTML = emptyStateHTML;
      }
    } else {
      if (existingEmpty) {
        existingEmpty.remove();
      }
    }
  };

  handleEmptyState(allContainer, allLeft);
  handleEmptyState(interviewContainer, interviewCount);
  handleEmptyState(rejectedContainer, rejectedCount);
  // --- Empty State Logic End ---

  // Dynamic Tab Title and Count

  const activeTab = document
    .querySelector('input[name="my_tabs_6"]:checked')
    ?.getAttribute("aria-label");

  if (!activeTab) return;

  if (activeTab === "All") {
    jobCount.textContent = allLeft;
    tabTitle.textContent = "Available Jobs";
  } else if (activeTab === "Interview") {
    jobCount.textContent = interviewCount;
    tabTitle.textContent = "Interview Jobs";
  } else if (activeTab === "Rejected") {
    jobCount.textContent = rejectedCount;
    tabTitle.textContent = "Rejected Jobs";
  }

  const event = new CustomEvent("countUpdated");
  document.dispatchEvent(event);
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('input[name="my_tabs_6"]').forEach((tab) => {
    tab.addEventListener("change", window.updateCount);
  });

  document.addEventListener("click", function (event) {
    const card = event.target.closest(".job-apply");
    if (!card) return;

    if (event.target.classList.contains("interview-button")) {
      document.getElementById("interview-tab").prepend(card);
      window.updateCount();
    }

    if (event.target.classList.contains("rejected-button")) {
      document.getElementById("rejected-tab").prepend(card);
      window.updateCount();
    }
  });

  window.updateCount();
});

if (interviewContainer?.querySelectorAll(".job-apply").length === 0) {
  const emptyContainer = document.createElement("div");
  emptyContainer.className =
    "tab-content border-base-300 bg-base-100 flex flex-col items-center text-center justify-center p-30";
  emptyContainer.innerHTML = `
                        <img src="./jobs.png" alt="order-base-300 bg-base-100 flex flex-col items-center text-center justify-center p-30">
                        <img src="./jobs.png" alt="">
                        <h3 class="">No jobs available</h3>
                        <p>Check back soon for new job opportunities</p>
    `;
  interviewContainer.appendChild(emptyContainer);
}
