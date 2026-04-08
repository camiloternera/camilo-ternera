import { c as createComponent, $ as $$Image } from './_astro_assets_5C3ECssj.mjs';
import 'piccolore';
import { c as createRenderInstruction, m as maybeRenderHead, r as renderComponent, b as addAttribute, d as renderTemplate, e as renderHead, f as renderSlot } from './entrypoint_EytDXm3N.mjs';
import { Sun, Moon, Menu, X, ArrowRight, MapPin, Github, Linkedin, Mail, Code2, Server, Database, Palette, Wrench, Terminal, Briefcase, Calendar, Phone, Send } from 'lucide-react';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const personal = {"name":"Camilo Ternera","ubication":"Barranquilla, Colombia"};
const data = {
  personal};

const profileImage = new Proxy({"src":"/_astro/recortada 3.C11m1_bj.jpg","width":646,"height":772,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/proyectos_personales/camiloternera/src/assets/img/recortada 3.jpg";
							}
							
							return target[name];
						}
					});

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  const { personal } = data;
  const links = [
    { name: "Sobre mí", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Experiencia", href: "#experience" },
    { name: "Contacto", href: "#contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"> <div class="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between"> <!-- Logo --> <a href="#" class="flex items-center gap-2 text-xl font-bold tracking-tighter hover:text-primary transition-colors"> <div class="md:hidden w-8 h-8 rounded-full overflow-hidden border border-border"> ${renderComponent($$result, "Image", $$Image, { "src": profileImage, "alt": personal.name, "width": 32, "height": 32, "class": "w-full h-full object-cover" })} </div> <span class="hidden md:block">CT</span> </a> <!-- Desktop Menu --> <nav class="hidden md:flex items-center gap-8"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"> ${link.name} </a>`)} </nav> <!-- CTA & Theme Toggle --> <div class="flex items-center gap-4"> <button id="theme-toggle" class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Alternar tema"> ${renderComponent($$result, "Sun", Sun, { "className": "h-4 w-4 hidden dark:block" })} ${renderComponent($$result, "Moon", Moon, { "className": "h-4 w-4 block dark:hidden" })} </button> <div class="hidden md:flex"> <a href="#contact" class="inline-flex h-9 items-center justify-center rounded-full border border-border bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
Hablemos
</a> </div> <!-- Mobile Menu Button --> <button id="mobile-menu-btn" class="md:hidden text-foreground p-2" aria-label="Menu"> ${renderComponent($$result, "Menu", Menu, { "className": "w-6 h-6", "id": "menu-icon" })} ${renderComponent($$result, "X", X, { "className": "w-6 h-6 hidden", "id": "close-icon" })} </button> </div> </div> <!-- Mobile Menu Dropdown --> <div id="mobile-menu" class="hidden md:hidden border-b border-border bg-background"> <nav class="flex flex-col p-4 gap-4"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-base font-medium text-muted-foreground hover:text-accent transition-colors"> ${link.name} </a>`)} <a href="#contact" class="inline-flex h-10 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
Hablemos
</a> </nav> </div> </header> ${renderScript($$result, "C:/proyectos_personales/camiloternera/src/components/NavBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos_personales/camiloternera/src/components/NavBar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="py-6 border-t border-border bg-background/50"> <div class="container mx-auto px-4 text-center"> <p class="text-sm text-muted-foreground">
&copy; ${year} Camilo Ternera. Todos los derechos reservados.
</p> </div> </footer>`;
}, "C:/proyectos_personales/camiloternera/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeInit = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>\n    const getTheme = () => {\n        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {\n            return localStorage.getItem('theme');\n        }\n        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n            return 'dark';\n        }\n        return 'light';\n    };\n    const theme = getTheme();\n    if (theme === 'light') {\n        document.documentElement.classList.remove('dark');\n    } else {\n        document.documentElement.classList.add('dark');\n    }\n    window.localStorage.setItem('theme', theme);\n<\/script>"])));
}, "C:/proyectos_personales/camiloternera/src/components/ThemeInit.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Camilo Ternera | Desarrollador Web Full Stack",
    description = "Portafolio de Camilo Ternera, Tecnólogo en Análisis y Desarrollo de Sistemas de Información especializado en crear experiencias web excepcionales."
  } = Astro2.props;
  return renderTemplate`<html lang="es" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderComponent($$result, "ThemeInit", $$ThemeInit, {})}${renderHead()}</head> <body class="bg-background text-foreground min-h-screen flex flex-col"> ${renderComponent($$result, "NavBar", $$NavBar, {})} <main class="flex-1 pt-16"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/proyectos_personales/camiloternera/src/layouts/BaseLayout.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const personal = data.personal;
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="min-h-[90vh] flex flex-col justify-center py-20 animate-fade-in"> <div class="container mx-auto px-4 md:px-6"> <div class="grid md:grid-cols-2 gap-12 items-center"> <div class="max-w-3xl space-y-6"> <h2 class="text-accent font-medium tracking-wide text-lg animate-slide-in-bottom animation-delay-100">Hola, mi nombre es</h2> <div class="space-y-4"> <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-foreground animate-slide-in-bottom animation-delay-200">${personal.name}</h1> <h2 class="text-4xl md:text-6xl font-bold tracking-tight text-muted-foreground animate-slide-in-bottom animation-delay-300">Construyo experiencias web excepcionales</h2> </div> <p class="max-w-xl text-lg text-muted-foreground leading-relaxed animate-slide-in-bottom animation-delay-400">
Soy un <strong class="text-foreground">Tecnólogo en Análisis y Desarrollo de Sistemas de Información</strong>, especializado en crear páginas web eficaces y sistemas de información
                    innovadores que resuelven problemas reales.
</p> <div class="flex flex-wrap gap-4 pt-4 animate-slide-in-bottom animation-delay-500"> <a href="#experience" class="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-base font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
Ver mi trabajo
${renderComponent($$result, "ArrowRight", ArrowRight, { "className": "ml-2 h-4 w-4" })} </a> <a href="/cv.pdf" target="_blank" class="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
Descargar CV
</a> </div> <div class="flex items-center gap-2 text-muted-foreground animate-slide-in-bottom animation-delay-550"> ${renderComponent($$result, "MapPin", MapPin, { "className": "h-5 w-5 text-accent" })} <span class="text-base font-medium">${personal.ubication}</span> </div> <div class="flex gap-6 animate-slide-in-bottom animation-delay-600"> <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-accent transition-colors"> ${renderComponent($$result, "Github", Github, { "className": "h-6 w-6" })} <span class="sr-only">GitHub</span> </a> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-accent transition-colors"> ${renderComponent($$result, "Linkedin", Linkedin, { "className": "h-6 w-6" })} <span class="sr-only">LinkedIn</span> </a> <a href="mailto:contacto@camiloternera.com" class="text-muted-foreground hover:text-accent transition-colors"> ${renderComponent($$result, "Mail", Mail, { "className": "h-6 w-6" })} <span class="sr-only">Email</span> </a> </div> </div> <div class="hidden md:flex justify-center animate-fade-in animation-delay-700"> <div class="relative group"> <div class="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div> ${renderComponent($$result, "Image", $$Image, { "src": profileImage, "alt": personal.name, "width": 320, "height": 320, "class": "relative w-80 h-100 object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" })} </div> </div> </div> </div> </section>`;
}, "C:/proyectos_personales/camiloternera/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-20 bg-secondary/30 animate-fade-in"> <div class="container mx-auto px-4 md:px-6"> <div class="text-left mb-12"> <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">Sobre mí</h2> <div class="h-1 w-20 bg-accent rounded-full"></div> </div> <div class="grid md:grid-cols-2 gap-12 items-start"> <div class="space-y-6 text-muted-foreground text-lg leading-relaxed"> <p>
Soy un desarrollador web apasionado por crear soluciones digitales que marquen la diferencia. Mi enfoque está en construir aplicaciones web eficientes, escalables y centradas en el
                    usuario.
</p> <p>
Con experiencia en análisis y desarrollo de sistemas de información, me especializo en diseñar e implementar sistemas que se alinean perfectamente con los requerimientos del
                    cliente y las mejores prácticas de la industria.
</p> <p>
Estoy comprometido con el aprendizaje continuo y la innovación, siempre buscando nuevas tecnologías y metodologías para mejorar mis habilidades y entregar productos de alta
                    calidad.
</p> </div> <div class="bg-card border border-border rounded-xl p-8 shadow-sm"> <h3 class="text-xl font-bold text-foreground mb-6">Mi enfoque</h3> <ul class="space-y-6"> <li class="flex gap-3"> <span class="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0"></span> <div> <h4 class="font-medium text-foreground">Desarrollo centrado en el usuario</h4> <p class="text-sm text-muted-foreground mt-1">Diseño interfaces intuitivas y accesibles</p> </div> </li> <li class="flex gap-3"> <span class="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0"></span> <div> <h4 class="font-medium text-foreground">Código limpio y mantenible</h4> <p class="text-sm text-muted-foreground mt-1">Sigo las mejores prácticas de desarrollo</p> </div> </li> <li class="flex gap-3"> <span class="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0"></span> <div> <h4 class="font-medium text-foreground">Soluciones escalables</h4> <p class="text-sm text-muted-foreground mt-1">Construyo sistemas preparados para crecer</p> </div> </li> <li class="flex gap-3"> <span class="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0"></span> <div> <h4 class="font-medium text-foreground">Colaboración efectiva</h4> <p class="text-sm text-muted-foreground mt-1">Trabajo en equipo y comunicación clara</p> </div> </li> </ul> </div> </div> </div> </section>`;
}, "C:/proyectos_personales/camiloternera/src/components/About.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Skills;
  const skills = [
    {
      category: "Frontend",
      icon: Code2,
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Astro"]
    },
    {
      category: "Backend",
      icon: Server,
      items: ["Node.js", "Express", "API REST", "Authentication", "Server Actions"]
    },
    {
      category: "Bases de Datos",
      icon: Database,
      items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Prisma"]
    },
    {
      category: "Diseño",
      icon: Palette,
      items: ["UI/UX", "Responsive Design", "Figma", "Wireframing", "Prototyping"]
    },
    {
      category: "Herramientas",
      icon: Wrench,
      items: ["Git", "GitHub", "VS Code", "Vercel", "npm/pnpm"]
    },
    {
      category: "Metodologías",
      icon: Terminal,
      items: ["Agile", "Scrum", "Clean Code", "Testing", "CI/CD"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="py-20 animate-fade-in"> <div class="container mx-auto px-4 md:px-6"> <div class="text-center mb-16 space-y-4"> <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Habilidades Técnicas</h2> <div class="h-1 w-20 bg-accent mx-auto rounded-full"></div> <p class="text-muted-foreground max-w-2xl mx-auto">Tecnologías y herramientas con las que trabajo para crear soluciones web completas.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${skills.map((skill) => renderTemplate`<div class="group relative overflow-hidden rounded-xl border border-border bg-card p-6 hover:border-accent/50 transition-colors duration-300"> <div class="flex items-center gap-4 mb-4"> <div class="p-2 rounded-lg bg-secondary text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300"> ${renderComponent($$result, "skill.icon", skill.icon, { "className": "h-6 w-6" })} </div> <h3 class="font-semibold text-xl text-card-foreground">${skill.category}</h3> </div> <div class="flex flex-wrap gap-2"> ${skill.items.map((item) => renderTemplate`<span class="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"> ${item} </span>`)} </div> </div>`)} </div> </div> </section>`;
}, "C:/proyectos_personales/camiloternera/src/components/Skills.astro", void 0);

const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, company, period, description, achievements, tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-accent/40 transition-colors"> <div class="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2"> <div class="flex items-center gap-3"> <div class="p-2 rounded-lg bg-secondary/50 text-accent"> ${renderComponent($$result, "Briefcase", Briefcase, { "className": "h-5 w-5" })} </div> <div> <h3 class="text-xl font-bold text-foreground">${title}</h3> <p class="text-base text-muted-foreground">${company}</p> </div> </div> <div class="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full w-fit"> ${renderComponent($$result, "Calendar", Calendar, { "className": "h-4 w-4" })} <span>${period}</span> </div> </div> <p class="text-muted-foreground mb-6 leading-relaxed"> ${description} </p> <div class="mb-6"> <h4 class="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Logros destacados:</h4> <ul class="space-y-2"> ${achievements.map((achievement) => renderTemplate`<li class="flex items-start gap-2 text-muted-foreground"> <span class="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span> <span>${achievement}</span> </li>`)} </ul> </div> <div class="flex flex-wrap gap-2 pt-2 border-t border-border/50"> ${tags.map((tag) => renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground border border-transparent hover:border-accent/30 transition-colors"> ${tag} </span>`)} </div> </div>`;
}, "C:/proyectos_personales/camiloternera/src/components/ExperienceItem.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const jobs = [
    {
      title: "Desarrollador Web Full Stack",
      company: "Freelance",
      period: "2023 - Presente",
      description: "Desarrollo de aplicaciones web personalizadas para diversos clientes, implementando soluciones completas desde el diseño hasta el despliegue.",
      achievements: ["Desarrollo de más de 10 proyectos web exitosos", "Implementación de sistemas de gestión empresarial", "Optimización de rendimiento y SEO"],
      tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"]
    },
    {
      title: "Desarrollador Frontend",
      company: "Proyectos Académicos",
      period: "2022 - 2023",
      description: "Creación de interfaces de usuario modernas y responsivas, enfocadas en la experiencia del usuario y las mejores prácticas de desarrollo.",
      achievements: ["Desarrollo de portafolios y landing pages", "Implementación de diseños responsive", "Colaboración en equipos ágiles"],
      tags: ["HTML", "CSS", "JavaScript", "React", "Git"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="py-20 animate-fade-in"> <div class="container mx-auto px-4 md:px-6"> <div class="text-left mb-12"> <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">Experiencia</h2> <div class="h-1 w-20 bg-accent rounded-full mb-4"></div> <p class="text-muted-foreground">Mi trayectoria profesional en el desarrollo de software y sistemas de información.</p> </div> <div class="space-y-8"> ${jobs.map((job) => renderTemplate`${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...job })}`)} </div> </div> </section>`;
}, "C:/proyectos_personales/camiloternera/src/components/Experience.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-20 bg-secondary/30 animate-fade-in"> <div class="container mx-auto px-4 md:px-6"> <div class="text-center mb-16 space-y-4"> <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Trabajemos juntos</h2> <div class="h-1 w-20 bg-accent mx-auto rounded-full"></div> <p class="text-muted-foreground max-w-2xl mx-auto">¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte a hacerlo realidad.</p> </div> <div class="grid md:grid-cols-2 gap-12 bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm"> <!-- Contact Info --> <div class="space-y-8"> <div> <h3 class="text-2xl font-bold text-foreground mb-6">Información de contacto</h3> <p class="text-muted-foreground mb-8">Estoy disponible para proyectos freelance, colaboraciones o simplemente para conversar sobre tecnología y desarrollo web.</p> </div> <div class="space-y-6"> <div class="flex items-start gap-4"> <div class="p-3 rounded-lg bg-secondary text-accent"> ${renderComponent($$result, "Mail", Mail, { "className": "h-6 w-6" })} </div> <div> <h4 class="font-medium text-foreground">Email</h4> <a href="mailto:contacto@camiloternera.com" class="text-muted-foreground hover:text-accent transition-colors"> contacto@camiloternera.com </a> </div> </div> <div class="flex items-start gap-4"> <div class="p-3 rounded-lg bg-secondary text-accent"> ${renderComponent($$result, "Phone", Phone, { "className": "h-6 w-6" })} </div> <div> <h4 class="font-medium text-foreground">Teléfono</h4> <a href="tel:+573001234567" class="text-muted-foreground hover:text-accent transition-colors"> +57 300 123 4567 </a> </div> </div> <div class="flex items-start gap-4"> <div class="p-3 rounded-lg bg-secondary text-accent"> ${renderComponent($$result, "MapPin", MapPin, { "className": "h-6 w-6" })} </div> <div> <h4 class="font-medium text-foreground">Ubicación</h4> <p class="text-muted-foreground">Colombia</p> </div> </div> </div> </div> <!-- Form --> <div> <h3 class="text-2xl font-bold text-foreground mb-6">Envíame un mensaje</h3> <p class="text-muted-foreground mb-8">Completa el formulario y me pondré en contacto contigo lo antes posible.</p> <form id="contact-form" class="space-y-4"> <div class="space-y-2"> <label for="name" class="text-sm font-medium text-foreground">Nombre</label> <input type="text" id="name" name="name" required class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Tu nombre"> </div> <div class="space-y-2"> <label for="email" class="text-sm font-medium text-foreground">Email</label> <input type="email" id="email" name="email" required class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="tu@email.com"> </div> <div class="space-y-2"> <label for="message" class="text-sm font-medium text-foreground">Mensaje</label> <textarea id="message" name="message" rows="4" required class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none" placeholder="¿Cómo puedo ayudarte?"></textarea> </div> <button type="submit" id="submit-btn" class="inline-flex w-full items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground shadow transition-all hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"> <span>Enviar mensaje</span> ${renderComponent($$result, "Send", Send, { "className": "ml-2 h-4 w-4" })} </button> <p id="form-status" class="text-sm text-center mt-4 hidden"></p> </form> </div> </div> </div> </section> ${renderScript($$result, "C:/proyectos_personales/camiloternera/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos_personales/camiloternera/src/components/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "C:/proyectos_personales/camiloternera/src/pages/index.astro", void 0);

const $$file = "C:/proyectos_personales/camiloternera/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
