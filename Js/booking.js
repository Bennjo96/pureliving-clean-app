document.addEventListener("DOMContentLoaded", function () {
  const packages = document.querySelectorAll(".package");
  packages.forEach((pkg) => {
    pkg.addEventListener("click", function () {
      // Remove active class from all packages
      packages.forEach((p) => p.classList.remove("active"));
      // Add active class to the clicked package
      this.classList.add("active");
    });
  });

  const durationSlider = document.getElementById("duration");
  const durationDisplay = document.getElementById("duration-display");
  durationSlider.addEventListener("input", function () {
    durationDisplay.textContent = this.value + " hours";
  });

  const bookButton = document.querySelector(".book-button");
  bookButton.addEventListener("click", function () {
    const selectedPackage = document.querySelector(".package.active");
    const date = document.getElementById("cleaning-date").value;
    const duration = durationSlider.value;

    if (selectedPackage && date && duration) {
      alert(
        `You have booked a ${selectedPackage.dataset.frequency} cleaning on ${date} for ${duration} hours.`
      );
    } else {
      alert(
        "Please make sure to select a cleaning package, choose a date, and set a duration for your cleaning."
      );
    }
  });
});
