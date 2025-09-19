<script>
  document.querySelectorAll(".lesson-btn").forEach(button => {
    button.addEventListener("click", () => {
      const weeks = button.nextElementSibling;
      weeks.style.display = weeks.style.display === "block" ? "none" : "block";
    });
  });
</script>
