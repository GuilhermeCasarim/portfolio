import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/guilherme-casarim-herrmann-056217290/' },
  { name: "github", icon: <FaGithub />, link: 'https://github.com/GuilhermeCasarim' },
  { name: "instagram", icon: <FaInstagram />, link: 'https://www.instagram.com/guilherme.casarim' },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank">
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
