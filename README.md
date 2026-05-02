# 🧠 CV - Matias Thompson

This repository contains the curriculum vitae (CV) of Matias Thompson, a Senior Frontend Engineer with expertise in React architecture and scalable solutions.

## 🎯 Features

- **Interactive CV**: Fully responsive design with light and dark theme support
- **PDF Export**: Download your CV as a PDF with a single click
- **Timeline View**: Professional timeline showcasing career milestones and key achievements
- **Theme Toggle**: Switch between light and dark modes (persisted in localStorage)
- **Smooth Transitions**: Page transitions with fade and slide animations
- **Mobile Optimized**: Responsive design with mobile-first approach
- **Type Safe**: Built with TypeScript for better code reliability

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **React Router** - Client-side routing for CV and Timeline views
- **TypeScript** - Type safety and better developer experience
- **Styled Components** - CSS-in-JS for component styling
- **Framer Motion** - Smooth animations and page transitions
- **Vite** - Fast build tool and development server

### Testing & Quality
- **Vitest** - Unit testing framework
- **React Testing Library** - Component testing
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky + lint-staged** - Git hooks for code quality

### PDF Generation
- **html2canvas** - Convert DOM elements to canvas
- **jsPDF** - Generate PDF files

### Icons
- **FontAwesome** - Professional icon library (@fortawesome/react-fontawesome)

## 📋 Project Structure

```
src/
├── ui/
│   ├── actions/           # Business logic (downloadPdf, themePersistence)
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── theme/             # Theme management and styling
│   └── views/             # Page components (Resume, Timeline)
├── App.tsx                # Main app with React Router
├── main.tsx               # Entry point
└── global.css             # Global styles
```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# The app will be available at http://localhost:5173
```

### Build & Preview

```bash
# Build for production
npm run build

# Preview the production build
npm npm preview
```

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in UI mode
npm run test:ui

# Run tests once (CI mode)
npm run test:run

# Generate coverage report
npm run test:coverage
```

## 🎨 Code Quality

```bash
# Run linter
npm run lint

# Format code
npm run format

# Check formatting
npm run format:check
```

## 📱 Features in Detail

### Resume View (`/`)
- Comprehensive CV with sections for:
  - Professional profile
  - Specializations
  - Work experience
  - Education
  - Skills and stack
  - Contact information
- Download as PDF button
- Theme toggle

### Timeline View (`/timeline`)
- Professional journey showcase
- Highlighted career milestones
- Responsive design with minimum width on mobile devices

### Theme Support
- Light theme (default)
- Dark theme
- Theme preference is persisted in localStorage
- Seamless switching with `ThemeToggle` component

### PDF Export
- Export CV as a PDF file
- Maintains styling and layout
- High-quality output with 2x scale

## 🔗 Routing

The app uses React Router for client-side navigation with a floating menu centered vertically on the left side:

- `/` - Resume (CV) - Icon: 📄 (faFile)
- `/timeline` - Professional timeline - Icon: 📅 (faCalendar)

### Floating Menu Features
- **Positioned** vertically centered on the left side of the screen (left: 12px)
- **Icon-based** with compact square buttons using FontAwesome icons (40x40px)
- **No borders** - Clean minimalist design with icon color indicators
- **Color System**:
  - **Default (inactive)**: Gray (#888888)
  - **Active**: Dark blue (#2E86DE)
  - **Hover**: Light blue (#5DADE2) with scale animation
- **Extensible** - Add new routes by updating the `routes` array in `App.tsx`
- **Responsive** - Adapts to mobile screens with smaller button sizes (36x36px)

### Page Transitions
All page transitions feature smooth animations powered by **Framer Motion**:
- **Entry animation**: Fade in with slide from right (opacity: 0 → 1, x: 100px → 0)
- **Exit animation**: Fade out with slide to left (opacity: 1 → 0, x: 0 → -100px)
- **Duration**: 0.5 seconds with easeInOut timing function
- **Wait mode**: Previous page exits before new page enters for seamless UX

### Adding New Routes
To add a new route with a FontAwesome icon, update the `routes` array in `src/App.tsx`:

```typescript
import { faIcon } from '@fortawesome/free-solid-svg-icons'

const routes: RouteConfig[] = [
  // ...existing routes...
  {
    path: '/new-route',
    label: 'New Page',
    icon: faIcon, // Import from @fortawesome/free-solid-svg-icons
    component: <NewComponent />,
  },
]
```

The page transition animations will automatically apply to new routes.

### Available FontAwesome Icons
The project uses **FontAwesome Free (Solid)** icons. Some commonly used icons:
- `faFile` - Document/File
- `faCalendar` - Calendar/Timeline
- `faUser` - User/Profile
- `faCode` - Code/Projects
- `faBriefcase` - Work/Experience
- `faBook` - Books/Learning
- `faLink` - Links

For a complete list, visit: [FontAwesome Icons](https://fontawesome.com/icons)

## 📝 Contact

- 📍 Buenos Aires, Argentina
- 📞 +54 11 3303-0041
- ✉️ thompson.matiasf@gmail.com
- 🔗 [LinkedIn](https://linkedin.com/in/matias-federico-thompson-147a6858)

## 📄 License

This project is personal and not under a specific license.

