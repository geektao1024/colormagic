export default defineNuxtPlugin(() => {
  // 动态加载 Plausible 脚本
  const script = document.createElement('script');
  script.defer = true;
  script.dataset.domain = 'colormagic.club';
  script.src = 'https://plausible.io/js/script.outbound-links.js';
  document.head.appendChild(script);
});
