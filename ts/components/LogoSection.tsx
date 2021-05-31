import * as React from 'react'

const LogoSection = (): JSX.Element => {

  return (
    <div className="LogoSection">
      <img id="periqles-logo"
      className="marketing-logo" 
      src="../../public/assets/dimo-logo.png" alt="periqles"/>
      <h2 className="pitch" id="short-pitch">
        POC For Periqles.
      </h2>
    </div>
  );
};

export default LogoSection;
