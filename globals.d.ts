declare module 'bundle-text:*.css' {
  const content: string;
  export default content;
}

declare module '*.module.css' {
  const content: { [className: string]: string };
  export default content;
}