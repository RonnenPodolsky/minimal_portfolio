import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className='App font-inter bg-background'>
      <Navbar />
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
