export interface Shortcut {
  keys: string;
  action: string;
  hint?: string;
}

export interface ShortcutGroup {
  id: string;
  title: string;
  blurb: string;
  items: Shortcut[];
}

// Bindings are taken from the live ~/.config/herdr/config.toml on this machine
// (the Omarchy tmux-style seed config), resolved with
// `omarchy-menu-herdr-keybindings --print`.
export const shortcutGroups: ShortcutGroup[] = [
  {
    id: 'everyday',
    title: 'Everyday',
    blurb: 'The ones you will use all day.',
    items: [
      { keys: 'prefix+?', action: 'Help', hint: 'The full in-app keymap' },
      { keys: 'prefix+d', action: 'Detach', hint: 'Panes and agents keep running' },
      { keys: 'prefix+g', action: 'Goto', hint: 'Jump between workspaces, tabs, panes' },
      { keys: 'prefix+w', action: 'Workspace picker' },
      { keys: 'prefix+b', action: 'Toggle sidebar' },
      { keys: 'prefix+[', action: 'Copy mode', hint: 'Scroll, select, search scrollback' },
      { keys: 'prefix+o', action: 'Open notification target' },
      { keys: 'prefix+q', action: 'Reload config' },
      { keys: 'prefix+s', action: 'Settings' },
    ],
  },
  {
    id: 'panes',
    title: 'Panes',
    blurb: 'Splits, focus, and zoom. No mouse required — but it works too.',
    items: [
      { keys: 'prefix+h / alt+enter', action: 'Split side-by-side' },
      { keys: 'prefix+v / alt+shift+enter', action: 'Split top / bottom' },
      { keys: 'prefix+x / alt+esc', action: 'Close pane' },
      { keys: 'prefix+z', action: 'Zoom / unzoom pane' },
      { keys: 'prefix+tab / prefix+shift+tab', action: 'Cycle panes' },
      { keys: 'prefix+;', action: 'Last pane' },
      { keys: 'ctrl+alt+left', action: 'Focus pane left' },
      { keys: 'ctrl+alt+down', action: 'Focus pane down' },
      { keys: 'ctrl+alt+up', action: 'Focus pane up' },
      { keys: 'ctrl+alt+right', action: 'Focus pane right' },
      { keys: 'ctrl+alt+shift+left', action: 'Resize pane left' },
      { keys: 'ctrl+alt+shift+down', action: 'Resize pane down' },
      { keys: 'ctrl+alt+shift+up', action: 'Resize pane up' },
      { keys: 'ctrl+alt+shift+right', action: 'Resize pane right' },
      { keys: 'prefix+ctrl+left', action: 'Resize mode', hint: 'Then use any arrow key' },
      { keys: 'prefix+shift+o', action: 'Rename pane' },
      { keys: 'prefix+e', action: 'Edit scrollback in $EDITOR' },
    ],
  },
  {
    id: 'tabs',
    title: 'Tabs',
    blurb: 'A tab is a task. One repo can hold several.',
    items: [
      { keys: 'prefix+c', action: 'New tab' },
      { keys: 'prefix+r', action: 'Rename tab' },
      { keys: 'prefix+k', action: 'Close tab' },
      { keys: 'prefix+1..9 / alt+1..9', action: 'Switch to tab 1–9' },
      { keys: 'prefix+p / alt+left', action: 'Previous tab' },
      { keys: 'prefix+n / alt+right', action: 'Next tab' },
      { keys: 'alt+shift+left', action: 'Move tab toward the front' },
      { keys: 'alt+shift+right', action: 'Move tab toward the back' },
    ],
  },
  {
    id: 'workspaces',
    title: 'Workspaces & worktrees',
    blurb: 'A workspace is a project. Each one can own a git worktree.',
    items: [
      { keys: 'prefix+shift+c', action: 'New workspace' },
      { keys: 'prefix+shift+r', action: 'Rename workspace' },
      { keys: 'prefix+shift+k', action: 'Close workspace' },
      { keys: 'prefix+shift+p / alt+up', action: 'Previous workspace' },
      { keys: 'prefix+shift+n / alt+down', action: 'Next workspace' },
      { keys: 'prefix+shift+g', action: 'New git worktree' },
    ],
  },
];

export interface CliCommand {
  cmd: string;
  note: string;
}

export interface CliGroup {
  id: string;
  title: string;
  icon: string;
  items: CliCommand[];
}

export const cliGroups: CliGroup[] = [
  {
    id: 'session',
    title: 'Sessions & status',
    icon: '>_',
    items: [
      { cmd: 'h', note: 'Omarchy alias for herdr — launch or attach' },
      { cmd: 'herdr status', note: 'Client, server, protocol, update state' },
      { cmd: 'herdr --session work', note: 'Use a separate named session' },
      { cmd: 'herdr session list', note: 'Every session on this machine' },
      { cmd: 'herdr update', note: 'Download and install the latest build' },
    ],
  },
  {
    id: 'inspect',
    title: 'Inspect & drive',
    icon: '{}',
    items: [
      { cmd: 'herdr workspace list', note: 'Workspaces as JSON' },
      { cmd: 'herdr tab list --workspace w1', note: 'Tabs in one workspace' },
      { cmd: 'herdr pane list --workspace w1', note: 'Panes, IDs, and focus' },
      { cmd: 'herdr pane split --current --direction right --cwd "$PWD"', note: 'Split the calling pane' },
      { cmd: 'herdr pane run w1:p2 "just test"', note: 'Type a command and press Enter' },
      { cmd: 'herdr pane wait-output w1:p2 --match "passed" --timeout 120000', note: 'Wait for output, then read it' },
    ],
  },
  {
    id: 'agents',
    title: 'Agents',
    icon: '✦',
    items: [
      { cmd: 'herdr agent list', note: 'Live agents and their states' },
      { cmd: 'herdr agent get opencode', note: 'Pane, state, title, session' },
      { cmd: 'herdr agent prompt opencode "review the diff" --wait', note: 'Submit and wait for idle/done/blocked' },
      { cmd: 'herdr agent read opencode --source recent-unwrapped --lines 80', note: 'Read the transcript' },
      { cmd: 'herdr agent send-keys opencode esc', note: 'Logical keys into the agent UI' },
      { cmd: 'herdr agent start reviewer --kind codex --pane w1:p2', note: 'Start an agent in an idle shell pane' },
    ],
  },
  {
    id: 'worktrees',
    title: 'Worktrees & machines',
    icon: '⑂',
    items: [
      { cmd: 'herdr worktree create --branch feat/login', note: 'New checkout, new workspace' },
      { cmd: 'herdr worktree list', note: 'Checkouts for the current repo' },
      { cmd: 'herdr machine add vps --label vps', note: 'Prepare and save an SSH machine' },
      { cmd: 'herdr --machine vps agent list', note: 'Run the same API remotely' },
      { cmd: 'herdr --remote root@vps', note: 'Attach to a remote server' },
    ],
  },
];
