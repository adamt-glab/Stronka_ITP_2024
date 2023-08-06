interface ILink {
    name: String;
    path: string;
}

const links: ILink[] = [
    { name: "Home", path: "/" },
    { name: "Mapa", path: "/#map" },
    { name: "Sponsorzy", path: "/#sponsors" },
    { name: "Patroni", path: "/#patrons" },
    { name: "Partnerzy", path: "/#partners" },
    {
        name: "Katalog wystawców",
        path: "https://itp.best.krakow.pl/ITP2023-katalog.pdf",
    },
    {
        name: "Wyślij CV",
        path: "https://docs.google.com/forms/d/e/1FAIpQLSc36Pr-ib_wTRvGmZ5Lt8QUBBYu5BdenBO2TvuImyFKWEZxfQ/viewform?usp=sf_link",
    },
    {
        name: "Zapisz się na warsztaty",
        path: "https://forms.gle/6iHgFDjkCfxJ3n3E8",
    },
    {
        name: "O Beście",
        path: "https://www.newsite.best.krakow.pl/"
    },
    {
        name: "Harmonogram",
        path: "https://itp.best.krakow.pl/Harmonogram wydarzenia.pdf",
    },
    {
        name: "Regulamin",
        path: "https://itp.best.krakow.pl/ITP2023-Regulamin.pdf",
    },
];


const socialLinks = {
    facebook: "https://www.facebook.com/BEST.itp",
    instagram: "https://www.instagram.com/itp_best/",
    linkedin: "https://www.linkedin.com/company/in%C5%BCynierskie-targi-pracy/",
};

export { ILink, links, socialLinks };