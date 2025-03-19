import "./style.css";
import { navigation } from "./navigation.ts";
import { accordionToggle } from "./accordion.ts";

const navigationButtons =
  document.querySelectorAll<HTMLButtonElement>(".submenu-btn");

if (navigationButtons.length > 0) {
  navigationButtons.forEach((button) => {
    navigation(button);
  });
}

const accordionButtons = document.querySelectorAll<HTMLButtonElement>(
  ".accordion-toggle-btn"
);

if (accordionButtons.length > 0) {
  accordionButtons.forEach((button) => {
    accordionToggle(button);
  });
}
