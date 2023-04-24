const enNavbar = {
  hideOnScroll: true,
  title: "ChatGPT & ShellGPT",
  logo: {
    alt: "ChatGPT Shortcuts",
    src: "img/ChatGPT_logo.svg",
  },
  items: [
    /*{
      href: 'https://www.producthunt.com/posts/chatgpt-shortcut?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chatgpt&#0045;shortcut',
      label: 'Find on Product Hunt',
      target: '_blank',
      position: 'left',
    },*/
    { type: "localeDropdown", position: "right" },
    {
      href: "https://github.com/akl7777777/free-chatgpt-client-pub",
      position: "right",
      className: "header-github-link",
    },
    /*{
      href: "https://discord.gg/PZTQfJ4GjX",
      position: "right",
      className: "header-discord-link",
    },*/
  ],
};

module.exports = enNavbar;
