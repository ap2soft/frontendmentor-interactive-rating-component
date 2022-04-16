import "./tailwind.css";
import Alpine from "alpinejs";

window.Alpine = Alpine;

document.addEventListener("alpine:init", () => {
  Alpine.data("rating", () => ({
    currentRate: null,
    rates: Array.from({ length: 5 }, (v, key) => key + 1),
    rated: false,

    submit() {
      if (!this.currentRate) return;

      this.rated = true;
    },
  }));
});

Alpine.start();
