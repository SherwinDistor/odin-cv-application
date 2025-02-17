import githubLogo from "/github-mark.svg";

function Footer() {
  return (
    <footer>
      <img src={githubLogo} alt="GitHub Logo" />
      <a
        className="footer-link"
        href="https://github.com/SherwinDistor/odin-cv-application"
        target="_blank"
      >
        Created by Sherwin
      </a>
    </footer>
  );
}

export default Footer;
