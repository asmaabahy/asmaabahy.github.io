import AllAboutMe from "./components/AllAboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import TranslationButton from "./components/UI/TranslationButton";

function App() {
  return (
    <>
      <Header />
      <main>
        <AllAboutMe />
        <Contact />
      </main>
      <TranslationButton />
    </>
  );
}

export default App;
