const createPopup = () => {
  const popup = document.createElement("div");
  popup.id = "popup";
  popup.className = "popup";

  popup.innerHTML = `
    <div class="popup-content">
      <button class="close">&times;</button>

      <h3 id="popupTitle">Entraremos em contato</h3>
      <p>Deixe seu contato — nossa equipe retorna em breve.</p>

      <form id="contactForm">
        <label>
          Nome
           <input
                type="text"
                name="Nome"
                maxlength="30"
                minlength="3"
                placeholder="Digite apenas letras"
                required
                pattern="[A-Za-zÀ-ÿ ]+"
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

        <div class="h-captcha" data-captcha="true"></div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  `;

  document.body.appendChild(popup);

  const form = document.getElementById("contactForm");
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "965e3b80-5f04-42d5-80a4-6316a4ac73bf");

    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Enviando...";
    submitBtn.disabled = true;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        showSuccessPopup();
        form.reset();
      } else {
        alert("Erro: " + data.message);
      }
    } catch (error) {
      alert("Algo deu errado. Tente novamente.");
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });

};

createPopup();


const popup = document.getElementById("popup");
const buttons = document.querySelectorAll(".openPopup");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;
    const title = document.getElementById("popupTitle");

    title.textContent = "Analisar extrato";
    popup.classList.add("active");
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("close") || e.target.id === "popup") {
    popup.classList.remove("active");
  }
});

const checkSuccess = () => {
  const params = new URLSearchParams(window.location.search);

  if (params.get("sucesso") === "true") {
    showSuccessPopup();
    window.history.replaceState({}, document.title, window.location.pathname);
  }
};

const showSuccessPopup = () => {
  const title = document.getElementById("popupTitle");
  const form = popup.querySelector("form");
  const description = popup.querySelector("p");

  title.textContent = "Mensagem enviada com sucesso!";
  description.innerHTML = `<p><br>Recebemos seus dados. <br> Em breve entraremos em contato.</p>`;

  form.innerHTML = `<button class="close"></button>`;

  popup.classList.add("active");
};

checkSuccess();
