export const menu = () => {
    const container = document.createElement("div");

    const createElement = (tag, className, text) => {
        const element = document.createElement(tag);
        element.classList.add(className);
        element.textContent = text;
        return element;
    };

    container.appendChild(createElement("h1", "menu-header", "Diner Menu"));
    container.appendChild(createElement("h3", "breakfast-menu", "All Day Breakfast"));
    container.appendChild(createElement("h4", "menu-item", "Rock Slam"));
    container.appendChild(createElement("p", "menu-description", "Stack of pancakes, saussies, bacon, and eggs your way"));

    return container;
}