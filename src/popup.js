const createPopup = () => {
  const popup = document.createElement("div");
  popup.id = "popup";
  popup.className = "popup";

  popup.innerHTML = `
    <div class="popup-content">
      <button class="close">&times;</button>

      <h3 id="popupTitle">Entraremos em contato</h3>
      <p>Deixe seu contato — nossa equipe retorna em breve.</p>

      <form action="https://formsubmit.co/cotadevolta@gmail.com" method="POST">
        <label>
          Nome
           <input
                type="text"
                name="Nome"
                maxlength="30"
                minlength="3"
                placeholder="Digite apenas letras"
                required
                pattern="[A-Za-zÀ-ÿ\s]+"
                title="Digite apenas letras"
            />
        </label>

        <label>
          Celular
           <input
                type="tel"
                name="Celular"
                maxlength="13"
                minlength="3"
                inputmode="numeric"
                pattern="[0-9]{10,15}"
                placeholder="Digite seu número com DDD. Ex: 11987654321"
                required
                title="Digite apenas números, no mínimo 10 dígitos"
            />
        </label>

        <span>Qual o melhor horário para contato?</span>
        <div class="radio-group">
            <label class="radio">
                Manhã
            <input type="radio" name="Horario" value="Manhã" required />
            </label>
            <label class="radio">
                Tarde
            <input type="radio" name="Horario" value="Tarde" required />
            </label>
            <label class="radio">
                Noite
            <input type="radio" name="Horario" value="Noite" required />
            </label>
        </div>

        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="http://127.0.0.1:5500/index.html?sucesso=true">
        <input type="hidden" name="_subject" value="Novo contato do site">

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