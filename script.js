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
  event.preventDefault();
  formStatus.textContent = "";

  const fields = [...contactForm.querySelectorAll("input, textarea")];
  let firstInvalid = null;

  fields.forEach((field) => {
    const isValid = field.checkValidity();
    field.closest("label")?.classList.toggle("has-error", !isValid);
    if (!isValid && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid) {
    formStatus.textContent = "Please complete each field with a valid email address.";
    firstInvalid.focus();
    return;
  }

  const data = new FormData(contactForm);
  const subject = encodeURIComponent(`Leatra enquiry from ${data.get("name")}`);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nOrganisation: ${data.get("organisation")}\n\nHow we can help:\n${data.get("message")}`,
  );

  formStatus.textContent = "Your email application will open with the request ready to review.";
  window.location.href = `mailto:info@leatra.com?subject=${subject}&body=${body}`;
});

document.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", () => {
    if (field.checkValidity()) field.closest("label")?.classList.remove("has-error");
  });
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
