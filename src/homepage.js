export const homepage = () => {
    const container = document.createElement("div"); // const here so can append to.

    const name = document.createElement("h1");
    name.classList.add("name");
    name.textContent = "Floating Rock Cafe";
    container.appendChild(name);

    const award = document.createElement("h4");
    award.classList.add("award");
    award.textContent = "Mars' top rated cafe in 2034!";
    container.appendChild(award);

    const thankyou = document.createElement("p");
    thankyou.classList.add("thankyou");
    thankyou.textContent = "Thank you all for your reviews and continued support!";
    container.appendChild(thankyou);

    return container;
};