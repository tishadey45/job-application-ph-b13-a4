// delete card
const deleteCard = document.querySelectorAll(".fa-trash-can");
deleteCard.forEach((button) => {
  button.addEventListener("click", (event) => {
    const card = event.target.closest(".job-apply");
    if (card) {
      card.remove();
    } else {
      console.error("Card element not found for deletion.");
    }
    window.updateCount();
  });
});
