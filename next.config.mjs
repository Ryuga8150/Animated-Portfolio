/** @type {import('next').NextConfig} */
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const nextConfig = {
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
};

export default nextConfig;
