import './App.css';
import AxiosIndex from './pages/AxiosIndex';
import BeforeLeaveIndex from './pages/BeforeLeaveIndex';
import ClickIndex from './pages/ClickIndex';
import FadeInIndex from './pages/FadeInIndex';
import FullScreenIndex from './pages/FullScreenIndex';
import InputIndex from './pages/InputIndex';
import NetworkIndex from './pages/NetworkIndex';
import NotificationIndex from './pages/NotificationIndex';
import PreventLeaveIndex from './pages/PreventLeaveIndex';
import ScrollIndex from './pages/ScrollIndex';
import TabsIndex from './pages/TabsIndex';
import TitleIndex from './pages/TitleIndex';

function App() {
  return (
    <div className="App">
      <InputIndex />
      <TabsIndex />
      <TitleIndex />
      <ClickIndex />
      <PreventLeaveIndex />
      <BeforeLeaveIndex />
      <FadeInIndex />
      <NetworkIndex />
      <ScrollIndex />
      <FullScreenIndex />
      <NotificationIndex />
      <AxiosIndex />
    </div>
  );
}

export default App;
