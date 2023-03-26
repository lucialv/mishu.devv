const socials = [
  {
    name: "Discord",
    url: "https://discord.com/users/997571433280577656",
    icon: "fa-brands fa-discord",
    color: "#5865F2"
  },
  {
    name: "GitHub",
    url: "https://github.com/mishhuu",
    icon: "fa-brands fa-github",
    color: "#f5f5f5"
  },
  {
    name: "E-Mail",
    url: "mailto:adri.alvrzt@gmail.com",
    icon: "fa-solid fa-envelope",
    color: "#4FC3F7"
  }
];
const favourites = [
  "devicon-vscode-plain",
  "devicon-javascript-plain",
  "devicon-typescript-plain",
  "devicon-python-plain",
  "devicon-csharp-plain",
  "devicon-discordjs-plain"
];
const quotes = [
  {
    quote: "When pigs fly I will do it.",
    author: "Some random spanish mother."
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Life is too short to take everything seriously.",
    author: "Anonymous"
  }
];
const github = {
  widget_url: "https://grs.quantumly.dev/api/top-langs/?username=mishhuu&layout=compact&show_icons=true&title_color=4F8CC9&text_color=9f9f9f&bg_color=00000000&hide_border=true&icon_color=00000000&count_private=true"
};
const githuba = {
  stats_url: "https://grs.quantumly.dev/api/?username=mishhuu&show_icons=true&title_color=4F8CC9&text_color=9f9f9f&bg_color=00000000&hide_border=true&icon_color=4F8CC9&hide_title=true&count_private=true"
};
const discord = {
  user: {
    username: "mishu",
    discriminator: "9020"
  },
  info_url: "https://open-api.klonba.xyz/api/discord/user?id=997571433280577656",
  widget_url: "https://discord.com/api/guilds/1047129995161649202/widget.json"
};
const config = {
  socials,
  favourites,
  quotes,
  github,
  githuba,
  discord
};

export { config as default, discord, favourites, github, githuba, quotes, socials };
//# sourceMappingURL=config.b8827bf5.mjs.map
