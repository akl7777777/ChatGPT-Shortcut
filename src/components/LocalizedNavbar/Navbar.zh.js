const zhNavbar = {
  hideOnScroll: true,
  title: "ChatGPT & ShellGPT",
  logo: {
    alt: "ChatGPT Shortcuts",
    src: "img/ChatGPT_logo.svg",
  },
  items: [
    /*{
      to: "https://newzone.top/posts/2023-02-27-chatgpt_shortcuts.html",
      label: "ChatGPT Shortcut 原理说明",
      position: "left",
    },
    {
      type: 'dropdown',
      label: '其他工具',
      position: 'left',
      items: [
        {
          label: 'IMGPrompt',
          href: 'https://prompt.newzone.top/',
        },
        {
          label: '文字处理',
          href: 'https://tools.newzone.top/',
        },
        {
          label: '工具收藏',
          href: 'https://nav.newzone.top',
        },
        {
          label: 'Find on Product Hunt',
          href: 'https://www.producthunt.com/posts/chatgpt-shortcut?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chatgpt&#0045;shortcut',
        },
      ],
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

module.exports = zhNavbar;
