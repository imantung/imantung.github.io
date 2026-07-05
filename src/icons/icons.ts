export const icons = {
  sun: `<path d="M12 4V2M12 22v-2M4.93 4.93 3.51 3.51M20.49 20.49l-1.42-1.42M4 12H2m20 0h-2M4.93 19.07l-1.42 1.42M20.49 3.51l-1.42 1.42M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  moon: `<path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  linkedin: `<path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.32 8.75h3.24V21H3.32V8.75Zm6.2 0h3.1v1.68h.05c.43-.82 1.5-1.68 3.08-1.68 3.29 0 3.9 2.17 3.9 4.99V21h-3.24v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9.52V8.75Z" fill="currentColor"/>`,
  medium: `<path d="M4 6.2c0-.3-.1-.6-.34-.8L1.3 2.4V2h7.1l5.5 12.1L18.8 2h6.8v.4l-2.06 2c-.18.14-.27.37-.24.6v14.9c-.03.23.06.46.24.6l2.01 2v.4h-10.1v-.4l2.08-2.02c.2-.2.2-.27.2-.6V7.9l-5.79 14.7h-.78L9.1 7.9v9.86c-.06.44.09.88.4 1.2l2.7 3.28v.4H4.5v-.4l2.7-3.28c.31-.32.45-.76.4-1.2V6.2Z" fill="currentColor"/>`,
  github: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" fill="currentColor"/>`,
  mail: `<path d="M3 5.5h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="m3 6 9 7 9-7" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  school: `<path d="M12 3 2 8l10 5 10-5-10-5Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="none"/><path d="M6 10.5V16c0 1.1 2.69 2.5 6 2.5s6-1.4 6-2.5v-5.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  menu: `<path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
  close: `<path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
} as const;

export type IconName = keyof typeof icons;
