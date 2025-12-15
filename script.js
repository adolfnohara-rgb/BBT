function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  addMessage(message, "user");
  input.value = "";

  setTimeout(() => {
    const reply = getBotReply(message);
    addMessage(reply, "bot");
  }, 500);
}

window.onload = () => {
  addMessage("Hello 👋 I'm your AI Assistant. Ask me about HTML, CSS, or JavaScript!", "bot");
};

function addMessage(text, sender) {
  const chatBox = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.className = `msg ${sender}`;
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("user-input").addEventListener("keydown",function(e){
  if(e.key === "Enter"){
    sendMessage();
  }
})

function getBotReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi"))
    return "Hello! 😊 How can I help you?";

  if (msg.includes("html"))
    return "HTML is used to create the structure of web pages.";

  if (msg.includes("css"))
    return "CSS is used to style websites.";

  if (msg.includes("javascript"))
    return "JavaScript makes websites interactive.";

  if (msg.includes("your name"))
    return "I'm your beginner AI Assistant 🤖";

  return "Sorry, I don't understand yet. I'm still learning 🙂";
}

