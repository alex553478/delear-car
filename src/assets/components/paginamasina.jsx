import { useParams } from "react-router-dom";
import PaginaFocus from "./paginafocus.jsx";
import PaginaPorsche from "./porsche.jsx";
import PaginaDodgeViperSRT from "./dogde-srt-viper.jsx";
import PaginaLotus from "./lotus.jsx";
import PaginaBmwM3 from "./bmwm3.jsx";
import PaginaSkodaFabia from "./SkodaFabia.jsx";
import PaginaBMWSeria3 from "./BMWSeria3.jsx";
import PaginaDaciaDuster from "./daciaduster.jsx";
import PaginaSkodOctaviascout from "./skodaoctaviascout.jsx";
import PaginaVwsharan from "./VW sharan.jsx";
import PaginaGolf7 from "./golf7.jsx";
import PaginaHondaCivic from "./hondacivic.jsx";
import PaginaMcv from "./daciamcv.jsx";
import PaginaLogan2 from "./logan2.jsx";
import PaginaSandero from "./sandero.jsx";
import PaginaMazda6 from "./mazda6.jsx";
import PaginaAsx from "./asx.jsx";
import PaginaRange from "./range.jsx";
import PaginaSubaru from "./subaru.jsx";
import PaginaG270 from "./g270.jsx";


const PaginaMasina = () => {
  const { slug } = useParams();

  if (slug === "ford-focus-mk3") return <PaginaFocus />;
  if (slug === "porsche") return <PaginaPorsche />;
  if (slug === "dodge-srt-viper") return <PaginaDodgeViperSRT />;
  if (slug === "lotus") return <PaginaLotus />;
  if (slug === "bmw-m3") return <PaginaBmwM3 />
  if (slug === "skoda-fabia") return <PaginaSkodaFabia />;
  if (slug === "bmw-seria-3") return <PaginaBMWSeria3 />;
  if (slug === "dacia-duster-1") return <PaginaDaciaDuster />;
  if (slug === "skoda-octavia-iii-scout") return <PaginaSkodOctaviascout />;
  if (slug === "vw-sharan-20-tdi") return <PaginaVwsharan />;
  if (slug === "vw-golf-7-r-line") return <PaginaGolf7 />;
  if (slug === "honda-civic-18-vtec") return <PaginaHondaCivic />;
  if (slug === "renault-logan-mcv-20-dci-4x4") return <PaginaMcv />;
  if (slug === "dacia-logan-2-stepway") return <PaginaLogan2 />;
  if (slug === "dacia-sandero-stepway-15-dci") return <PaginaSandero />;
  if (slug === "mazda-6") return <PaginaMazda6/>;
  if (slug === "mitsubishi-asx-22-did-4wd") return <PaginaAsx/>;
  if (slug === "range-rover-evoque-rdynamic") return <PaginaRange/>;
  if (slug === "subaru-forester-4x4-euro-6") return <PaginaSubaru/>;
  if (slug === "mercedesbenz-g-class-270-cdi") return <PaginaG270/>;
  




  return <h2>Pagina pentru {slug} nu există încă</h2>;
};

export default PaginaMasina;
