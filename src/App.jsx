import Header from './components/Header'
import Page from './components/Page'
import Sidebar from './components/Sidebar'
import TempPage1 from './components/TempPage1';
import TempPage2 from './components/TempPage2';
import TempPage3 from './components/TempPage3';
import HelpLanding from './components/HelpLanding';

import { useState } from 'react';

function App() {

  const [pageNum, setPageNum] = useState(0);

  console.log('pagenum', pageNum);

  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Header */}
      <Header
        setPageNum={() => setPageNum(0)}
      />

      {/* Content Area */}
      <div className="relative flex-grow flex">
        {/* Sidebar */}
        <Sidebar
          pageNum={pageNum}
          setPageNum={setPageNum}
        />

        {/* Page */}
        <div
          className="
            flex-grow
            bg-gray-100
            md:ml-[35%]  /* Reserve space for the Sidebar on desktop */
          "
        >
          {/* <Page /> */}

          {pageNum === 0 && <HelpLanding />}

          {pageNum === 1 && <TempPage1 />}
          {pageNum === 2 && <TempPage2 />}
          {pageNum === 3 && <TempPage3 />}

        </div>
      </div>
    </div>
  );
}

export default App;