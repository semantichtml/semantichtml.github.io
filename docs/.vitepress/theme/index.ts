import Aplos from "aplos/minimal/Layout.vue";
import type { Theme } from "vitepress";
import "aplos/minimal";
import "./custom.scss";

export default {
  Layout: Aplos,
} satisfies Theme;