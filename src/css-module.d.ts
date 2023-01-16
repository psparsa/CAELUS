declare module "*.module.css" {
  declare const cssModule: { [x: string]: string };
  export = cssModule;
}
