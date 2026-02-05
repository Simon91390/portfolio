/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu")

      // Change icon
      const icon = toggle.querySelector("i")
      if (nav.classList.contains("show-menu")) {
        icon.classList.remove("bx-menu")
        icon.classList.add("bx-x")
      } else {
        icon.classList.remove("bx-x")
        icon.classList.add("bx-menu")
      }
    })
  }
}
showMenu("nav-toggle", "nav-menu")

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  const navToggle = document.getElementById("nav-toggle")

  // When clicking on each nav__link, remove the show-menu class
  navMenu.classList.remove("show-menu")

  // Reset icon
  const icon = navToggle.querySelector("i")
  icon.classList.remove("bx-x")
  icon.classList.add("bx-menu")
}
navLink.forEach((n) => n.addEventListener("click", linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    const sectionId = current.getAttribute("id")

    const navLink = document.querySelector(".nav__link[href*=" + sectionId + "]")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add("active-link")
    } else {
      navLink?.classList.remove("active-link")
    }
  })
}
window.addEventListener("scroll", scrollActive)

/*===== CHANGE BACKGROUND HEADER =====*/
function scrollHeader() {
  const header = document.getElementById("header")
  // When the scroll is greater than 200 viewport height, add a shadow to the header
  if (this.scrollY >= 200) {
    header.style.boxShadow = "0 4px 12px rgba(15, 23, 42, 0.15)"
  } else {
    header.style.boxShadow = "0 4px 6px rgba(15, 23, 42, 0.1)"
  }
}
window.addEventListener("scroll", scrollHeader)

/*===== SHOW SCROLL UP =====*/
function scrollTop() {
  const scrollUp = document.getElementById("scroll-up")
  // When scroll is higher than 560 viewport height, add the show-scroll class
  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll")
  } else {
    scrollUp.classList.remove("show-scroll")
  }
}
window.addEventListener("scroll", scrollTop)

/*===== ANIMATE SKILL BARS ON SCROLL =====*/
const skillBars = document.querySelectorAll(".skills__bar")
let skillsAnimated = false

function animateSkills() {
  const skillsSection = document.getElementById("competences")
  const skillsSectionTop = skillsSection.offsetTop
  const skillsSectionHeight = skillsSection.offsetHeight
  const scrollY = window.pageYOffset

  if (scrollY > skillsSectionTop - 400 && scrollY < skillsSectionTop + skillsSectionHeight && !skillsAnimated) {
    skillBars.forEach((bar) => {
      // The width is already set in CSS, this triggers the animation
      bar.style.width = bar.classList.contains("skills__html")
        ? "95%"
        : bar.classList.contains("skills__css")
          ? "85%"
          : bar.classList.contains("skills__networks")
            ? "75%"
            : bar.classList.contains("skills__cybersec")
              ? "85%"
              : "0%"
    })
    skillsAnimated = true
  }
}
window.addEventListener("scroll", animateSkills)

/*===== SCROLL REVEAL ANIMATION =====*/
const ScrollReveal = window.ScrollReveal // Assuming ScrollReveal is available globally or imported
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  reset: false,
})

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {})
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", { delay: 400 })
sr.reveal(".home__social-icon", { interval: 200 })
sr.reveal(".skills__data, .work__item, .contact__input", { interval: 200 })

/*===== FORM SUBMISSION =====*/
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)

  // Normally you would send data to a server here
  console.log("Form data:", data)

  // Show success message (customizable)
  alert("Thank you for your message! I’ll get back to you soon.")

  // Reset the form
  contactForm.reset()
})

/*===== SMOOTH SCROLL FOR SAFARI =====*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

/*===== TYPING EFFECT FOR HOME TITLE =====*/
const titleElement = document.querySelector(".home__title-color")
if (titleElement) {
  const originalText = titleElement.textContent
  titleElement.textContent = ""
  let i = 0

  function typeWriter() {
    if (i < originalText.length) {
      titleElement.textContent += originalText.charAt(i)
      i++
      setTimeout(typeWriter, 100)
    }
  }

  // Start typing effect after a short delay
  setTimeout(typeWriter, 500)
}

/*===== DROPDOWN MENU MOBILE =====*/
const dropdownItems = document.querySelectorAll(".nav__item--dropdown")

dropdownItems.forEach((item) => {
  const link = item.querySelector(".nav__link")
  
  link.addEventListener("click", (e) => {
    // On mobile, toggle dropdown
    if (window.innerWidth <= 767) {
      e.preventDefault()
      item.classList.toggle("active")
    }
  })
})

/*===== MODAL FOR TECHNICAL SKILLS =====*/
// Detailed data for each skill – ONLY REAL PROJECTS
const skillsData = {
  networks: {
    icon: 'bx-network-chart',
    title: 'Networks',
    description: 'Design, configuration, and maintenance of secure and efficient network infrastructures. Mastery of protocols and equipment to ensure connectivity and communication security.',
    tools: [
      'Cisco IOS – Router and switch configuration',
      'Wireshark – Packet analysis and diagnostics',
      'GNS3 / Packet Tracer – Network simulation',
      'pfSense / OPNsense – Open-source firewalls',
      'OpenVPN / IPsec – VPN solutions',
      'Protocols: TCP/IP, BGP, OSPF, VLAN, STP'
    ],
    projects: [
      'Penetration testing with Nessus & Metasploit',
      'Perimeter security with iptables',
      'FM Radio Transmitter – Walkie-Talkie',
      'Multi-site secured network architecture'
    ]
  },
  cybersecurity: {
    icon: 'bxs-shield',
    title: 'Cybersecurity',
    description: 'Identification and remediation of vulnerabilities, penetration testing, and implementation of security solutions. Proactive protection of infrastructures against cyber threats.',
    tools: [
      'Kali Linux – Penetration testing distribution',
      'Metasploit Framework – Exploitation framework',
      'Nmap / Nessus – Scanning and security auditing',
      'Burp Suite – Web security testing',
      'Snort / Suricata – Intrusion detection systems (IDS)',
      'OWASP ZAP – Application security analysis'
    ],
    projects: [
      'Penetration testing with Nessus & Metasploit',
      'Information System Security Policy (ISSP)',
      'Awareness – Cyber hygiene'
    ]
  },
  'system-admin': {
    icon: 'bxs-server',
    title: 'System Administration',
    description: 'Management and administration of Linux and Windows servers, automation of tasks, and maintenance of service availability. Virtualization and centralized user management.',
    tools: [
      'Linux (Debian, Ubuntu, CentOS) – Server administration',
      'Windows Server – Active Directory, GPO, DNS',
      'VMware / VirtualBox – Virtualization',
      'Docker – Application containerization',
      'Bash / PowerShell – Automation scripts',
      'Ansible – Automated configuration management'
    ],
    projects: [
      'Perimeter security with iptables',
      'Multi-site secured network architecture'
    ]
  },
  programming: {
    icon: 'bx-code-alt',
    title: 'Programming',
    description: 'Development of scripts and applications to automate network tasks, process data, and improve operational efficiency. Proficient in databases and version control.',
    tools: [
      'Python – Automation, network scripting (Paramiko, Netmiko)',
      'SQL – MySQL, PostgreSQL, advanced queries',
      'JavaScript / Node.js – Web development',
      'Git / GitHub – Version control and collaboration',
      'HTML/CSS – Web design',
      'REST APIs – Integration and automation'
    ],
    projects: [
      'FM Radio Transmitter – Walkie-Talkie'
    ]
  }
}

/*===== ACCORDION FOR TECHNICAL SKILLS =====*/
const accordionHeaders = document.querySelectorAll('.accordion-header')

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement
    const isActive = accordionItem.classList.contains('active')
    
    // Close all accordions
    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('active')
    })
    
    // Open the clicked one if it was not already open
    if (!isActive) {
      accordionItem.classList.add('active')
    }
  })
})

/*===== PROJECT LINKS INSIDE ACCORDION =====*/
const accordionProjectLinks = document.querySelectorAll('.accordion-project-link')

accordionProjectLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const projectKey = link.getAttribute('data-project')
    
    // Scroll to the projects section
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })
    
    // After scrolling, open the related project modal
    setTimeout(() => {
      if (typeof openProjectModal === 'function') {
        openProjectModal(projectKey)
      }
    }, 800)
  })
})

/*===== COOKIE BANNER MANAGEMENT =====*/
const cookieBanner = document.getElementById('cookieBanner')
const acceptCookiesBtn = document.getElementById('acceptCookies')

// Check if the user already accepted cookies
if (!localStorage.getItem('cookiesAccepted')) {
  setTimeout(() => {
    cookieBanner.classList.add('show')
  }, 1000)
}

// Accept cookies
acceptCookiesBtn.addEventListener('click', () => {
  localStorage.setItem('cookiesAccepted', 'true')
  cookieBanner.classList.remove('show')
})

/*===== CONTACT FORM VALIDATION =====*/
const contactForm = document.getElementById('contactForm')
const rgpdConsent = document.getElementById('rgpdConsent')

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()

  // Check that the privacy consent box is checked
  if (!rgpdConsent.checked) {
    alert('Please accept the privacy policy before sending your message.')
    return
  }

  // Get form data
  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)

  console.log('Form data:', data)

  // Example: here you could send data with fetch() to your backend

  alert('Thank you for your message! I will get back to you shortly.')
  contactForm.reset()
})