export interface CourseSyllabus {
  module: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  duration: string;
  level: string;
  badge: string;
  rating: number;
  syllabus: CourseSyllabus[];
  highlights: string[];
  icon: string;
}

export const courses: Course[] = [
  {
    id: "mern-stack",
    title: "MERN Stack",
    shortDescription:
      "Build full-stack web applications with MongoDB, Express, React, and Node.js.",
    fullDescription:
      "Master the most popular JavaScript full-stack framework. Learn to design RESTful APIs, build dynamic UIs, manage databases, and deploy production-ready applications.",
    price: 4999,
    duration: "3 months",
    level: "Intermediate",
    badge: "Bestseller",
    rating: 4.8,
    icon: "⚡",
    highlights: [
      "Build 5 real-world projects",
      "REST API design & implementation",
      "JWT Authentication & Authorization",
      "Cloud deployment on Vercel & Render",
      "Industry-ready portfolio projects",
    ],
    syllabus: [
      {
        module: "Module 1: MongoDB & Database Design",
        topics: [
          "MongoDB fundamentals and CRUD operations",
          "Schema design with Mongoose",
          "Aggregation pipelines",
          "Indexing & performance optimization",
        ],
      },
      {
        module: "Module 2: Express.js & Node.js Backend",
        topics: [
          "Node.js runtime and event loop",
          "Express.js middleware and routing",
          "RESTful API design principles",
          "Error handling and validation",
        ],
      },
      {
        module: "Module 3: React.js Frontend",
        topics: [
          "React hooks and functional components",
          "State management with Context API & Redux",
          "React Router for SPA navigation",
          "API integration with Axios",
        ],
      },
      {
        module: "Module 4: Authentication & Deployment",
        topics: [
          "JWT-based authentication",
          "OAuth integration (Google/GitHub)",
          "Docker basics and containerization",
          "Deployment on Vercel, Render & AWS",
        ],
      },
    ],
  },
  {
    id: "java-full-stack",
    title: "Java Full Stack",
    shortDescription:
      "Enterprise-grade full-stack development with Spring Boot and modern frontend.",
    fullDescription:
      "Learn enterprise Java development from the ground up. Master Spring Boot microservices, Hibernate ORM, and integrate with modern React/Angular frontends used by Fortune 500 companies.",
    price: 5499,
    duration: "4 months",
    level: "Intermediate",
    badge: "Popular",
    rating: 4.7,
    icon: "☕",
    highlights: [
      "Spring Boot microservices architecture",
      "Hibernate ORM & JPA",
      "MySQL & database optimization",
      "React/Angular frontend integration",
      "Microservices with Docker & Kubernetes",
    ],
    syllabus: [
      {
        module: "Module 1: Core Java & OOP",
        topics: [
          "Java fundamentals and OOP concepts",
          "Collections, generics, and streams",
          "Exception handling and multithreading",
          "Design patterns in Java",
        ],
      },
      {
        module: "Module 2: Spring Boot",
        topics: [
          "Spring Boot auto-configuration",
          "Dependency injection & IoC",
          "Spring Security & JWT",
          "RESTful APIs with Spring MVC",
        ],
      },
      {
        module: "Module 3: Database & Hibernate",
        topics: [
          "MySQL & relational database design",
          "Hibernate ORM & JPA annotations",
          "JPQL and native queries",
          "Database migration with Flyway",
        ],
      },
      {
        module: "Module 4: Frontend & Microservices",
        topics: [
          "React or Angular integration",
          "Microservices architecture patterns",
          "API Gateway & service discovery",
          "Docker, Kubernetes & CI/CD",
        ],
      },
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    shortDescription:
      "Transform raw data into actionable insights with Python, SQL, and BI tools.",
    fullDescription:
      "Gain in-demand data skills to analyze, visualize, and communicate data insights. Master Python data libraries, SQL, and leading BI tools like Tableau and Power BI used by top companies.",
    price: 3999,
    duration: "2.5 months",
    level: "Beginner",
    badge: "Hot",
    rating: 4.9,
    icon: "📊",
    highlights: [
      "Python for data analysis",
      "Advanced SQL querying",
      "Tableau & Power BI dashboards",
      "Statistical analysis & A/B testing",
      "Real business case studies",
    ],
    syllabus: [
      {
        module: "Module 1: Python for Data",
        topics: [
          "Python basics and data structures",
          "NumPy for numerical computation",
          "Pandas for data manipulation",
          "Data cleaning and transformation",
        ],
      },
      {
        module: "Module 2: Data Visualization",
        topics: [
          "Matplotlib and Seaborn charts",
          "Interactive plots with Plotly",
          "Storytelling with data",
          "Dashboard design principles",
        ],
      },
      {
        module: "Module 3: SQL & Databases",
        topics: [
          "Advanced SQL queries and joins",
          "Window functions and CTEs",
          "Database performance tuning",
          "BigQuery and cloud databases",
        ],
      },
      {
        module: "Module 4: BI Tools & Statistics",
        topics: [
          "Tableau Desktop & Server",
          "Power BI reports and DAX",
          "Descriptive & inferential statistics",
          "A/B testing and hypothesis testing",
        ],
      },
    ],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    shortDescription:
      "Build intelligent systems with machine learning, deep learning, and NLP.",
    fullDescription:
      "Dive deep into artificial intelligence and machine learning. Build real-world AI applications using Python, TensorFlow, and modern ML frameworks. Cover everything from classic algorithms to cutting-edge deep learning.",
    price: 6999,
    duration: "4 months",
    level: "Advanced",
    badge: "Trending",
    rating: 4.9,
    icon: "🤖",
    highlights: [
      "End-to-end ML pipeline development",
      "Deep learning with TensorFlow/PyTorch",
      "Natural Language Processing",
      "Computer Vision projects",
      "Model deployment to production",
    ],
    syllabus: [
      {
        module: "Module 1: Python & ML Foundations",
        topics: [
          "Python for machine learning",
          "Scikit-learn algorithms",
          "Feature engineering & selection",
          "Model evaluation and validation",
        ],
      },
      {
        module: "Module 2: Deep Learning",
        topics: [
          "Neural network architecture",
          "TensorFlow and Keras",
          "CNN, RNN, LSTM networks",
          "Transfer learning & fine-tuning",
        ],
      },
      {
        module: "Module 3: NLP & Computer Vision",
        topics: [
          "Text preprocessing and embeddings",
          "Transformer models & BERT",
          "Image classification and detection",
          "Generative models (GANs, VAEs)",
        ],
      },
      {
        module: "Module 4: MLOps & Deployment",
        topics: [
          "Model serving with FastAPI",
          "MLflow for experiment tracking",
          "Docker for ML applications",
          "Deploying on AWS SageMaker",
        ],
      },
    ],
  },
  {
    id: "iot-embedded",
    title: "IoT & Embedded Systems",
    shortDescription:
      "Connect the physical world to the internet with Arduino, Raspberry Pi, and ESP32.",
    fullDescription:
      "Learn to build smart connected devices from scratch. Master embedded programming, sensor integration, wireless communication protocols, and cloud connectivity for real-world IoT applications.",
    price: 4499,
    duration: "3 months",
    level: "Intermediate",
    badge: "New",
    rating: 4.6,
    icon: "🔌",
    highlights: [
      "Arduino & ESP32 programming",
      "Raspberry Pi Linux projects",
      "MQTT & cloud connectivity",
      "Sensor integration & data logging",
      "Industry IoT use cases",
    ],
    syllabus: [
      {
        module: "Module 1: Embedded Fundamentals",
        topics: [
          "C/C++ for embedded systems",
          "Arduino programming and GPIO",
          "Timers, interrupts, and PWM",
          "Serial communication (UART, SPI, I2C)",
        ],
      },
      {
        module: "Module 2: Advanced Microcontrollers",
        topics: [
          "ESP32 Wi-Fi & Bluetooth",
          "FreeRTOS for real-time applications",
          "ADC, DAC, and sensor interfacing",
          "PCB design basics with KiCad",
        ],
      },
      {
        module: "Module 3: Raspberry Pi & Linux",
        topics: [
          "Linux fundamentals for IoT",
          "Python on Raspberry Pi",
          "Camera module and image processing",
          "GPIO control with Python",
        ],
      },
      {
        module: "Module 4: Cloud & Connectivity",
        topics: [
          "MQTT protocol and brokers",
          "AWS IoT Core integration",
          "InfluxDB and Grafana dashboards",
          "End-to-end IoT project deployment",
        ],
      },
    ],
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

/**
 * Generates a time-based QR code URL for UPI payment.
 * The timestamp bucket changes every 5 minutes, so the QR code
 * automatically rotates to prevent reuse of stale payment links.
 * NOTE: This is a client-side freshness mechanism only — actual payment
 * verification must be confirmed server-side or via the Google Form submission.
 */
export function getTimeBasedQRCodeUrl(courseId: string, price: number): string {
  const timestamp = Math.floor(Date.now() / (5 * 60 * 1000)); // changes every 5 minutes
  const upiId = "courses@upi";
  const upiData = `upi://pay?pa=${upiId}&am=${price}&tn=CoursePayment_${courseId}_${timestamp}&cu=INR`;
  return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiData)}`;
}

export const UPI_ID = "courses@upi";
/** Placeholder — replace with your actual Google Form URL before going live */
export const GOOGLE_FORM_LINK = "https://forms.google.com/your-form";
