const faqs = document.querySelectorAll(".question-wrapper");

faqs.forEach((faq) => {
  faq.addEventListener("click", toggleAccordion);
});

function toggleAccordion() {
  const faqToggle = this.getAttribute("aria-expanded");
  const iconPlus = this.querySelector(".icon-plus");
  const iconMinus = this.querySelector(".icon-minus");

  for (const faq of faqs) {
    faq.setAttribute("aria-expanded", false);
    faq.querySelector(".icon-plus").classList.remove("hide");
    faq.querySelector(".icon-minus").classList.add("hide");
  }

  if (faqToggle === "false") {
    this.setAttribute("aria-expanded", true);
    iconPlus.classList.add("hide");
    iconMinus.classList.remove("hide");
  }
}
