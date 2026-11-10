import {
  Blocks,
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Globe2,
  Layers,
  LineChart,
  Palette,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

export const contact = {
  email: 'hr@kodewartechnologies.com',
  careersEmail: 'hr@kodewartechnologies.com',
  phone: '+91 7660886182',
  phoneHref: '+917660886182',
  address: 'kodewar technologies, 4th Floor, Gupta Villa, 9-29-19/A, Balaji Nagar, Asilmetta, Visakhapatnam, Andhra Pradesh 530003',
  hours: 'Mon – Fri, 9:30 AM – 6:30 PM IST',
};

export const stats = [
  { value: 50, suffix: '+', label: 'Products delivered' },
  { value: 30, suffix: '+', label: 'Global clients' },
  { value: 15, suffix: '+', label: 'Specialists in-house' },
  { value: 5, suffix: ' yrs', label: 'Engineering excellence' },
];

export const services = [
  {
    slug: 'web-development',
    number: '01',
    title: 'Web Development',
    icon: Globe2,
    tagline: 'Fast, resilient, beautiful web products.',
    description:
      'Marketing sites, dashboards and complex web applications engineered for speed, scale and conversion.',
    detail:
      'We build production-grade web experiences on React, Next.js and modern edge infrastructure. Every build is performance-budgeted, accessible, SEO-ready and designed to grow with your business.',
    deliverables: ['React & Next.js applications', 'Design-system implementation', 'Core Web Vitals optimisation', 'Headless CMS integration'],
  },
  {
    slug: 'mobile-apps',
    number: '02',
    title: 'Mobile App Development',
    icon: Smartphone,
    tagline: 'Native-feel products in every pocket.',
    description:
      'iOS and Android applications with fluid motion, offline-first architecture and store-ready polish.',
    detail:
      'From first prototype to App Store launch, we craft mobile products that feel effortless. Our teams work in React Native and Flutter with native modules where performance demands it.',
    deliverables: ['React Native & Flutter builds', 'App Store / Play Store release', 'Push, payments & analytics', 'Offline-first architecture'],
  },
  {
    slug: 'custom-software',
    number: '03',
    title: 'Custom Software',
    icon: Code2,
    tagline: 'Software shaped around your operation.',
    description:
      'Purpose-built platforms, internal tools and enterprise systems that remove friction and unlock scale.',
    detail:
      'We map your workflow, challenge the assumptions and engineer systems that fit the way your business actually runs — not the other way around. Built to be maintained, documented and extended.',
    deliverables: ['Enterprise platforms', 'Workflow automation', 'Legacy modernisation', 'Dedicated product squads'],
  },
  {
    slug: 'ui-ux-design',
    number: '04',
    title: 'UI / UX Design',
    icon: Palette,
    tagline: 'Clarity, crafted into every interaction.',
    description:
      'Research-led interfaces, design systems and prototypes that make complex products feel obvious.',
    detail:
      'Our design practice blends product thinking with visual craft. We validate flows with real users, build reusable systems in Figma and hand off with pixel-level care.',
    deliverables: ['Product discovery & research', 'High-fidelity prototyping', 'Scalable design systems', 'Usability testing'],
  },
  {
    slug: 'api-backend',
    number: '05',
    title: 'API & Backend',
    icon: Layers,
    tagline: 'The invisible engineering behind great products.',
    description:
      'Secure, observable APIs and distributed backends built to carry serious traffic without drama.',
    detail:
      'Node.js, Python and Go services with clean contracts, strong typing, automated testing and infrastructure-as-code. We design for failure, measure everything and document the edge cases.',
    deliverables: ['REST & GraphQL APIs', 'Microservice architecture', 'PostgreSQL / Redis / queues', 'CI/CD & observability'],
  },
  {
    slug: 'digital-marketing',
    number: '06',
    title: 'Digital Marketing',
    icon: LineChart,
    tagline: 'Attention, earned and measured.',
    description:
      'Search, social and performance programmes that turn visibility into a predictable revenue channel.',
    detail:
      'We connect brand, content and performance into one measurable engine — from technical SEO foundations to full-funnel paid campaigns and marketing automation.',
    deliverables: ['Technical & content SEO', 'Performance campaigns', 'Marketing automation', 'Analytics & attribution'],
  },
  {
    slug: 'ai-machine-learning',
    number: '07',
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    tagline: 'Intelligence, built into the product.',
    description:
      'LLM integrations, computer vision and predictive models that create measurable operational advantage.',
    detail:
      'We move AI from demo to dependable production: retrieval pipelines, evaluation harnesses, guardrails and human-in-the-loop workflows that teams can actually trust.',
    deliverables: ['LLM & RAG systems', 'Predictive modelling', 'Computer vision', 'AI product strategy'],
  },
  {
    slug: 'cloud-computing',
    number: '08',
    title: 'Cloud Computing',
    icon: Cloud,
    tagline: 'Infrastructure that disappears into reliability.',
    description:
      'Cloud architecture, migration and DevOps that keep products fast, resilient and cost-efficient.',
    detail:
      'Certified engineers design and operate AWS, Azure and GCP environments with infrastructure-as-code, zero-downtime delivery and security baked in from day one.',
    deliverables: ['Cloud migration & architecture', 'Kubernetes & containers', 'Cost optimisation', '24/7 monitoring'],
  },
];

export const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: 'Engineering discipline',
    text: 'Typed code, automated tests, code review and documentation. Quality is a process, not a promise.',
  },
  {
    icon: Zap,
    title: 'Speed without shortcuts',
    text: 'Two-week delivery cycles, transparent roadmaps and working software in your hands early.',
  },
  {
    icon: Sparkles,
    title: 'Design that differentiates',
    text: 'Every interface is shaped by a senior designer — never pulled from a template.',
  },
  {
    icon: Bot,
    title: 'AI-native thinking',
    text: 'We look for the intelligent advantage inside every product, not AI as a bolt-on feature.',
  },
];

export const projects = [
  {
    title: 'Charu Jewels',
    category: 'E-commerce · Brand Experience',
    year: '2025',
    image: '/assets/images/project-charu.jpg',
    summary: 'A cinematic digital flagship for a heritage jewellery house, built for high-intent luxury buyers.',
    metrics: ['+64% online enquiries', '1.2s LCP'],
    tags: ['React', 'Shopify', 'Art Direction'],
  },
  {
    title: 'DGMC Media',
    category: 'Education · Digital Platform',
    year: '2025',
    image: '/assets/images/project-dgmc.jpg',
    summary: 'Admissions platform and campaign system for one of India’s leading media colleges.',
    metrics: ['3.4× applications', '12k monthly users'],
    tags: ['Next.js', 'CMS', 'Performance'],
  },
  {
    title: 'House of Knots',
    category: 'D2C · Commerce',
    year: '2024',
    image: '/assets/images/project-house.jpg',
    summary: 'A tactile commerce experience that lets handcrafted rugs speak for themselves.',
    metrics: ['+41% AOV', '38% faster checkout'],
    tags: ['Headless commerce', 'UX', 'SEO'],
  },
  {
    title: 'CIBO Hospitality',
    category: 'Hospitality · Growth',
    year: '2024',
    image: '/assets/images/project-cibo.jpg',
    summary: 'Brand, website and always-on performance engine for a premium hospitality group.',
    metrics: ['4.9× ROAS', '2.1× direct bookings'],
    tags: ['Brand', 'Web', 'Performance'],
  },
];

export const techStack = [
  { name: 'React', group: 'Frontend' },
  { name: 'Next.js', group: 'Frontend' },
  { name: 'TypeScript', group: 'Language' },
  { name: 'Node.js', group: 'Backend' },
  { name: 'Python', group: 'Backend' },
  { name: 'PostgreSQL', group: 'Data' },
  { name: 'AWS', group: 'Cloud' },
  { name: 'Docker', group: 'DevOps' },
  { name: 'Kubernetes', group: 'DevOps' },
  { name: 'TensorFlow', group: 'AI / ML' },
  { name: 'Flutter', group: 'Mobile' },
  { name: 'Figma', group: 'Design' },
];

export const clients = [
  'Surya Informatics',
  'Hexaware',
  'Neopat',
  'OneGene India',
  'Neyamo',
  'Witzenmann',
  'Sun TV',
  'Simplotel',
  'Concentrix',
  'Go Digit',
  'Seagate',
  'eLitmus',
  'Atos',
  'Bajaj Finserv',
  'MyCaptain',
  'PlanetSpark',
  'Zoho',
  'IndiaMART',
];

export const values = [
  {
    icon: Rocket,
    title: 'Bias to build',
    text: 'We would rather ship something real and improve it than perfect an idea in isolation.',
  },
  {
    icon: ShieldCheck,
    title: 'Radical ownership',
    text: 'No hand-offs, no excuses. The person closest to the problem owns the outcome.',
  },
  {
    icon: Blocks,
    title: 'Clarity over cleverness',
    text: 'Simple systems, honest timelines and language everyone in the room can understand.',
  },
  {
    icon: Sparkles,
    title: 'Craft is non-negotiable',
    text: 'The last five percent — the easing, the edge case, the error message — is the work.',
  },
  {
    icon: Globe2,
    title: 'Think in decades',
    text: 'We architect for the business you are becoming, not just the one you are today.',
  },
  {
    icon: Zap,
    title: 'Momentum matters',
    text: 'Small, visible progress every week compounds into products people believe in.',
  },
];

export const journey = [
  {
    year: '2022',
    title: 'The Beginning of KODEWAR',
    text: 'KODEWAR TECHNOLOGIES was established in Visakhapatnam with a vision to deliver innovative, reliable and technology-driven digital solutions.'
  },
  {
    year: '2023',
    title: 'Building Our Foundation',
    text: 'We strengthened our capabilities in software development, web technologies and digital solutions, focusing on building meaningful client relationships.'
  },
  {
    year: '2024',
    title: 'Expanding Our Expertise',
    text: 'We expanded our service capabilities across web development, custom software, UI/UX design and emerging technologies to support evolving business needs.'
  },
  {
    year: '2025',
    title: 'Growing Our Impact',
    text: 'We expanded our industry presence, collaborated with businesses and introduced career development opportunities through internships and practical learning.'
  },
  {
    year: '2026',
    title: 'Engineering What Comes Next',
    text: 'Today, KODEWAR TECHNOLOGIES continues to empower businesses through innovative digital solutions, modern engineering practices and technology-driven transformation.'
  },
];

export const achievements = [
  { value: 50, suffix: '+', label: 'Enterprise engagements' },
  { value: 4.9, suffix: '/5', label: 'Average client rating', decimals: 1 },
  { value: 99.9, suffix: '%', label: 'Uptime delivered', decimals: 1 },
  { value: 100, suffix: '%', label: 'Projects documented' },
];

export const jobs = [
  {
    id: 'senior-react',
    title: 'Senior React Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Visakhapatnam / Remote',
    experience: '4–7 years',
    description:
      'Lead the architecture and delivery of complex React products, mentor engineers and raise the bar for frontend craft.',
    skills: ['React', 'TypeScript', 'Next.js', 'Testing'],
  },
  {
    id: 'ai-engineer',
    title: 'AI / ML Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Visakhapatnam / Hybrid',
    experience: '2–5 years',
    description:
      'Build production LLM systems, retrieval pipelines and evaluation frameworks for real enterprise workflows.',
    skills: ['Python', 'LLMs', 'PyTorch', 'AWS'],
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Visakhapatnam / Hybrid',
    experience: '3–6 years',
    description:
      'Own end-to-end product design — from discovery and flows to polished interfaces and scalable design systems.',
    skills: ['Figma', 'Design systems', 'Prototyping', 'Research'],
  },
  {
    id: 'backend-engineer',
    title: 'Backend Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote — India',
    experience: '3–6 years',
    description:
      'Design resilient APIs and data models, and operate services that stay calm under real production pressure.',
    skills: ['Node.js', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 'growth-marketer',
    title: 'Digital Growth Specialist',
    department: 'Growth',
    type: 'Full-time',
    location: 'Visakhapatnam',
    experience: '2–4 years',
    description:
      'Own paid and organic growth programmes across B2B and D2C accounts, with a bias for measurable outcomes.',
    skills: ['SEO', 'Performance ads', 'Analytics', 'Content'],
  },
  {
    id: 'qa-engineer',
    title: 'QA Automation Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Visakhapatnam / Remote',
    experience: '2–5 years',
    description:
      'Build reliable test automation and quality gates that let product teams ship quickly and confidently.',
    skills: ['Playwright', 'Cypress', 'API testing', 'CI/CD'],
  },
];

export const internships = [
  {
    id: 'frontend-intern',
    title: 'Frontend Development Intern',
    type: 'Internship',
    duration: '6 months',
    location: 'Visakhapatnam / Remote',
    description: 'Work alongside senior engineers on live React products. Strong HTML, CSS and JavaScript fundamentals required.',
  },
  {
    id: 'design-intern',
    title: 'UI / UX Design Intern',
    type: 'Internship',
    duration: '6 months',
    location: 'Visakhapatnam / Hybrid',
    description: 'Contribute to real discovery, interface design and design-system work with close senior mentorship.',
  },
  {
    id: 'ai-intern',
    title: 'AI / ML Intern',
    type: 'Internship',
    duration: '6 months',
    location: 'Visakhapatnam / Hybrid',
    description: 'Prototype and evaluate applied AI features, from retrieval pipelines to computer-vision experiments.',
  },
  {
    id: 'marketing-intern',
    title: 'Digital Marketing Intern',
    type: 'Internship',
    duration: '3–6 months',
    location: 'Visakhapatnam / Remote',
    description: 'Learn full-funnel campaign craft across SEO, content, paid social and analytics reporting.',
  },
];

export const faqs = [
  {
    q: 'How quickly can we start?',
    a: 'Most engagements begin within 5–7 working days of a signed proposal. Discovery can start sooner for urgent projects.',
  },
  {
    q: 'Do you work with early-stage startups?',
    a: 'Yes. We run focused MVP engagements for funded startups and offer flexible team extensions as you scale.',
  },
  {
    q: 'Who owns the intellectual property?',
    a: 'You do. All source code, designs and documentation are handed over to you on completion, with no lock-in.',
  },
  {
    q: 'Can you work with our in-house team?',
    a: 'Absolutely. We embed senior specialists into existing squads, adapting to your tools, rituals and delivery process.',
  },
];
