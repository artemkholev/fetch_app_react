import React from "react";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  const companyName: string = "NuslyAR";

  return (
    <footer className="footer">
      <div className="footer-info">
        <p>Posts</p>
      </div>
      <p className="footer__name-company">
        © {companyName}, {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
