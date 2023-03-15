import Hero from "../components/Home/Hero";
import Categories from "../components/Shared/Categories";
import SpeakerZX9 from "../components/Home/SpeakerZX9";
import SpeakerZX7 from "../components/Home/SpeakerZX7";
import EarphonesYX1 from "../components/Home/EarphonesYX1";
import TextImage from "../components/Shared/TextImage";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Categories />
      <SpeakerZX9 />
      <SpeakerZX7 />
      <EarphonesYX1 />
      <TextImage />
    </>
  );
};

export default Home;
