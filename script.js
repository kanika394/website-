<script>
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    item.classList.toggle("active");

    const icon = button.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});
</script>

