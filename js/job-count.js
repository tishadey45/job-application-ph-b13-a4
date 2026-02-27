document.addEventListener("DOMContentLoaded", function () {
    const interviewCountDisplay = document.getElementById("interview-count");
    const rejectedCountDisplay = document.getElementById("rejected-count");

    const interviewContainer = document.getElementById("interview-tab");
    const rejectedContainer = document.getElementById("rejected-tab");

    function updateStatusbarUI() {
        if (interviewCountDisplay && interviewContainer) {
            const count = interviewContainer.querySelectorAll(".job-apply").length;
            interviewCountDisplay.textContent = count;
        }

        if (rejectedCountDisplay && rejectedContainer) {
            const count = rejectedContainer.querySelectorAll(".job-apply").length;
            rejectedCountDisplay.textContent = count;
        }
    }

    document.addEventListener('countUpdated', function() {
        updateStatusbarUI();
    });

    updateStatusbarUI();
});