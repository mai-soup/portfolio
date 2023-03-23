import BioSection from "./BioSection";
import Container from "./Container";
import Footer from "./Footer";
import LinksContainer from "./LinksContainer";

function App() {
  return (
    <div className="bg-darkest-grey w-full h-full overflow-x-hidden">
      <Container>
        <LinksContainer />
        <BioSection />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
