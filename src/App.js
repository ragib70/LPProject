import "./App.css";
import Features from "./components/Features/features";
import Footer from "./components/Footer/footer";
import Main from "./components/Main/main";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import WrongNetworkOverlay from "./components/WrongNetwork/wrongNetworkOverlay";

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <WrongNetworkOverlay />
        <Main />
        <Features />
        <Footer />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
