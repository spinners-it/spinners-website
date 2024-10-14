import { useParams } from "react-router-dom";
import Header from "../molecules/Header";

// NOT USED 
function ProjectDetails() {
  const { id } = useParams();

  return (
    <>
      <Header />
      DETTAGLI PROGETTO {id}
    </>
  );
}

export default ProjectDetails;
