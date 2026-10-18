import { defineConfig, globalIgnores } from "eslint/config";
import next from "eslint-config-next";

export default defineConfig([
  globalIgnores(["out/**", ".next/**", "playwright-report/**", "test-results/**", "coverage/**", "lib/data.ts"]),
  { extends: [...next] },
]);
