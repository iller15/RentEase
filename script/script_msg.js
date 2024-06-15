document.addEventListener("DOMContentLoaded", () => {
    const sendButton = document.getElementById("send-button");
    const messageInput = document.getElementById("message-input");
    const chatBox = document.getElementById("chat-box");

    const agentResponses = [
        "Gracias por tu mensaje. Estamos procesando tu solicitud.",
        "¿Podrías proporcionar más detalles sobre tu consulta?",
        "Nuestro agente se pondrá en contacto contigo en breve.",
        "Estamos aquí para ayudarte con cualquier pregunta que tengas.",
        "Tu solicitud ha sido recibida. Gracias por contactarnos.",
        "¿Hay algo más en lo que podamos asistirte?",
        "Estamos revisando tu mensaje y te responderemos pronto.",
        "Gracias por tu paciencia. Un momento por favor.",
        "Tu mensaje es importante para nosotros. Gracias por esperar.",
        "Nos pondremos en contacto contigo lo antes posible."
    ];

	const msgBacktoMain = document.getElementById('msgBacktoMain');
	
	
    sendButton.addEventListener("click", () => {
        sendMessage();
    });

    messageInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

	msgBacktoMain.addEventListener('click', () => {
    window.location.href = 'index.html'; // Change this to your desired URL
});
	
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            // Create a new message element
            const messageElement = document.createElement("div");
            messageElement.classList.add("message", "user-message");
            messageElement.textContent = messageText;

            // Append the message to the chat box
            chatBox.appendChild(messageElement);

            // Clear the input field
            messageInput.value = "";

            // Scroll to the bottom of the chat box
            chatBox.scrollTop = chatBox.scrollHeight;

            // Simulate a response from the agent after a short delay
            setTimeout(() => {
                const randomResponse = agentResponses[Math.floor(Math.random() * agentResponses.length)];
                const agentResponse = document.createElement("div");
                agentResponse.classList.add("message", "agent-message");
                agentResponse.textContent = randomResponse;
                chatBox.appendChild(agentResponse);
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 1000);
        }
    }
});