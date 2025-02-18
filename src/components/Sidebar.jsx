import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../arquivos/eu.jpg";
import Curriculo from '../arquivos/curriculo.pdf'

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Guilherme Casarim" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href={Curriculo} className="btn" target="_blank">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
