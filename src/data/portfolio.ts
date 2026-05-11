// Centralized CV data for Mesbah Uddin
export const personal = {
  name: "Mesbah Uddin",
  title: "Senior Full-Stack Software Engineer",
  tagline:
    "Architecting scalable ERP, CRM and SaaS platforms with Laravel, PHP and modern JavaScript.",
  location: "Mirpur, Dhaka, Bangladesh",
  email: "uddin.mesbaah@gmail.com",
  phone: "+880 1733490080",
  website: "https://mesbahuddin.info",
  linkedin: "https://www.linkedin.com/in/mesbah-uddin-meju",
  github: "https://github.com/mesbah-meju",
};

export const aboutSummary = `Senior Full-Stack Engineer with 3+ years of experience building scalable ERP, CRM, SaaS and workflow-driven enterprise applications. I focus on system architecture, multi-tenant SaaS design, CI/CD, and clean, testable code — turning complex business processes into reliable software.`;

export const skillGroups = [
  {
    title: "Backend & Architecture",
    items: [
      "Laravel",
      "PHP",
      "RESTful API Design",
      "Multi-Tenant SaaS",
      "Workflow Engines",
      "Role & Permission Systems",
      "Payment Gateway Integration",
    ],
  },
  {
    title: "Frontend & UI",
    items: [
      "JavaScript",
      "jQuery",
      "Blade Templating",
      "HTML5 / CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive UI",
    ],
  },
  {
    title: "Database & Reporting",
    items: [
      "MySQL",
      "Query Optimization",
      "Complex Reporting",
      "Data Validation",
      "SQL",
    ],
  },
  {
    title: "DevOps & Tooling",
    items: [
      "Git",
      "CI/CD Pipelines",
      "Linux Server Mgmt",
      "Nginx",
      "Apache",
      "cPanel",
      "PHPUnit",
    ],
  },
  {
    title: "Real-Time & Mobile",
    items: [
      "WebRTC",
      "WebSockets",
      "Event Broadcasting",
      "Live A/V Streaming",
      "Flutter (basic)",
    ],
  },
  {
    title: "Also familiar with",
    items: ["Go", "Python", "Dart"],
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Automas Technologies",
    location: "Dhaka, Bangladesh",
    period: "Jan 2026 – Present",
    bullets: [
      "Leading development of scalable ERP, CRM and Sales Automation platforms on Laravel 12.",
      "Owning full project lifecycle: requirement analysis, architecture, sprint planning and delivery.",
      "Designing module-based architecture, workflow engines and secure role-permission systems.",
      "Improving deployment reliability with CI/CD workflows and structured release pipelines.",
      "Mentoring junior developers and enforcing clean coding standards.",
    ],
  },
  {
    role: "Lead Developer / Focal Person",
    company: "4axiz IT Ltd",
    location: "Dhaka, Bangladesh",
    period: "2023 – 2026",
    bullets: [
      "Coordinated team activities, sprint planning and delivery of enterprise software projects.",
      "Acted as primary client communicator, requirement analyst and project coordinator.",
      "Designed secure, scalable system architecture and improved overall product usability.",
      "Built ERP, HRM, School Management, eCommerce and workflow-driven enterprise apps.",
      "Built RESTful APIs, dynamic reporting engines and reusable Laravel Blade components.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-employed",
    location: "Remote",
    period: "2022 – 2023",
    bullets: [
      "Delivered custom business websites, admin dashboards and small management systems.",
      "Managed deployment pipelines, performance optimization and post-delivery maintenance.",
    ],
  },
];

export type Project = {
  title: string;
  period: string;
  stack: string[];
  summary: string;
  highlights: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "SaaS ERP Platform",
    period: "2026 – Present",
    stack: ["Laravel 12", "MySQL", "Multi-Tenant", "CI/CD"],
    summary:
      "Multi-tenant SaaS ERP with modular business workflows, subscription lifecycle and scalable reporting.",
    highlights: [
      "Multi-tenant architecture with tenant-level configuration",
      "Subscription lifecycle and billing flows",
      "Performance, security layers and CI/CD-driven deployment",
    ],
    featured: true,
  },
  {
    title: "SaaS Sales Automation CRM",
    period: "2026 – Present",
    stack: ["Laravel 12", "REST APIs", "RBAC"],
    summary:
      "End-to-end sales pipeline: lead tracking, deal workflow, activity monitoring and live insights.",
    highlights: [
      "Lead, deal and activity pipeline management",
      "Role-based access control and automation triggers",
      "Real-time business insights dashboards",
    ],
    featured: true,
  },
  {
    title: "Security Risk Analysis System",
    period: "2025",
    stack: ["Laravel", "MySQL", "Reporting"],
    summary:
      "Geographic-hierarchy risk scoring engine across country, zone and site levels with workflow approvals.",
    highlights: [
      "Hierarchical risk scoring engine",
      "Automated reporting and operational evidence tracking",
      "Workflow approvals across organizational levels",
    ],
    featured: true,
  },
  {
    title: "Audit Recommendation Management",
    period: "2025",
    stack: ["Laravel", "PDF Engine", "Form Builder"],
    summary:
      "Complete audit lifecycle with findings, recommendations, evidence validation and progress analytics.",
    highlights: [
      "Dynamic audit form builder",
      "Automated PDF reporting system",
      "Evidence validation and progress analytics",
    ],
    featured: true,
  },
  {
    title: "Enterprise ERP System",
    period: "2024",
    stack: ["Laravel", "MySQL"],
    summary:
      "Integrated ERP modules: Inventory, Accounts, HRM, Payroll and Procurement with centralized analytics.",
    highlights: [
      "Five integrated business modules",
      "Centralized analytics & reporting",
      "Role-based enterprise access control",
    ],
  },
  {
    title: "School Management System",
    period: "2024",
    stack: ["CodeIgniter", "REST APIs"],
    summary:
      "Attendance, examination and fee automation with mobile API integration and user portals.",
    highlights: [
      "Attendance and examination automation",
      "Fee management with notifications",
      "Mobile API integration for parent/student portals",
    ],
  },
  {
    title: "Multi-Vendor eCommerce Platform",
    period: "2022 – 2024",
    stack: ["WordPress", "WooCommerce", "Laravel"],
    summary:
      "Multi-vendor marketplace with vendor management, advanced filtering, custom plugins and secure payments.",
    highlights: [
      "Vendor management and storefronts",
      "Custom WordPress plugins",
      "Secure payment gateway integration",
    ],
  },
];

export const achievements = [
  { value: "3+", label: "Years of engineering" },
  { value: "15+", label: "Enterprise modules shipped" },
  { value: "7", label: "Production platforms" },
  { value: "100%", label: "On-time delivery focus" },
];

export const education = [
  {
    degree: "BSc in Computer Science & Engineering",
    school: "Bangladesh University of Business and Technology (BUBT)",
    period: "2020 – 2024",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Milestone College, Uttara, Dhaka",
    period: "2016 – 2018",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Mandari Bohu Mukhi High School, Lakshmipur",
    period: "2014 – 2016",
  },
];
