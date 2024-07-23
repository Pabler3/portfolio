import AOS from "aos";

export function aosInit() {
  AOS.init({ duration: 900, delay: 50 });
}