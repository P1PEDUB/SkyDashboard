import React from "react";
import ContentRowTop from "./ContentRowTop";
import Topbar from "./Topbar";

import Footer from "./Footer";


const ContentWrapper = () => {
  return (
    <>
      {/* Content Wrapper */}
      <div id="content-wrapper" class="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <Topbar />
          {/*End Topbar*/}

          {/* Content Row Top */}
          <ContentRowTop />
          {/*End Content Row Top*/}
        </div>
        {/* End of MainContent */}
        
        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
      {/* End of Content Wrapper */}
    </>
  );
};

export default ContentWrapper;
