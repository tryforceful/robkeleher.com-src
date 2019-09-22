import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faGem, faFileDownload, faDatabase, faCircle, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faSlack, faSass, faNpm, faNodeJs, faLinkedin, faJs, faJira, faJava, faHtml5, faGithub, faGitAlt } from '@fortawesome/free-brands-svg-icons'

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
    faGitAlt
)

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch()