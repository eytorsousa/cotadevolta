const detailsList = document.querySelectorAll(".questions details");

detailsList.forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      detailsList.forEach((other) => {
        if (other !== detail) {
          other.removeAttribute("open");
        }
      });
    }
  });
});