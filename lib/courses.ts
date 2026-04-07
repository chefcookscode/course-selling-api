export interface Module {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  level: string;
  price: number;
  originalPrice: number;
  rating: number;
  students: number;
  icon: string;
  tags: string[];
  highlights: string[];
  syllabus: Module[];
  upiId: string;
  googleFormUrl: string;
  qrData: string;
}

export const courses: Course[] = [
  {
    id: "mern-stack",
    title: "MERN Stack",
    tagline: "Full-Stack Web Development with MongoDB, Express, React & Node",
    description:
      "Master the most in-demand full-stack JavaScript framework. Build production-ready applications using MongoDB, Express.js, React.js, and Node.js. Gain hands-on experience through real-world projects, REST APIs, authentication systems, and deployment pipelines.",
    duration: "5 Months",
    level: "Beginner to Advanced",
    price: 4999,
    originalPrice: 9999,
    rating: 4.8,
    students: 3420,
    icon: "⚛️",
    tags: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    highlights: [
      "Build 5+ real-world projects",
      "REST API design & development",
      "JWT Authentication & Authorization",
      "Deployment on AWS / Vercel / Render",
      "1:1 Mentorship sessions",
      "Certificate of completion",
    ],
    syllabus: [
      {
        title: "Module 1 – HTML, CSS & JavaScript Essentials",
        topics: [
          "HTML5 semantic elements & accessibility",
          "CSS3 Flexbox & Grid layouts",
          "JavaScript ES6+: let/const, arrow functions, promises",
          "DOM manipulation & events",
          "Intro to async/await & Fetch API",
        ],
      },
      {
        title: "Module 2 – React.js Deep Dive",
        topics: [
          "Component architecture & JSX",
          "Props, State & Lifecycle",
          "React Hooks (useState, useEffect, useContext, useReducer)",
          "React Router for SPA navigation",
          "Context API & Redux for state management",
        ],
      },
      {
        title: "Module 3 – Node.js & Express.js",
        topics: [
          "Node.js fundamentals: event loop, modules, npm",
          "Building REST APIs with Express.js",
          "Middleware, routing, error handling",
          "File uploads & email services",
          "Rate limiting & security best practices",
        ],
      },
      {
        title: "Module 4 – MongoDB & Mongoose",
        topics: [
          "NoSQL database concepts",
          "CRUD operations with MongoDB",
          "Mongoose schemas, models & validation",
          "Aggregation pipelines",
          "Indexing & performance optimization",
        ],
      },
      {
        title: "Module 5 – Authentication, Testing & Deployment",
        topics: [
          "JWT & OAuth2 authentication",
          "bcrypt password hashing",
          "Unit & integration testing with Jest",
          "CI/CD with GitHub Actions",
          "Docker basics & cloud deployment",
        ],
      },
    ],
    upiId: "eduforge.mern@upi",
    googleFormUrl: "https://forms.google.com",
    qrData: "upi://pay?pa=eduforge.mern@upi&pn=EduForge&am=4999&cu=INR&tn=MERN+Stack+Course",
  },
  {
    id: "java-fullstack",
    title: "Java Full Stack",
    tagline: "Enterprise Web Development with Java, Spring Boot & Angular",
    description:
      "Become a Java full-stack developer with deep expertise in Spring Boot, Hibernate, REST APIs, and Angular. Learn to build scalable, enterprise-grade applications from scratch with industry-standard practices.",
    duration: "6 Months",
    level: "Beginner to Advanced",
    price: 5499,
    originalPrice: 10999,
    rating: 4.7,
    students: 2890,
    icon: "☕",
    tags: ["Java", "Spring Boot", "Angular", "MySQL", "Hibernate"],
    highlights: [
      "Core Java to Advanced Java mastery",
      "Spring Boot microservices architecture",
      "Angular 17 with TypeScript",
      "MySQL & Hibernate ORM",
      "Real-world enterprise project",
      "Industry-recognized certificate",
    ],
    syllabus: [
      {
        title: "Module 1 – Core Java Fundamentals",
        topics: [
          "OOP principles: classes, inheritance, polymorphism",
          "Collections framework & generics",
          "Exception handling & I/O streams",
          "Multithreading & concurrency",
          "Java 17+ features: records, sealed classes, pattern matching",
        ],
      },
      {
        title: "Module 2 – Spring Framework & Spring Boot",
        topics: [
          "Dependency injection & IoC container",
          "Spring Boot auto-configuration",
          "Building RESTful APIs",
          "Spring Security & OAuth2",
          "Spring Data JPA & query methods",
        ],
      },
      {
        title: "Module 3 – Database & Hibernate",
        topics: [
          "MySQL relational database design",
          "Hibernate ORM: mappings & relationships",
          "JPQL & Criteria API",
          "Database migrations with Flyway",
          "Connection pooling & performance",
        ],
      },
      {
        title: "Module 4 – Angular Frontend",
        topics: [
          "TypeScript fundamentals",
          "Angular components, directives & pipes",
          "Services, dependency injection & HTTP client",
          "Reactive Forms & RxJS",
          "Angular routing & lazy loading",
        ],
      },
      {
        title: "Module 5 – Microservices & Deployment",
        topics: [
          "Microservices architecture patterns",
          "Service discovery with Eureka",
          "API Gateway with Spring Cloud",
          "Docker & Kubernetes basics",
          "CI/CD pipeline setup",
        ],
      },
    ],
    upiId: "eduforge.java@upi",
    googleFormUrl: "https://forms.google.com",
    qrData: "upi://pay?pa=eduforge.java@upi&pn=EduForge&am=5499&cu=INR&tn=Java+Full+Stack+Course",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    tagline: "Transform Data into Insights with Python, SQL & Power BI",
    description:
      "Learn to collect, process, analyze, and visualize data to drive business decisions. Master Python for data analysis, SQL for data querying, Power BI for visualization, and statistical methods for real-world problem solving.",
    duration: "4 Months",
    level: "Beginner to Intermediate",
    price: 3999,
    originalPrice: 7999,
    rating: 4.9,
    students: 4150,
    icon: "📊",
    tags: ["Python", "SQL", "Power BI", "Pandas", "Tableau"],
    highlights: [
      "End-to-end data analysis pipeline",
      "Python & Pandas for data wrangling",
      "Power BI & Tableau dashboards",
      "Statistical analysis & hypothesis testing",
      "Business case studies",
      "Portfolio-ready projects",
    ],
    syllabus: [
      {
        title: "Module 1 – Python for Data Analysis",
        topics: [
          "Python programming basics",
          "NumPy arrays & operations",
          "Pandas: DataFrames, Series, indexing",
          "Data cleaning & preprocessing",
          "Exploratory Data Analysis (EDA)",
        ],
      },
      {
        title: "Module 2 – SQL & Database Analytics",
        topics: [
          "SQL fundamentals: SELECT, JOIN, GROUP BY",
          "Advanced SQL: CTEs, window functions",
          "Database design & normalization",
          "Analytical queries for business insights",
          "Connecting Python to databases",
        ],
      },
      {
        title: "Module 3 – Data Visualization",
        topics: [
          "Matplotlib & Seaborn for charts",
          "Interactive plots with Plotly",
          "Power BI desktop: reports & dashboards",
          "Tableau fundamentals",
          "Storytelling with data",
        ],
      },
      {
        title: "Module 4 – Statistics & Analytics",
        topics: [
          "Descriptive & inferential statistics",
          "Probability distributions",
          "Hypothesis testing & A/B testing",
          "Regression analysis",
          "Time series analysis basics",
        ],
      },
    ],
    upiId: "eduforge.analytics@upi",
    googleFormUrl: "https://forms.google.com",
    qrData: "upi://pay?pa=eduforge.analytics@upi&pn=EduForge&am=3999&cu=INR&tn=Data+Analytics+Course",
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    tagline: "Build Intelligent Systems with Machine Learning & Deep Learning",
    description:
      "Dive deep into Artificial Intelligence and Machine Learning. From classical ML algorithms to modern deep learning architectures, you will learn to build and deploy intelligent models using Python, TensorFlow, and PyTorch.",
    duration: "6 Months",
    level: "Intermediate to Advanced",
    price: 6999,
    originalPrice: 13999,
    rating: 4.9,
    students: 2670,
    icon: "🤖",
    tags: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "NLP"],
    highlights: [
      "Classical ML algorithms from scratch",
      "Deep learning with TensorFlow & PyTorch",
      "Natural Language Processing (NLP)",
      "Computer Vision projects",
      "Model deployment with FastAPI",
      "Kaggle competition preparation",
    ],
    syllabus: [
      {
        title: "Module 1 – Python & Math for AI/ML",
        topics: [
          "Python advanced: OOP, decorators, generators",
          "Linear algebra: vectors, matrices, eigenvalues",
          "Calculus: gradients & optimization",
          "Probability & statistics for ML",
          "NumPy & SciPy for scientific computing",
        ],
      },
      {
        title: "Module 2 – Classical Machine Learning",
        topics: [
          "Supervised learning: regression & classification",
          "Decision trees, Random Forest, XGBoost",
          "Unsupervised learning: clustering & PCA",
          "Model evaluation: cross-validation, metrics",
          "Feature engineering & selection",
        ],
      },
      {
        title: "Module 3 – Deep Learning",
        topics: [
          "Neural network fundamentals & backpropagation",
          "CNNs for image recognition",
          "RNNs & LSTMs for sequential data",
          "Transfer learning with pretrained models",
          "Hyperparameter tuning & regularization",
        ],
      },
      {
        title: "Module 4 – NLP & Generative AI",
        topics: [
          "Text preprocessing & word embeddings",
          "Transformers & attention mechanism",
          "Fine-tuning LLMs (BERT, GPT)",
          "Introduction to LangChain & RAG",
          "Prompt engineering basics",
        ],
      },
      {
        title: "Module 5 – MLOps & Deployment",
        topics: [
          "ML pipelines with MLflow & DVC",
          "Model serving with FastAPI",
          "Docker & cloud deployment (AWS SageMaker)",
          "Monitoring model performance in production",
          "A/B testing ML models",
        ],
      },
    ],
    upiId: "eduforge.aiml@upi",
    googleFormUrl: "https://forms.google.com",
    qrData: "upi://pay?pa=eduforge.aiml@upi&pn=EduForge&am=6999&cu=INR&tn=AI+ML+Course",
  },
  {
    id: "iot-embedded",
    title: "IoT & Embedded Systems",
    tagline: "Connect the Physical World with Embedded C, Arduino & Raspberry Pi",
    description:
      "Learn to design, program, and deploy embedded systems and IoT solutions. From microcontroller programming with Arduino to cloud-connected IoT systems using Raspberry Pi and MQTT, build real hardware projects.",
    duration: "4 Months",
    level: "Beginner to Intermediate",
    price: 4499,
    originalPrice: 8999,
    rating: 4.6,
    students: 1980,
    icon: "🔧",
    tags: ["Arduino", "Raspberry Pi", "C/C++", "MQTT", "ESP32"],
    highlights: [
      "Hands-on hardware projects",
      "Embedded C & C++ programming",
      "Arduino & ESP32 microcontrollers",
      "Raspberry Pi for edge computing",
      "IoT protocols: MQTT, CoAP, HTTP",
      "Cloud IoT dashboard with AWS IoT",
    ],
    syllabus: [
      {
        title: "Module 1 – Electronics & Embedded C Fundamentals",
        topics: [
          "Electronics basics: voltage, current, resistors",
          "Digital logic & binary systems",
          "C programming for embedded systems",
          "Pointers, memory management & bit manipulation",
          "Interrupts, timers & watchdogs",
        ],
      },
      {
        title: "Module 2 – Arduino & Microcontrollers",
        topics: [
          "Arduino IDE & hardware overview",
          "GPIO, PWM & analog/digital I/O",
          "Sensors: temperature, humidity, ultrasonic, IR",
          "Communication protocols: I2C, SPI, UART",
          "Project: smart home control system",
        ],
      },
      {
        title: "Module 3 – ESP32 & Wi-Fi Connectivity",
        topics: [
          "ESP32 architecture & FreeRTOS",
          "Wi-Fi & Bluetooth LE programming",
          "REST API calls from microcontrollers",
          "OTA firmware updates",
          "Low power design & deep sleep",
        ],
      },
      {
        title: "Module 4 – Raspberry Pi & IoT Cloud",
        topics: [
          "Linux on Raspberry Pi",
          "Python GPIO & hardware control",
          "MQTT protocol & Mosquitto broker",
          "AWS IoT Core & cloud dashboard",
          "Edge computing & data streaming",
        ],
      },
    ],
    upiId: "eduforge.iot@upi",
    googleFormUrl: "https://forms.google.com",
    qrData: "upi://pay?pa=eduforge.iot@upi&pn=EduForge&am=4499&cu=INR&tn=IoT+Embedded+Systems+Course",
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}
