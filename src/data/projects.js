import todoImage from '../assets/todo.png';
import converterImage from '../assets/convetrter.png';
import weatherImage from '../assets/weath.png';

export default [
    {
        "id": 3,
        "title": "Weather Forecast App",
        "description": "Developed a modern React-based weather application that allows users to search any city and view real-time weather conditions along with a 7-day forecast.",
        "techStack": [
            "React",
            "Weather API",
            "Tailwind CSS",
            "Axios"
        ],
        "image": weatherImage,
        "liveLink": "https://climatedash.netlify.app/",
        "repoLink": "https://github.com/Irfanullah-khan/weather-app",
        "features": [
            "Real-time weather conditions for any city",
            "7-day detailed weather forecast",
            "City search functionality",
            "Clean, responsive user interface"
        ]
    },
    {
        "id": 2,
        "title": "Converter App",
        "description": "A web-based file conversion application for DOCX to PDF and PDF to DOCX conversions.",
        "techStack": [
            "React.js",
            "Node.js",
            "Express.js",
            "Multer",
            "LibreOffice"
        ],
        "image": converterImage,
        "liveLink": "https://filesconverterx.netlify.app/",
        "repoLinks": {
            "frontend": "https://github.com/Irfanullah-khan/converter-client-site",
            "backend": "https://github.com/Irfanullah-khan/converter-server-site"
        },
        "repoLink": "https://github.com/Irfanullah-khan/converter-client-site", // Fallback
        "features": [
            "Seamless DOCX to PDF and PDF to DOCX conversion",
            "Secure file uploads using Multer",
            "Conversion progress loader for better UX",
            "Accurate formatting preservation with LibreOffice"
        ]
    },
    {
        "id": 1,
        "title": "MyTodo App",
        "description": "A robust MERN stack Todo application with image attachments and cloud storage.",
        "techStack": [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Cloudinary"
        ],
        "image": todoImage,
        "liveLink": "https://mytodoapplicata.netlify.app/",
        "repoLinks": {
            "frontend": "https://github.com/Irfanullah-khan/mytodo-frontend",
            "backend": "https://github.com/Irfanullah-khan/mytodo-backend"
        },
        "repoLink": "https://github.com/Irfanullah-khan/mytodo-frontend", // Fallback
        "features": [
            "Create tasks with descriptions and image attachments",
            "Secure image upload and storage using Cloudinary",
            "MongoDB integration for persistent data storage",
            "Responsive UI for managing tasks"
        ]
    }
];
