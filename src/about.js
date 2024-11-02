export const about = () => {
    const container = document.createElement("div");
    
    const aboutHeader = document.createElement("h1");
    aboutHeader.classList.add("about-header");
    aboutHeader.textContent = "Proudly caffienating our locals, tourists and hardworking crew since 2029 as the first diner establishment on Mars!";
    container.appendChild(aboutHeader);

    return container;
};