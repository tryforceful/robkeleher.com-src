import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { faGitAlt, faGithub, faHtml5, faJava, faJira, faJs, faLinkedin, faNodeJs, faNpm, faPython, faReact, faSass, faSlack, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleUp, faCircle, faDatabase, faEnvelope, faFileDownload, faGem } from "@fortawesome/free-solid-svg-icons";

// We are only using the user-astronaut icon
library.add(
  faGem,
  faFileDownload,
  faEnvelope,
  faDatabase,
  faCircle,
  faAngleDoubleUp,

  faVuejs,
  faSlack,
  faSass,
  faNpm,
  faNodeJs,
  faLinkedin,
  faJs,
  faJira,
  faJava,
  faHtml5,
  faGithub,
  faGitAlt,
  faReact,
  faPython
);

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();