import Header from './components/Header/Header';
import Search from './pages/Search/Search';
import ErrorModal from './modals/ErrorModal/ErrorModal';
import LoadingOverlay from './overlays/LoadingOverlay/LoadingOverlay';
import './App.css';

function App() {
  return (
    <div className="font-poppins flex flex-col h-screen overflow-hidden">
      <LoadingOverlay />
      <ErrorModal />
      <Header />
      <Search />
    </div>
  );
}

export default App;
