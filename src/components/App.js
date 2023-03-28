import '../css/App.css';
import Header from './Header';
import Badge from './Badge';
import Footer from './Footer';
import ContentWindow from './ContentWindow';

function App() {
  return (
    <div className='background'>
      <div className="App">
        <Header />
          <main>
          <Badge />
          <ContentWindow />
          </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
