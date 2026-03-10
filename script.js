document.querySelector("form").addEventListener("submit", async function(e) {
  e.preventDefault();

  // .trim() elimina espacios accidentales al inicio o final
  const emailInput = document.querySelector("input[type='email']");
  const email = emailInput.value.trim();

  // Deshabilitar el botón para evitar múltiples clics
  const btn = e.target.querySelector("button");
  btn.disabled = true;
  btn.innerText = "Sending...";

  try {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    if (data.success) {
      window.location.replace("/thank-you.html?from=landing");
    } else {
      alert("Something went wrong. Please try again.");
      btn.disabled = false;
      btn.innerText = "GET IT FREE";
    }

  } catch (error) {
    alert("Server error. Please try again.");
    btn.disabled = false;
    btn.innerText = "GET IT FREE";
  }
});
