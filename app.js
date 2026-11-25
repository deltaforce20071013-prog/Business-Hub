
const translations = {
  uz: {
    welcome: "Business Hub'ga xush kelibsiz!",
    subtitle: "Biznesingizni shu yerdan boshlang.",
    business: "Biznes turlari",
    orders: "Buyurtmalar",
    finance: "Moliyam",
    profile: "Profilim",
    footer: "Business Hub © 2026",
    sections: [
      "Biznes turlarini tanlang va o‘z loyihangizni boshlang.",
      "Buyurtmalaringiz shu yerda ko‘rinadi.",
      "Moliyaviy hisobingiz va balansingiz.",
      "Shaxsiy profilingiz va sozlamalaringiz."
    ]
  },
  en: {
    welcome: "Welcome to Business Hub!",
    subtitle: "Start your business here.",
    business: "Business Types",
    orders: "Orders",
    finance: "My Finance",
    profile: "My Profile",
    footer: "Business Hub © 2026",
    sections: [
      "Choose a business type and start your project.",
      "Your orders will appear here.",
      "Your financial account and balance.",
      "Your personal profile and settings."
    ]
  },
  ru: {
    welcome: "Добро пожаловать в Business Hub!",
    subtitle: "Начните свой бизнес здесь.",
    business: "Виды бизнеса",
    orders: "Заказы",
    finance: "Мои финансы",
    profile: "Мой профиль",
    footer: "Business Hub © 2026",
    sections: [
      "Выберите вид бизнеса и начните свой проект.",
      "Здесь будут отображаться ваши заказы.",
      "Ваш финансовый счёт и баланс.",
      "Ваш профиль и настройки."
    ]
  },
  ko: {
    welcome: "Business Hub에 오신 것을 환영합니다!",
    subtitle: "여기서 사업을 시작하세요.",
    business: "사업 유형",
    orders: "주문",
    finance: "내 금융",
    profile: "내 프로필",
    footer: "Business Hub © 2026",
    sections: [
      "사업 유형을 선택하고 프로젝트를 시작하세요.",
      "주문 내역이 여기에 표시됩니다.",
      "금융 계정과 잔액을 확인하세요.",
      "개인 프로필과 설정입니다."
    ]
  }
};

const languageSelect = document.getElementById("language");

const welcome = document.getElementById("welcome");
const subtitle = document.getElementById("subtitle");
const footer = document.querySelector("footer p");

const buttons = [
  document.getElementById("business"),
  document.getElementById("orders"),
  document.getElementById("finance"),
  document.getElementById("profile")
];

const main = document.querySelector(".main");

const panel = document.createElement("div");
panel.id = "content-panel";
panel.style.cssText = `
  background: white;
  border-radius: 16px;
  padding: 22px;
  margin-top: 22px;
  color: #17233c;
  line-height: 1.6;
  display: none;
  box-shadow: 0 4px 15px rgba(0,0,0,0.04);
`;

main.appendChild(panel);

function changeLanguage(lang) {
  const t = translations[lang] || translations.uz;

  welcome.textContent = t.welcome;
  subtitle.textContent = t.subtitle;
  footer.textContent = t.footer;

  buttons.forEach((button, index) => {
    button.textContent = t[
      ["business", "orders", "finance", "profile"][index]
    ];
  });

  if (panel.dataset.section !== undefined) {
    showSection(Number(panel.dataset.section));
  }

  languageSelect.value = lang;

  try {
    localStorage.setItem("businessHubLanguage", lang);
  } catch (error) {
    console.log("Language preference was not saved.");
  }
}

function showSection(index) {
  const lang = languageSelect.value;
  const t = translations[lang] || translations.uz;

  panel.dataset.section = index;
  panel.textContent = t.sections[index];
  panel.style.display = "block";
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    showSection(index);
  });
});

languageSelect.addEventListener("change", () => {
  changeLanguage(languageSelect.value);
});

let savedLanguage = "uz";

try {
  savedLanguage = localStorage.getItem("businessHubLanguage") || "uz";
} catch (error) {
  savedLanguage = "uz";
}

changeLanguage(savedLanguage);

console.log("Business Hub initialized!");
