
# 🌿 Cota de Volta

> Plataforma comercial de análise de extratos de consórcio e recuperação de valores.

---

## 📌 Sobre o Projeto

A **Cota de Volta** é uma empresa especializada em **análise técnica de extratos de consórcio**, atuando em todo o Brasil. O site tem finalidade comercial e funciona como principal canal de captação de clientes, apresentando os serviços, gerando contatos qualificados via formulário e WhatsApp, e transmitindo credibilidade e profissionalismo à marca.

### O que a empresa faz?

- Analisa extratos de consórcios ativos ou cancelados
- Identifica cobranças indevidas, descontos abusivos e valores a recuperar
- Orienta clientes sobre medidas administrativas ou judiciais
- Indica advogados especializados quando necessário

---

## 📬 Contato - COTA DE VOLTA

| Canal | Link |
|---|---|
| WhatsApp | [wa.me/5511991614791](https://wa.me/5511991614791) |
| Instagram | [@cotadevolta](https://www.instagram.com/cotadevolta/) |
| Facebook | [Cota de Volta](https://www.facebook.com/profile.php?id=61588958471957) |

---

## 🌐 Deploy

O projeto está em produção e acessível publicamente via **Netlify**.

| Ambiente | URL |
|---|---|
| Produção | [cotadevolta.netlify.app](https://cotadevolta.netlify.app) |
| Repositório | [github.com/eytorlima/cotadevolta](https://github.com/eytorlima/cotadevolta) |

---

## 🛠️ Tecnologias Utilizadas

### Core
| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica das páginas |
| **CSS3** | Estilização modular por seção, responsividade com media queries |
| **JavaScript (ES6+)** | Interatividade, animações, envio de formulário via fetch API |

### Bibliotecas Externas
| Biblioteca | Versão | Uso |
|---|---|---|
| [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) | 2.3.4 | Animações de entrada dos elementos ao rolar a página |
| [Splide.js](https://splidejs.com/) | Latest | Carrossel automático das empresas parceiras |
| [Splide Auto Scroll Extension](https://splidejs.com/extensions/auto-scroll/) | Latest | Extensão de scroll automático e contínuo do carrossel |

### Serviços de Terceiros
| Serviço | Uso |
|---|---|
| [Web3Forms](https://web3forms.com/) | Envio do formulário de contato via API REST |
| [hCaptcha (via Web3Forms)](https://www.hcaptcha.com/) | Proteção anti-spam no formulário de contato |
| [Google Fonts](https://fonts.google.com/) | Fonte **Poppins** utilizada em todo o projeto |
| [WhatsApp API](https://wa.me/) | Link direto para atendimento via WhatsApp |
| [Netlifyl](https://netlify.com/) | Hospedagem e deploy contínuo via GitHub |

---

## 📁 Estrutura do Projeto

```
cotadevolta/
├── assets/
│   ├── icons/          # Ícones utilizados no site (SVG/PNG)
│   └── images/         # Imagens, logo e logos de empresas parceiras
├── src/
│   ├── index.js        # Scroll do header fixo e main_header dinâmico
│   ├── popup.js        # Criação, controle e envio do formulário popup
│   ├── progressbar.js  # Animação da barra de progresso via IntersectionObserver
│   ├── splide.js       # Inicialização e configuração do carrossel
│   ├── summary.js      # Accordion do FAQ (fecha outros ao abrir um)
│   └── aos.js          # Inicialização do AOS com configurações globais
├── styles/
│   ├── general.css         # Reset, variáveis CSS globais e estilos base
│   ├── extra.css           # Botão flutuante de WhatsApp e botão "Fale conosco"
│   ├── header.css          # Header fixo superior e main_header dinâmico
│   ├── main.css            # Seção hero principal
│   ├── whoweare.css        # Seção "Quem Somos"
│   ├── howitworks.css      # Seção "Como Funciona" com progressbar
│   ├── faq.css             # Seção FAQ com accordion animado
│   ├── enterprises.css     # Seção de empresas com carrossel Splide
│   ├── feedbacks.css       # Seção de depoimentos
│   ├── contact.css         # Seção de contato
│   ├── footer.css          # Rodapé
│   └── talkwithus_popup.css # Popup de formulário de contato
└── index.html              # Página principal
```

---

## 👨‍💻 Desenvolvimento

Quer sua marca exibida em uma landing page como essa ou em um site mais complexo? Entre em contato.


Desenvolvido por **[Eytor Lima](https://github.com/eytorlima)**.

---

*© 2026 Cota de Volta. Todos os direitos reservados.*
