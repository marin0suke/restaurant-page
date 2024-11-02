export const about = () => {
    const container = document.createElement("div");
    
    const aboutHeader = document.createElement("h1");
    name.classList.add("about-header");
    name.textContent = "Proudly caffienating our locals, tourists and hardworking crew since 2029 as the first diner establishment on Mars!";
    container.appendChild(aboutHeader);

    return container;
};