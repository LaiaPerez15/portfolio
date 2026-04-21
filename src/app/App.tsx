import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Download, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import photoImg from "../imports/image.png";
import cvPdf from "../imports/Laia_Perez_Prados_CV.pdf";
import certActiveDirectory from "../imports/Administración de Directorio Activo en Windows Server.png";
import certLinux from "../imports/Administración de Sistemas Operativos Linux.png";
import certWindows11 from "../imports/Administración de Windows 11.png";
import certOracleSQL from "../imports/Conceptos Fundamentales SQL Oracle .png";
import certJava from "../imports/Java SE Programming .png";
import certOraclePLSQL from "../imports/Programación PL-SQL Oracle .png";
import certWindows11Security from "../imports/Sistemas de Seguridad en Windows 11 y Windows Server .png";
import laiatica3DImg from "../imports/Laiateca-3D.jpg";
import podcastImg from "../imports/Podcast.jpg";

const translations = {
  es: {
    nav: { home: 'Inicio', projects: 'Proyectos', experience: 'Experiencia', contact: 'Contacto' },
    hero: {
      greeting: 'Hola! Soy',
      name: 'Laia',
      surname: 'Perez Prados',
      role: 'Desarrolladora Web Full Stack & Diseñadora UI/UX',
      downloadCV: 'Mi CV',
      available: 'Disponible',
      coffee: ''
    },
    about: {
      intro: 'Apasionada por la tecnología y el desarrollo web. Me encanta aprender continuamente y asumir nuevos retos que me permitan crecer profesionalmente.',
      current: 'Actualmente trabajo como Desarrolladora Web en Esdi Systems, donde desarrollo con PHP, Python, JavaScript, Angular, WordPress, Elementor, Tailwind, Odoo y diseño UI/UX.',
      location: 'Barcelona',
      phone: 'Teléfono',
      languages: 'Idiomas que hablo'
    },
    projects: {
      title: 'Cosas que he creado',
      project1: { title: 'Home Laia 3D', desc: 'Una experiencia 3D interactiva donde puedes arrastrar objetos y explorar. Hecho con Vue.js y Three.js.' },
      project2: { title: 'Ensella Podcast', desc: 'Plataforma moderna para escuchar podcasts. Diseño limpio y funcional con React.' }
    },
    experience: {
      title: 'Mi trayectoria',
      current: 'Ahora',
      developer: 'Desarrolladora Web',
      intern: 'Prácticas'
    },
    certifications: {
      title: 'Certificaciones'
    },
    skills: {
      title: 'Lo que sé hacer',
      all: 'Todo',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Herramientas'
    },
    contact: {
      title: '¿Hablamos?',
      subtitle: 'Siempre abierta a nuevos proyectos y colaboraciones',
      whatsapp: 'Escríbeme por WhatsApp'
    }
  },
  ca: {
    nav: { home: 'Inici', projects: 'Projectes', experience: 'Experiència', contact: 'Contacte' },
    hero: {
      greeting: 'Hola! Sóc',
      name: 'Laia',
      surname: 'Perez Prados',
      role: 'Desenvolupadora Web Full Stack & Dissenyadora UI/UX',
      downloadCV: 'El meu CV',
      available: 'Disponible',
      coffee: ''
    },
    about: {
      intro: 'Apassionada per la tecnologia i el desenvolupament web. M\'encanta aprendre contínuament i assumir nous reptes que em permetin créixer professionalment.',
      current: 'Actualment treballo com a Desenvolupadora Web a Esdi Systems, on desenvolupo amb PHP, Python, JavaScript, Angular, WordPress, Elementor, Tailwind, Odoo i disseny UI/UX.',
      location: 'Barcelona',
      phone: 'Telèfon',
      languages: 'Idiomes que parlo'
    },
    projects: {
      title: 'Coses que he creat',
      project1: { title: 'Home Laia 3D', desc: 'Una experiència 3D interactiva on pots arrossegar objectes i explorar. Fet amb Vue.js i Three.js.' },
      project2: { title: 'Ensella Podcast', desc: 'Plataforma moderna per escoltar podcasts. Disseny net i funcional amb React.' }
    },
    experience: {
      title: 'La meva trajectòria',
      current: 'Ara',
      developer: 'Desenvolupadora Web',
      intern: 'Pràctiques'
    },
    certifications: {
      title: 'Certificacions'
    },
    skills: {
      title: 'El que sé fer',
      all: 'Tot',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Eines'
    },
    contact: {
      title: 'Parlem?',
      subtitle: 'Sempre oberta a nous projectes i col·laboracions',
      whatsapp: 'Escriu-me per WhatsApp'
    }
  },
  en: {
    nav: { home: 'Home', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
    hero: {
      greeting: 'Hi! I\'m',
      name: 'Laia',
      surname: 'Perez Prados',
      role: 'Full Stack Web Developer & UI/UX Designer',
      downloadCV: 'My CV',
      available: 'Available',
      coffee: ''
    },
    about: {
      intro: 'Passionate about technology and web development. I love continuous learning and taking on new challenges that allow me to grow professionally.',
      current: 'Currently working as a Web Developer at Esdi Systems, where I develop with PHP, Python, JavaScript, Angular, WordPress, Elementor, Tailwind, Odoo and UI/UX design.',
      location: 'Barcelona',
      phone: 'Phone',
      languages: 'Languages I speak'
    },
    projects: {
      title: 'Things I\'ve built',
      project1: { title: 'Home Laia 3D', desc: 'An interactive 3D experience where you can drag objects and explore. Built with Vue.js and Three.js.' },
      project2: { title: 'Ensella Podcast', desc: 'Modern platform for listening to podcasts. Clean and functional design with React.' }
    },
    experience: {
      title: 'My journey',
      current: 'Now',
      developer: 'Web Developer',
      intern: 'Internship'
    },
    certifications: {
      title: 'Certifications'
    },
    skills: {
      title: 'What I do',
      all: 'All',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools'
    },
    contact: {
      title: 'Let\'s talk?',
      subtitle: 'Always open to new projects and collaborations',
      whatsapp: 'Text me on WhatsApp'
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<'es' | 'ca' | 'en'>('es');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [skillFilter, setSkillFilter] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');
  const t = translations[lang];

  const certificates = [
    { name: 'Administración de Directorio Activo en Windows Server', org: 'Microsoft Academy', year: '2025', hours: 60, image: certActiveDirectory },
    { name: 'Administración de Sistemas Operativos Linux', org: 'Linux Professional Institute', year: '2025', hours: 25, image: certLinux },
    { name: 'Administración de Windows 11', org: 'Microsoft Academy', year: '2025', hours: 30, image: certWindows11 },
    { name: 'Conceptos Fundamentales SQL Oracle', org: 'Oracle Academy', year: '2025', hours: 45, image: certOracleSQL },
    { name: 'Java SE Programming', org: 'Oracle Academy', year: '2025', hours: 200, image: certJava },
    { name: 'Programación PL/SQL Oracle', org: 'Oracle Academy', year: '2025', hours: 30, image: certOraclePLSQL },
    { name: 'Sistemas de Seguridad en Windows 11 y Windows Server', org: 'Microsoft Academy', year: '2025', hours: 20, image: certWindows11Security }
  ];

  const skillsData = {
    frontend: [
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
    ],
    backend: [
      { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PL/SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
      { name: 'Odoo', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Odoo_Official_Logo.png' }
    ],
    tools: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Jira', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
      { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
      { name: 'Elementor', logo: 'https://cdn.wpml.org/wp-content/uploads/2017/09/Elementor-Logo-Symbol-Red.png' },
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
      { name: 'UI/UX', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' }
    ]
  };

  const getFilteredSkills = () => {
    if (skillFilter === 'all') {
      return [...skillsData.frontend, ...skillsData.backend, ...skillsData.tools];
    }
    return skillsData[skillFilter];
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(to bottom, #FFF5F7 0%, #FFFFFF 30%, #F0F9FF 60%, #FFF5F7 100%)' }}>
      {/* Fixed Header */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md"
        style={{ borderBottom: '2px solid #FFE5EC' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#2D1B2E' }}
            >
              Laia Perez 
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <motion.a
                  key={key}
                  href={`#${key}`}
                  whileHover={{ y: -2, color: '#FF6B9D' }}
                  className="text-sm font-medium"
                  style={{ color: '#5A4A5C' }}
                >
                  {value}
                </motion.a>
              ))}

              {/* Language Selector */}
              <div className="relative">
                <motion.button
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background: '#FFE5EC', color: '#2D1B2E' }}
                >
                  {lang.toUpperCase()} ▾
                </motion.button>

                {languageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 right-0 bg-white rounded-2xl shadow-xl overflow-hidden"
                    style={{ border: '2px solid #FFE5EC' }}
                  >
                    {(['es', 'ca', 'en'] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setLanguageDropdownOpen(false);
                        }}
                        className={`block w-full px-6 py-3 text-sm text-left transition-colors ${lang === l ? 'font-bold' : ''
                          }`}
                        style={{
                          background: lang === l ? '#FFE5EC' : 'white',
                          color: '#2D1B2E'
                        }}
                      >
                        {l === 'es' ? 'Español' : l === 'ca' ? 'Català' : 'English'}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="md:hidden bg-white"
            style={{ borderTop: '2px solid #FFE5EC' }}
          >
            <div className="px-6 py-4 space-y-3">
              {Object.entries(t.nav).map(([key, value]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block"
                  style={{ color: '#5A4A5C' }}
                >
                  {value}
                </a>
              ))}
              <div className="pt-2 flex gap-2">
                {(['es', 'ca', 'en'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className="px-4 py-2 rounded-full text-xs font-medium"
                    style={{
                      background: lang === l ? '#FF6B9D' : '#FFE5EC',
                      color: lang === l ? 'white' : '#2D1B2E'
                    }}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ background: '#E8F5E9', border: '2px solid #81C784' }}
              >
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: '#4CAF50' }}></div>
                <span className="text-sm font-medium" style={{ color: '#2E7D32' }}>{t.hero.available}</span>
              </motion.div>

              <h1 className="mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <div className="text-2xl mb-2" style={{ color: '#5A4A5C' }}>{t.hero.greeting}</div>
                <div className="text-6xl font-bold mb-2" style={{ color: '#2D1B2E' }}>{t.hero.name}</div>
                <div className="text-5xl font-bold" style={{
                  background: 'linear-gradient(135deg, #FF6B9D 0%, #C44569 50%, #FFA07A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {t.hero.surname}
                </div>
              </h1>

              <p className="text-xl mb-8" style={{ color: '#5A4A5C' }}>
                {t.hero.role}
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href={cvPdf}
                  download="Laia_Perez_Prados_CV.pdf"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #FF6B9D, #C44569)' }}
                >
                  <Download className="w-5 h-5" />
                  {t.hero.downloadCV}
                </motion.a>

                <motion.a
                  href="mailto:laiaperez0612@gmail.com"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium"
                  style={{ background: 'white', color: '#2D1B2E', border: '2px solid #FFE5EC' }}
                >
                  <Mail className="w-5 h-5" />
                  Email
                </motion.a>
              </div>

              <div className="flex gap-3 mt-6">
                <motion.a
                  href="https://www.linkedin.com/in/laia-perez-prados/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, rotate: 5 }}
                  className="p-3 rounded-2xl shadow-md"
                  style={{ background: '#FFE5EC' }}
                >
                  <Linkedin className="w-6 h-6" style={{ color: '#FF6B9D' }} />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, rotate: -5 }}
                  className="p-3 rounded-2xl shadow-md"
                  style={{ background: '#E3F2FD' }}
                >
                  <Github className="w-6 h-6" style={{ color: '#42A5F5' }} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative max-w-sm mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2">
                <img src={photoImg} alt="Laia Perez Prados" className="w-full h-auto" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(255,107,157,0.2), transparent)' }}></div>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-80"
                style={{ background: 'linear-gradient(135deg, #FFE5EC, #FFC1CC)' }}
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-70"
                style={{ background: 'linear-gradient(135deg, #FFE5EC, #FFC1CC)' }}
              />
            </motion.div>
          </div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 p-8 rounded-3xl shadow-lg"
            style={{ background: 'white', border: '3px solid #FFE5EC' }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#2D1B2E' }}>
                  {lang === 'es' ? 'Sobre mí' : lang === 'ca' ? 'Sobre mi' : 'About me'}
                </h3>
                <p className="text-lg mb-3 leading-relaxed" style={{ color: '#5A4A5C' }}>
                  {t.about.intro}
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#5A4A5C' }}>
                  {t.about.current}
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl" style={{ background: '#FFF5F7', border: '2px solid #FFE5EC' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5" style={{ color: '#C44569' }} />
                    <span className="text-sm font-medium" style={{ color: '#5A4A5C' }}>{t.about.location}</span>
                  </div>
                  <p className="font-bold text-lg" style={{ color: '#2D1B2E' }}>Badalona, 08915</p>
                </div>

                <div className="p-4 rounded-2xl" style={{ background: '#FFF5F7', border: '2px solid #FFE5EC' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-5 h-5" style={{ color: '#C44569' }} />
                    <span className="text-sm font-medium" style={{ color: '#5A4A5C' }}>{t.about.phone}</span>
                  </div>
                  <p className="font-bold text-lg" style={{ color: '#2D1B2E' }}>640 91 99 11</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-12"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#2D1B2E' }}
          >
            {t.projects.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { ...t.projects.project1, url: 'https://home-laia-3d.vercel.app/', tech: ['Vue.js', 'Three.js', 'Drag & Drop'], color: '#FFF5F7', borderColor: '#FFE5EC', image: laiatica3DImg },
              { ...t.projects.project2, url: 'https://ensella-podcast.vercel.app/', tech: ['React', 'Vite', 'JavaScript'], color: '#F0F9FF', borderColor: '#E0E7FF', image: podcastImg }
            ].map((project, i) => (
              <motion.a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotate: i % 2 === 0 ? -2 : 2 }}
                className="group p-8 rounded-3xl shadow-lg relative overflow-hidden"
                style={{ background: project.color, border: `3px solid ${project.borderColor}` }}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: '#2D1B2E' }}>
                    {project.title}
                  </h3>
                  <motion.div
                    whileHover={{ rotate: 45, scale: 1.2 }}
                    className="p-3 rounded-full"
                    style={{ background: 'white', border: `2px solid ${project.borderColor}` }}
                  >
                    <ExternalLink className="w-6 h-6" style={{ color: '#2D1B2E' }} />
                  </motion.div>
                </div>
                <div className="mb-6">
                  <ImageWithFallback
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-96 object-cover rounded-2xl"
                    style={{ border: `2px solid ${project.borderColor}` }}
                  />
                </div>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: '#5A4A5C' }}>
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{ background: 'white', color: '#2D1B2E', border: `2px solid ${project.borderColor}` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Decorative blob */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-30" style={{ background: project.borderColor }} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6" style={{ background: 'rgba(255, 229, 236, 0.2)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-12"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#2D1B2E' }}
          >
            {t.experience.title}
          </motion.h2>

          <div className="space-y-6">
            {[
              { role: t.experience.developer, company: 'Esdi Systems', date: `Feb 2026 - ${t.experience.current}`, desc: 'PHP, Python, HTML 5, CSS3, JavaScript, Angular, WordPress, Elementor, GitHub, Tailwind, Odoo, UI/UX.', current: true },
              { role: t.experience.intern, company: 'Esdi Systems', date: 'Oct 2025 - Feb 2026', desc: 'WordPress, Python, PHP, HTML 5, CSS3, JavaScript, GitHub, SQL.', current: false },
              { role: t.experience.intern, company: 'Mr. Bogart', date: 'Jun 2025 - Oct 2025', desc: 'WordPress, Elementor, hosting.', current: false }
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="p-8 rounded-3xl shadow-lg"
                style={{ background: 'white', border: '3px solid #FFE5EC' }}
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: '#2D1B2E' }}>
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full text-sm font-bold" style={{ background: '#FFE5EC', color: '#C44569' }}>
                          {t.experience.current}
                        </span>
                      )}
                    </div>
                    <p className="text-xl font-medium" style={{ color: '#FF6B9D' }}>{exp.company}</p>
                  </div>
                  <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: '#F5F5F5', color: '#5A4A5C' }}>
                    {exp.date}
                  </span>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: '#5A4A5C' }}>{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-8"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#2D1B2E' }}
          >
            {t.skills.title}
          </motion.h2>

          <div className="flex flex-wrap gap-3 mb-10">
            {(['all', 'frontend', 'backend', 'tools'] as const).map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setSkillFilter(filter)}
                whileHover={{ scale: 1.1, rotate: filter === skillFilter ? 0 : 5 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full text-sm font-bold shadow-md"
                style={{
                  background: skillFilter === filter ? 'linear-gradient(135deg, #FF6B9D, #C44569)' : 'white',
                  color: skillFilter === filter ? 'white' : '#2D1B2E',
                  border: skillFilter === filter ? 'none' : '2px solid #FFE5EC'
                }}
              >
                {t.skills[filter]}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {getFilteredSkills().map((skill, i) => (
              <motion.div
                key={`${skillFilter}-${skill.name}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -10, rotate: Math.random() > 0.5 ? 5 : -5 }}
                className="p-6 rounded-2xl text-center shadow-md"
                style={{ background: 'white', border: '2px solid #E0E0E0' }}
              >
                <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <p className="text-xs font-bold" style={{ color: '#2D1B2E' }}>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 px-6" style={{ background: 'rgba(255, 245, 247, 0.3)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-12"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#2D1B2E' }}
          >
            {t.about.languages}
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { lang: lang === 'es' ? 'Español' : lang === 'ca' ? 'Espanyol' : 'Spanish', level: lang === 'es' ? 'Nativo' : lang === 'ca' ? 'Natiu' : 'Native', percentage: 100 },
              { lang: lang === 'es' ? 'Catalán' : lang === 'ca' ? 'Català' : 'Catalan', level: 'C1', percentage: 90 },
              { lang: lang === 'es' ? 'Inglés' : lang === 'ca' ? 'Anglès' : 'English', level: 'B2', percentage: 70 },
              { lang: lang === 'es' ? 'Francés' : lang === 'ca' ? 'Francès' : 'French', level: 'A1', percentage: 30 }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 3 : -3 }}
                className="p-6 rounded-3xl shadow-lg text-center"
                style={{ background: 'white', border: '3px solid #FFE5EC' }}
              >
                <h4 className="text-xl font-bold mb-4 mt-2" style={{ color: '#2D1B2E' }}>{item.lang}</h4>
                <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4" style={{ background: '#FFE5EC', color: '#C44569' }}>
                  {item.level}
                </span>
                <div className="h-3 rounded-full overflow-hidden" style={{ background: '#FFE5EC' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #FF6B9D, #C44569)' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-12"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#2D1B2E' }}
          >
            {t.certifications.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="rounded-3xl shadow-lg overflow-hidden"
                style={{ background: 'white', border: '3px solid #FFE5EC' }}
              >
                <div className="w-full h-64 overflow-hidden bg-gray-100">
                  <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-2" style={{ color: '#2D1B2E' }}>{cert.name}</h4>
                  <p className="text-sm" style={{ color: '#8A7A8C' }}>{cert.org} · {cert.year}</p>
                  <p className="text-xs mt-2" style={{ color: '#B099B4' }}>{cert.hours} horas</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl font-bold mb-6"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#2D1B2E' }}
          >
            {t.contact.title}
          </motion.h2>
          <p className="text-2xl mb-12" style={{ color: '#5A4A5C' }}>
            {t.contact.subtitle}
          </p>

          <motion.a
            href="https://wa.me/34640919911"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium text-white shadow-lg mb-12"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            {t.contact.whatsapp}
          </motion.a>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Mail, label: 'Email', value: 'laiaperez0612@gmail.com', href: 'mailto:laiaperez0612@gmail.com', bg: '#FFF5F7', border: '#FFE5EC' },
              { icon: Phone, label: t.about.phone, value: '640 91 99 11', href: 'tel:+34640919911', bg: '#FFF5F7', border: '#FFE5EC' },
              { icon: Linkedin, label: 'LinkedIn', value: 'Laia Perez Prados', href: 'https://www.linkedin.com/in/laia-perez-prados/', bg: '#F5F5F5', border: '#E0E0E0' }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.icon === Linkedin ? '_blank' : undefined}
                rel={item.icon === Linkedin ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -10, rotate: i % 2 === 0 ? 3 : -3 }}
                className="p-6 rounded-3xl shadow-lg"
                style={{ background: item.bg, border: `3px solid ${item.border}` }}
              >
                <div className="inline-flex p-4 rounded-2xl mb-4" style={{ background: 'white' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#2D1B2E' }} />
                </div>
                <p className="text-sm font-medium mb-1" style={{ color: '#5A4A5C' }}>{item.label}</p>
                <p className="font-bold" style={{ color: '#2D1B2E' }}>{item.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center" style={{ borderTop: '3px solid #FFE5EC' }}>
        <p className="text-lg" style={{ color: '#8A7A8C' }}>
          © 2026 Laia Perez Prados
        </p>
      </footer>
    </div>
  );
}
