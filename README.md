# quick 11/03/2026

Agents 工具都在这个 herdr 里面使用

第二个是， super  + S， scratchpad

这个是一个独立的 workscape， 在  1，2,3,4,5,6, 都可以快速呼出来


hdl agent agent

hdl c pi

c -> opencode


herdr have 4 pane, main pane is lazyvim, agent panel and buttom panel for terminal


panel switch :alt + ctrl + 上下左右


super + space -> herdr -> learn keybindings

lithe the recent screentshot, the 

alt + ctrl + shift + up/down can resize the pane

super + ctrl + v : shi the clipboard manageer, can quick select the history content

how to screen, the key prtscr, on keyboard

how call quick open file.


we need learn more keybindings from the lazyvim and vim basic tricks

Im keep learning 

space + / , search key workd in all files content powery by grep(a new rust implment, is verfy fast)

 
lazyvim , noramal mode, the key "space" this the leardkey, most keybindgs, trigers, before with this


lazyvim intergrate a nice git controller, it's all lazygit 


space + g + g , trigger this panel, let me show you

current the most code is generate by AI

so we don't need the  IDE, or other complex evnarimonment for devleop9ment


we just need as super basic tool, liek vim qto qucik browse the code for code review

lazigit for quick review the diff

this is all run in termial, is 消耗很低， 可以看很多， and it's als can run in your server machine

this is layzvim operation, the  vim extions more freatures

space + space in lazy vim .

how quick search all file content.


---

## The Astro guide

The quick guide in `src/pages/index.astro` turns these notes (plus the live
`~/.config/herdr/config.toml`) into a single-page site.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

Where things live:

- `src/pages/index.astro` — all page copy and sections
- `src/data/shortcuts.ts` — shortcut groups and CLI commands
- `src/components/Key.astro` — renders `prefix+h`-style bindings as `<kbd>` chips
- `src/components/Command.astro` — copy-to-clipboard command rows
- `src/styles/global.css` — design tokens and layout

Bindings were resolved against Herdr 0.9.1 with
`omarchy-menu-herdr-keybindings --print`; update
`src/data/shortcuts.ts` if the config changes.

