

## 2. 启动与工作区

| 操作 | 快捷键 / 命令 | 说明 |
| --- | --- | --- |
| 启动或附着 Herdr | `Super + Ctrl + Enter` | 打开已有的 Herdr 会话 |
| 呼出 scratchpad | `Super + S` | 独立的 workspace，在任意工作区（1–6）都能快速呼出 |
| 分离会话 | `prefix + d` | 关闭窗口不等于退出，pane 与 agent 会继续运行 |
| 查看帮助 | `prefix + ?` | 打开应用内完整键位表 |
| 学习键位 | `Super + Space` → Herdr → Learn keybindings | 从启动器进入键位学习入口 |

Herdr 使用 **prefix（前缀键）** 机制：先按下并松开 `Ctrl + Space`，再按下一个键。

## 3. hdl：一键生成四窗格布局

在 Herdr 的 shell pane 中进入项目目录后运行：

```bash
cd ~/Projects/my-app
hdl c pi
```

`hdl` 会以当前 pane 为基础，把标签页重命名为当前目录名，并切出四个区域：

- **主 pane**：LazyVim，用于浏览和审阅代码。
- **两个 agent pane**：上下堆叠在右侧。
- **底部 pane**：终端。

参数就是要在 pane 中启动的命令：

- `c` → `opencode`
- `pi` → Pi
- 例：`hdl c`、`hdl c pi`

> <D-u><D-i><D-u><D-h>`hdl` 依赖 Herdr 环境变量 `$HERDR_PANE_ID`，需要在 Herdr 的 pane 内执行。

## 4. 窗格（pane）操作

### 切换与调整

| 操作 | 快捷键 |
| --- | --- |
| 切换 pane | `Ctrl + Alt + 上 / 下 / 左 / 右` |
| 调整 pane 大小 | `Ctrl + Alt + Shift + 上 / 下 / 左 / 右` |
| 左右分屏 | `prefix + h` |
| 上下分屏 | `prefix + v` |
| 关闭 pane | `prefix + x` |
| 缩放 / 还原 pane | `prefix + z` |
| 在 pane 之间循环 | `prefix + Tab` / `prefix + Shift + Tab` |
| 跳转到指定位置 | `prefix + g` |

## 5. 剪贴板与截图

| 操作 | 快捷键 | 说明 |
| --- | --- | --- |
| 剪贴板历史 | `Super + Ctrl + V` | 快速选择历史复制内容，适合取用 agent 输出 |
| 截图 | `Print Screen` 键 | 系统级截图 |

## 6. LazyVim 常用操作

LazyVim 使用 `Space` 作为 **leader key（引导键）**，大多数功能都先按 `Space` 再跟后续按键。

| 操作 | 快捷键 | 说明 |
| --- | --- | --- |
| 快速打开文件 | `Space` `Space` | 在项目中查找并打开文件 |
| 全局内容搜索 | `Space` `/` | 在所有文件内容中搜索，底层使用 grep（Rust 实现，速度很快） |
| 打开 Lazygit | `Space` `g` `g` | 集成式 Git 面板，用于查看和审阅 diff |

补充建议：

- 继续熟悉 Vim 基础操作，以及 LazyVim 的更多键位。
- 正常模式下，`Space` 是绝大多数快捷键的起点。

## 7. 关于本项目的 Astro 站点

README 中的笔记也被整理成了一个单页站点，入口在 `src/pages/index.astro`。

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 静态输出到 dist/
npm run preview
```

相关文件：

- `src/pages/index.astro` — 页面文案与分区
- `src/data/shortcuts.ts` — 快捷键分组与 CLI 命令
- `src/components/Key.astro` — 将 `prefix+h` 这类按键渲染为 `<kbd>` 标签
- `src/components/Command.astro` — 可复制到剪贴板的命令行
- `src/styles/global.css` — 设计变量与布局

键位基于 Herdr 0.9.1，通过 `omarchy-menu-herdr-keybindings --print` 解析得到；配置变更后请同步更新 `src/data/shortcuts.ts`。

LazyVim how to use makerdown viewer?

