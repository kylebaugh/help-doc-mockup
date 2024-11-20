import Header from './components/Header'
import Page from './components/Page'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Content Area */}
      <div className="relative flex-grow flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Page */}
        <div
          className="
            flex-grow
            bg-gray-100 
            md:ml-[35%]  /* Reserve space for the Sidebar on desktop */
          "
        >
          <Page />
        </div>
      </div>
    </div>
  );
}

export default App;