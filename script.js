const srollRevealOption = {
    distance:"50px",
    origin: "bottom",
    duration: 1000,

};
ScrollReveal().reveal(".header__image img",{
    ...srollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".header__content h1",{
    ...srollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header__content p",{
    ...srollRevealOption,
    delay:1000,
});

