import { useParams } from "react-router-dom";
import PaginaFocus from "./paginafocus.jsx";
import PaginaPorsche from "./porsche.jsx";
import PaginaDodgeViperSRT from "./dogde-srt-viper.jsx";

const PaginaMasina = () => {
  const { slug } = useParams();

  if (slug === "ford-focus-mk3") return <PaginaFocus />;
  if (slug === "porsche") return <PaginaPorsche />;
  if (slug === "dodge-srt-viper") return <PaginaDodgeViperSRT />;

  return <h2>Pagina pentru {slug} nu există încă</h2>;
};

export default PaginaMasina;
