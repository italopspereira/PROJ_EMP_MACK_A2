document.getElementById("lead-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        interest: formData.get("interest")
    };

    fetch("https://your-backend-endpoint/api/leads", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("result-message").textContent = "Dados enviados com sucesso!";
            event.target.reset();
        } else {
            throw new Error("Erro ao enviar os dados.");
        }
    })
    .catch(error => {
        document.getElementById("result-message").textContent = "Ocorreu um erro, tente novamente.";
    });
});
