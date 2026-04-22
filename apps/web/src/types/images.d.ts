declare module "*.png" {
  const value: import("next/image").StaticImageData;
  // biome-ignore lint/style/noDefaultExport: ambient module must use default export
  export default value;
}
