export const socialLogos = [
  {
    link: "https://github.com",
    src: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    alt: "github",
  },
  {
    link: "https://www.instagram.com",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
    alt: "instagram",
  },
  {
    link: "https://www.linkedin.com/",
    src: "https://content.linkedin.com/content/dam/brand/site/img/logo/logo-hero.png",
    alt: "linkedin",
  },
  {
    link: "https://twitter.com",
    src: "https://static.vecteezy.com/system/resources/previews/006/057/998/large_2x/twitter-logo-on-transparent-background-free-vector.jpg",
    alt: "twitter",
  },
];

const Footer = () => {
  return (
    <footer>
      <ul>
        {socialLogos.map((logo, idx) => (
          <li key={idx}>
            <a href={logo.link}>
              <img
                src={logo.src}
                alt={`logo ${logo.alt}`}
                width={40}
                height={40}
              />
            </a>
          </li>
        ))}
      </ul>
      <p>
        Created with love by @RiveraMerida <span role='img'>💕</span>
      </p>
    </footer>
  );
};

export default Footer;
