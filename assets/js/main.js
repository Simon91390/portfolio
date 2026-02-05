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

  // When we click on each nav__link, we remove the show-menu class
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
  // When the scroll is greater than 200 viewport height, add the scroll-header class
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
  // When the scroll is higher than 560 viewport height, add the show-scroll class
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
const contactForm = document.querySelector(".contact__form")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)

  // Here you would typically send the data to a server
  console.log("Form data:", data)

  // Show success message (you can customize this)
  alert("Merci pour votre message ! Je vous répondrai bientôt.")

  // Reset form
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

/*===== MODAL POUR COMPÉTENCES TECHNIQUES =====*/
// Données détaillées pour chaque compétence - SEULEMENT LES VRAIS PROJETS
const skillsData = {
  reseaux: {
    icon: 'bx-network-chart',
    title: 'Réseaux',
    description: 'Conception, configuration et maintenance d\'infrastructures réseau sécurisées et performantes. Maîtrise des protocoles et équipements pour garantir la connectivité et la sécurité des communications.',
    tools: [
      'Cisco IOS - Configuration routeurs et switches',
      'Wireshark - Analyse de trames et diagnostic',
      'GNS3 / Packet Tracer - Simulation réseau',
      'pfSense / OPNsense - Firewall open-source',
      'OpenVPN / IPsec - Solutions VPN',
      'Protocoles : TCP/IP, BGP, OSPF, VLAN, STP'
    ],
    projects: [
      'Tests d\'intrusion avec Nessus & Metasploit',
      'Sécurisation périmétrique avec iptables',
      'Émetteur radio FM - Talkie-Walkie',
      'Architecture réseau multi-sites sécurisée'
    ]
  },
  cybersecurite: {
    icon: 'bxs-shield',
    title: 'Cybersécurité',
    description: 'Identification et correction des vulnérabilités, tests d\'intrusion et mise en place de solutions de sécurité. Protection proactive des infrastructures contre les cybermenaces.',
    tools: [
      'Kali Linux - Distribution pour pentesting',
      'Metasploit Framework - Exploitation de vulnérabilités',
      'Nmap / Nessus - Scan et audit de sécurité',
      'Burp Suite - Tests de sécurité web',
      'Snort / Suricata - Systèmes de détection d\'intrusion (IDS)',
      'OWASP ZAP - Analyse de sécurité des applications'
    ],
    projects: [
      'Tests d\'intrusion avec Nessus & Metasploit',
      'Politique de Sécurité des SI (PSSI)',
      'Sensibilisation - Hygiène Informatique'
    ]
  },
  'admin-systeme': {
    icon: 'bxs-server',
    title: 'Administration Système',
    description: 'Gestion et administration de serveurs Linux et Windows, automatisation des tâches et maintien de la disponibilité des services. Virtualisation et gestion centralisée des utilisateurs.',
    tools: [
      'Linux (Debian, Ubuntu, CentOS) - Administration serveurs',
      'Windows Server - Active Directory, GPO, DNS',
      'VMware / VirtualBox - Virtualisation',
      'Docker - Conteneurisation d\'applications',
      'Bash / PowerShell - Scripts d\'automatisation',
      'Ansible - Gestion de configuration automatisée'
    ],
    projects: [
      'Sécurisation périmétrique avec iptables',
      'Architecture réseau multi-sites sécurisée'
    ]
  },
  programmation: {
    icon: 'bx-code-alt',
    title: 'Programmation',
    description: 'Développement de scripts et applications pour automatiser les tâches réseau, traiter les données et améliorer l\'efficacité opérationnelle. Maîtrise des bases de données et du versioning.',
    tools: [
      'Python - Automatisation, scripting réseau (Paramiko, Netmiko)',
      'SQL - MySQL, PostgreSQL, requêtes complexes',
      'JavaScript / Node.js - Développement web',
      'Git / GitHub - Versioning et collaboration',
      'HTML/CSS - Création de pages web',
      'APIs REST - Intégration et automatisation'
    ],
    projects: [
      'Émetteur radio FM - Talkie-Walkie'
    ]
  }
};

// Sélection des éléments
const modal = document.getElementById('skillModal');
const closeModal = document.getElementById('closeModal');
const skillCards = document.querySelectorAll('.technical-skill__card.clickable');

// Fonction pour ouvrir le modal
function openSkillModal(skillKey) {
  const skill = skillsData[skillKey];
  if (!skill) return;

  // Remplir le contenu du modal
  modal.querySelector('.skill-modal__icon').className = `bx ${skill.icon} skill-modal__icon`;
  modal.querySelector('.skill-modal__title').textContent = skill.title;
  modal.querySelector('.skill-modal__description').textContent = skill.description;

  // Remplir les outils
  const toolsList = modal.querySelector('.skill-modal__tools');
  toolsList.innerHTML = skill.tools.map(tool => `<li>${tool}</li>`).join('');

  // Remplir les projets
  const projectsList = modal.querySelector('.skill-modal__projects');
  projectsList.innerHTML = skill.projects.map(project => `<li>${project}</li>`).join('');

  // Afficher le modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Empêcher le scroll
}

// Fonction pour fermer le modal
function closeSkillModal() {
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Restaurer le scroll
}

// Événements sur les cartes
skillCards.forEach(card => {
  card.addEventListener('click', () => {
    const skillKey = card.getAttribute('data-skill');
    openSkillModal(skillKey);
  });
});

// Fermer le modal
closeModal.addEventListener('click', closeSkillModal);

// Fermer en cliquant sur l'overlay
modal.querySelector('.skill-modal__overlay').addEventListener('click', closeSkillModal);

// Fermer avec la touche Échap
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeSkillModal();
  }
});

/*===== DONNÉES COMPLÈTES DES PROJETS =====*/
const projectsData = {
  pentest: {
    icon: 'bxs-bug-alt',
    title: 'Tests d\'intrusion avec Nessus & Metasploit',
    tags: ['Cybersécurité', 'Réseaux'],
    tagClasses: ['work__tag--cyber', 'work__tag--network'],
    context: 'Projet académique visant à explorer le pentesting en utilisant Nessus pour l\'analyse de vulnérabilités et Metasploit pour leur exploitation. Environnement de test comprenant Windows XP et Metasploitable dans un réseau virtualisé.',
    objectives: [
      'Configurer un environnement de test sécurisé avec VirtualBox',
      'Maîtriser l\'outil Nessus pour scanner et identifier les vulnérabilités',
      'Exploiter les failles critiques avec Metasploit Framework',
      'Comprendre les mécanismes d\'attaque et les contre-mesures associées'
    ],
    achievements: [
      'Configuration de 3 machines virtuelles en réseau isolé (192.168.1.0/24)',
      'Scan complet de vulnérabilités avec Nessus Professional',
      'Exploitation réussie de MS08-067 (RCE via SMB) avec accès Meterpreter',
      'Exploitation EternalBlue (MS17-010) et récupération de fichiers sensibles',
      'Attaque VNC avec mot de passe faible et prise de contrôle graphique',
      'Attaque DoS Slowloris sur serveur Apache',
      'Documentation des solutions de mitigation pour chaque vulnérabilité'
    ],
    tech: ['Kali Linux', 'Nessus', 'Metasploit Framework', 'VirtualBox', 'Windows XP', 'Metasploitable', 'Wireshark'],
    skills: ['Pentesting', 'Scan de vulnérabilités', 'Exploitation de failles', 'Virtualisation', 'Analyse réseau'],
    docUrl: 'assets/projets/projet_pentest.pdf'
  },
  firewall: {
    icon: 'bxs-shield-alt-2',
    title: 'Sécurisation périmétrique avec iptables',
    tags: ['Réseaux', 'Administration'],
    tagClasses: ['work__tag--network', 'work__tag--admin'],
    context: 'Configuration d\'un routeur-pare-feu Linux utilisant iptables pour sécuriser un réseau privé (192.168.20.0/24) connecté à un réseau public. Le projet inclut également une simulation d\'attaque ARP Spoofing sur l\'infrastructure MI-LXC.',
    objectives: [
      'Maîtriser le fonctionnement et la configuration d\'un pare-feu avec iptables',
      'Implémenter le NAT/Masquerade pour permettre l\'accès internet au réseau privé',
      'Créer des règles de filtrage avancées avec journalisation',
      'Comprendre et simuler une attaque ARP Spoofing'
    ],
    achievements: [
      'Architecture réseau complète dans Marionnet (réseau privé + public)',
      'Configuration iptables avec tables Filter et NAT',
      'Mise en place du MASQUERADE pour translation d\'adresses (NAT)',
      'Création de chaînes personnalisées (LOG_DROP) pour la journalisation',
      'Règles de filtrage INPUT/FORWARD pour sécuriser le trafic',
      'Simulation d\'attaque ARP Spoofing avec arpspoof sur MI-LXC',
      'Analyse des tables ARP et détection de l\'empoisonnement de cache',
      'Documentation des mécanismes de défense (DAI, IDS)'
    ],
    tech: ['Linux', 'iptables', 'Marionnet', 'MI-LXC', 'arpspoof', 'NAT', 'Firewall'],
    skills: ['Filtrage réseau', 'Pare-feu Linux', 'NAT/Masquerade', 'Sécurité périmétrique', 'ARP Spoofing'],
    docUrl: 'assets/projets/projet_firewall.pdf'
  },
  pssi: {
    icon: 'bxs-file-doc',
    title: 'Politique de Sécurité des SI (PSSI)',
    tags: ['Cybersécurité', 'Gestion'],
    tagClasses: ['work__tag--cyber', 'work__tag--management'],
    context: 'Rédaction d\'une Politique de Sécurité des Systèmes d\'Information complète et d\'une procédure de gestion des correctifs (patching) pour l\'entreprise fictive TechInnov Solutions, spécialisée dans le développement logiciel.',
    objectives: [
      'Définir les objectifs de sécurité (Confidentialité, Intégrité, Disponibilité)',
      'Identifier et classifier les actifs sensibles de l\'organisation',
      'Établir les rôles et responsabilités en matière de sécurité',
      'Créer une procédure complète de gestion des correctifs'
    ],
    achievements: [
      'Analyse du contexte et des enjeux de sécurité de TechInnov',
      'Identification des actifs critiques (données clients, codes sources, données financières)',
      'Définition des contrôles de sécurité (accès, chiffrement, surveillance, sauvegardes)',
      'Procédure de gestion des incidents (détection, réponse, rapport)',
      'Plan de sensibilisation et formation des employés',
      'Procédure de patching complète : évaluation, test, déploiement, vérification',
      'Calendrier de revue et amélioration continue de la PSSI',
      'Gestion des exceptions et mesures compensatoires'
    ],
    tech: ['Gouvernance SI', 'PSSI', 'Patch Management', 'Conformité', 'Gestion des risques'],
    skills: ['Rédaction de politiques', 'Analyse de risques', 'Gouvernance', 'Conformité', 'Gestion des correctifs'],
    docUrl: 'assets/projets/projet_pssi.pdf'
  },
  talkiewalkie: {
    icon: 'bx-radio',
    title: 'Émetteur radio FM - Talkie-Walkie',
    tags: ['Réseaux', 'Signal'],
    tagClasses: ['work__tag--network', 'work__tag--signal'],
    context: 'Conception et réalisation d\'un émetteur de talkie-walkie utilisant la modulation de fréquence (FM) et une double transposition de fréquence pour transmettre la voix sur le canal 3 (446,03125 MHz).',
    objectives: [
      'Comprendre le principe de transmission par modulation FM',
      'Réaliser une double transposition de fréquence (fFI → fp)',
      'Caractériser et analyser les signaux avec un analyseur de spectre',
      'Transmettre la voix sur un canal spécifique de talkie-walkie'
    ],
    achievements: [
      'Calcul de la bande de Carson (B = 12,5 kHz) et excursion de fréquence (Δf = 9,5 kHz)',
      'Détermination des fréquences d\'oscillateurs locaux (fOL1 = 10 MHz, fOL2 = 388 MHz)',
      'Caractérisation du modulateur VCO (fFI ≈ 48 MHz)',
      'Première transposition : 48 MHz → 58 MHz (avec fOL1)',
      'Deuxième transposition : 58 MHz → 446 MHz (avec fOL2)',
      'Analyse spectrale complète à chaque étape avec l\'analyseur RF',
      'Transmission et réception réussie de la voix sur le talkie-walkie',
      'Tests de transposition au récepteur (démodulation)'
    ],
    tech: ['GBF Rigol DG1302', 'Analyseur de spectre RF', 'Modulateur VCO', 'Mélangeurs ZP-5X+', 'FM', 'Radiofréquence'],
    skills: ['Modulation FM', 'Transposition de fréquence', 'Analyse spectrale', 'Radiofréquence', 'Traitement du signal'],
    docUrl: 'assets/projets/projet_talkiewalkie.pdf'
  },
  hygiene: {
    icon: 'bxs-lock-alt',
    title: 'Sensibilisation - Hygiène Informatique',
    tags: ['Cybersécurité', 'Sensibilisation'],
    tagClasses: ['work__tag--cyber', 'work__tag--awareness'],
    context: 'Création d\'une vidéo de sensibilisation destinée aux utilisateurs pour promouvoir les bonnes pratiques de sécurité informatique et d\'hygiène numérique au quotidien.',
    objectives: [
      'Sensibiliser aux risques de sécurité courants',
      'Promouvoir les bonnes pratiques de mots de passe',
      'Éduquer sur le phishing et l\'ingénierie sociale',
      'Encourager la sécurisation des données personnelles'
    ],
    achievements: [
      'Script pédagogique adapté à tous les niveaux',
      'Création de support visuel attractif et compréhensible',
      'Couverture des thèmes : mots de passe, phishing, mises à jour, sauvegardes',
      'Conseils pratiques et actionnables',
      'Format vidéo engageant et mémorable',
      'Diffusion et partage auprès des utilisateurs cibles'
    ],
    tech: ['Communication', 'Pédagogie', 'Vidéo', 'Sensibilisation'],
    skills: ['Communication', 'Pédagogie', 'Vulgarisation technique', 'Sensibilisation sécurité'],
    docUrl: 'assets/projets/SAE  Hygiène informatique.mp4'
  },
  architecture: {
    icon: 'bx-network-chart',
    title: 'Architecture réseau multi-sites sécurisée',
    tags: ['Réseaux', 'Architecture'],
    tagClasses: ['work__tag--network', 'work__tag--design'],
    context: 'Conception d\'une infrastructure réseau complète pour une entreprise multi-sites avec segmentation par VLAN, routage inter-VLAN et interconnexion sécurisée par VPN.',
    objectives: [
      'Concevoir une architecture réseau évolutive et sécurisée',
      'Implémenter la segmentation par VLAN',
      'Configurer le routage inter-VLAN',
      'Mettre en place un VPN site-à-site'
    ],
    achievements: [
      'Architecture complète multi-sites documentée',
      'Plan d\'adressage IP hiérarchique et structuré',
      'Segmentation VLAN par service (Admin, Utilisateurs, Serveurs, DMZ)',
      'Configuration routage inter-VLAN sur switches L3 ou routeur',
      'VPN site-à-site pour interconnexion sécurisée',
      'Documentation technique complète avec schémas réseau',
      'Tests de connectivité et validation de la segmentation',
      'Mesures de sécurité : ACL, filtrage, isolation des VLANs'
    ],
    tech: ['Cisco', 'VLAN', 'Routage', 'VPN', 'IPsec', 'Architecture réseau'],
    skills: ['Architecture réseau', 'VLAN', 'Routage', 'VPN', 'Documentation technique'],
    docUrl: 'assets/projets/projet_architecture.pdf'
  }
};

/*===== MODAL POUR LES PROJETS =====*/
const projectModal = document.getElementById('projectModal');
const closeProjectModal = document.getElementById('closeProjectModal');
const projectCards = document.querySelectorAll('.work__card.clickable-project');

// Fonction pour ouvrir le modal de projet
function openProjectModal(projectKey) {
  const project = projectsData[projectKey];
  if (!project) return;

  // Remplir le header
  projectModal.querySelector('.project-modal__icon').className = `bx ${project.icon} project-modal__icon`;
  projectModal.querySelector('.project-modal__title').textContent = project.title;
  
  // Remplir les tags
  const tagsContainer = projectModal.querySelector('.project-modal__tags');
  tagsContainer.innerHTML = project.tags.map((tag, index) => 
    `<span class="work__tag ${project.tagClasses[index]}">${tag}</span>`
  ).join('');

  // Remplir le contexte
  projectModal.querySelector('.project-modal__context').textContent = project.context;

  // Remplir les objectifs
  const objectivesList = projectModal.querySelector('.project-modal__objectives');
  objectivesList.innerHTML = project.objectives.map(obj => `<li>${obj}</li>`).join('');

  // Remplir les réalisations
  const achievementsList = projectModal.querySelector('.project-modal__achievements');
  achievementsList.innerHTML = project.achievements.map(ach => `<li>${ach}</li>`).join('');

  // Remplir les technologies
  const techContainer = projectModal.querySelector('.project-modal__tech');
  techContainer.innerHTML = project.tech.map(tech => 
    `<span class="project-modal__tech-badge">${tech}</span>`
  ).join('');

  // Remplir les compétences
  const skillsContainer = projectModal.querySelector('.project-modal__skills');
  skillsContainer.innerHTML = project.skills.map(skill => 
    `<span class="project-modal__skill-badge">${skill}</span>`
  ).join('');

  // Configurer le bouton de document
  const docButton = document.getElementById('projectViewDoc');
  docButton.href = project.docUrl;

  // Afficher le modal
  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Fonction pour fermer le modal de projet
function closeProjectModalFunc() {
  projectModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Événements sur les cartes de projet
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const projectKey = card.getAttribute('data-project');
    openProjectModal(projectKey);
  });
});

// Fermer le modal de projet
closeProjectModal.addEventListener('click', closeProjectModalFunc);
projectModal.querySelector('.project-modal__overlay').addEventListener('click', closeProjectModalFunc);

// Fermer avec Échap
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (projectModal.classList.contains('active')) {
      closeProjectModalFunc();
    }
  }
});