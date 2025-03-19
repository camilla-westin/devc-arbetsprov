function closeSubmenu(
  button: HTMLButtonElement,
  submenu: HTMLElement,
  submenuOverlay: HTMLElement
) {
  button.setAttribute("aria-expanded", "false");
  submenu.classList.add("invisible");
  submenu.classList.remove("visible");
  submenuOverlay.classList.add("invisible", "is-active");
  submenuOverlay.classList.remove("visible", "is-active");
  button.classList.remove("border-orange-active");
  button.querySelector("svg")?.classList.remove("rotate-x-180");
}

function openSubmenu(
  button: HTMLButtonElement,
  submenu: HTMLElement,
  submenuOverlay: HTMLElement
) {
  submenu.classList.remove("invisible");
  submenu.classList.add("visible", "animate-slide-in-up");
  submenuOverlay.classList.remove("invisible", "is-active");
  submenuOverlay.classList.add("visible", "is-active");
  button.classList.add("border-orange-active");
  button.querySelector("svg")?.classList.add("rotate-x-180");
}

export function navigation(button: HTMLButtonElement) {
  button.addEventListener("click", () => {
    const parentElement = button.parentElement;
    const submenu = parentElement?.querySelector(".submenu") as HTMLElement;
    const submenuOverlay = parentElement?.querySelector(
      ".submenu-overlay"
    ) as HTMLElement;
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    // Close all _other_ submenus and overlays
    document
      .querySelectorAll<HTMLButtonElement>('button[aria-expanded="true"]')
      .forEach((openButton) => {
        if (openButton !== button) {
          const openSubmenu = openButton.parentElement?.querySelector(
            ".submenu"
          ) as HTMLElement;
          const openSubmenuOverlay = openButton.parentElement?.querySelector(
            ".submenu-overlay"
          ) as HTMLElement;
          if (openSubmenu && openSubmenuOverlay) {
            closeSubmenu(openButton, openSubmenu, openSubmenuOverlay);
          }
        }
      });

    // Toggle the aria-expanded attribute
    button.setAttribute("aria-expanded", `${!isExpanded}`);

    if (submenu && submenuOverlay) {
      if (isExpanded) {
        closeSubmenu(button, submenu, submenuOverlay);
      } else {
        openSubmenu(button, submenu, submenuOverlay);
      }

      // Close the submenu when the overlay is clicked
      submenuOverlay.addEventListener("click", () => {
        closeSubmenu(button, submenu, submenuOverlay);
      });

      // Close the submenu when the Esc key is pressed
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeSubmenu(button, submenu, submenuOverlay);
        }
      });
    }
  });
}
