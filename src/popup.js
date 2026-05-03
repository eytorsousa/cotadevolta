const createPopup = () => {
  const popup = document.createElement("div");
  popup.id = "popup";
  popup.className = "popup";

  popup.innerHTML = `
    <div class="popup-content">
      <button class="close">&times;</button>

      <h3 id="popupTitle">Entraremos em contato</h3>

      <form>
        <label>
          Nome
          <input type="text" required>
        </label>

        <label>
          Telefone
          <input type="tel" required>
        </label>

        <label>
          Melhor horário para contato
          <input type="text" placeholder="Ex: manhã, tarde..." required>
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  `;

  document.body.appendChild(popup);
};

createPopup();


const popup = document.getElementById("popup");
const buttons = document.querySelectorAll(".openPopup");


buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;
    const title = document.getElementById("popupTitle");

    if (type === "extrato") {
      title.textContent = "Analisar extrato";
    } else {
      title.textContent = "Recuperar valores";
    }

    popup.classList.add("active");
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("close") || e.target.id === "popup") {
    popup.classList.remove("active");
  }
});