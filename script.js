const header = document.querySelector("[data-header]");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -7%" },
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

contactForm?.addEventListener("submit", (event) => {
  formStatus.textContent = "";

  const fields = [...contactForm.querySelectorAll("input, textarea")];
  let firstInvalid = null;

  fields.forEach((field) => {
    const isValid = field.checkValidity();
    field.closest("label")?.classList.toggle("has-error", !isValid);
    if (!isValid && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid) {
    event.preventDefault();
    formStatus.textContent = "Please complete each field and meet the minimum length requirements.";
    firstInvalid.focus();
    return;
  }

  formStatus.textContent = "Submitting your request…";
});

document.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", () => {
    if (field.checkValidity()) field.closest("label")?.classList.remove("has-error");
  });
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
