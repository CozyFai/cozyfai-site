document.querySelector("form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const email = document.querySelector("input[type='email']").value;

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
      window.location.href = "/thank-you.html";
    } else {
      alert("Something went wrong. Please try again.");
    }

  } catch (error) {
    alert("Server error. Please try again.");
  }
});
