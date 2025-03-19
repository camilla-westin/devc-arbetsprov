export function accordionToggle(button: HTMLButtonElement) {
  button.addEventListener("click", () => {
    const parentElement = button.parentElement;
    const accordionContent = parentElement?.nextElementSibling as HTMLElement;
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const arrow = button.querySelector("svg");

    // Toggle the aria-expanded attribute
    button.setAttribute("aria-expanded", `${!isExpanded}`);

    if (accordionContent) {
      const hiddenClasses = [
        "invisible",
        "max-h-0",
        "overflow-hidden",
        "opacity-0",
      ];
      const visibleClasses = [
        "visible",
        "max-h-screen",
        "overflow-visible",
        "opacity-100",
      ];

      if (isExpanded) {
        visibleClasses.forEach((className) =>
          accordionContent.classList.remove(className)
        );
        hiddenClasses.forEach((className) =>
          accordionContent.classList.add(className)
        );
      } else {
        hiddenClasses.forEach((className) =>
          accordionContent.classList.remove(className)
        );
        visibleClasses.forEach((className) =>
          accordionContent.classList.add(className)
        );
      }
      if (arrow) {
        arrow.classList.toggle("rotate-180");
      }
    }
  });
}
