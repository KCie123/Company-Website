# JK Improvement Website

This project is a **React-based Landing Page** for JK Improvement, a company specializing in junkyard removal and demolition services. The website provides information about the company's services, mission, and contact details in a clean, modern interface. It features a responsive design with a focus on visual appeal and user experience, utilizing Tailwind CSS for styling and Heroicons for visual elements.

## Project Description

The **JK Improvement Website** serves as an online presence for the company, showcasing their demolition and junk removal services. It combines professional aesthetics with user-friendly navigation to effectively communicate the company's offerings and values to potential clients.

### Key Features:
- **Responsive Navigation:** A clean, mobile-responsive navbar with smooth-scrolling links to page sections.
- **Hero Section:** Visually appealing introduction with before/after image and service description.
- **About Section:** Detailed information about the company's mission and vision.
- **Why Choose Us Section:** Highlights the company's unique selling points with iconic visuals.
- **Contact Footer:** Easy access to contact information for potential clients.
- **Visual Enhancements:** Subtle animations, hover effects, and consistent branding throughout.
- **Mobile-Optimized Layout:** Responsive design that adapts to various screen sizes for optimal viewing.

## Technologies Used:
- **React:** JavaScript library for building the user interface.
- **Tailwind CSS:** Utility-first CSS framework for styling components.
- **Heroicons:** SVG icon set for visual elements.
- **Create React App:** React bootstrapping toolchain for quick setup.
- **CSS Animations:** Custom animations for improved user experience.
- **CSS Grid/Flexbox:** For responsive layouts and element positioning.

## How to Install and Run the Project

### Prerequisites
- **Node.js** (version 14.x or higher)
- **npm** or **yarn** (for managing dependencies)

### Steps
1. Clone the Repository:
   ```bash
   git clone https://github.com/yourusername/jk-improvement-website.git
   cd jk-improvement-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
   
3. Run the development server:
    ```bash
    npm start
    # or
    yarn start
    ```

4. Open your browser and navigate to http://localhost:3000.

## Project Structure

```
jk-improvement-website/
│
├── public/                   # Public assets 
│   └── index.html            # Main HTML template
│
├── src/                      # Source files
│   ├── components/           # Reusable UI components
│   │   └── ui/               # Basic UI elements
│   │       ├── button.js     # Button component
│   │       └── card.js       # Card components
│   │
│   ├── App.js                # Main application component
│   ├── App.css               # App-specific styles
│   ├── index.js              # Application entry point
│   ├── index.css             # Global styles with Tailwind
│   ├── reportWebVitals.js    # Performance measurement
│   └── setupTests.js         # Test configuration
│
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

## Component Descriptions

### `App.js`
- **Serves as the main component** of the application, containing the entire landing page.
- **Sections:**
  - **Navbar:** Fixed navigation with links to page sections.
  - **Hero Section:** Showcase section with image and call-to-action.
  - **About Section:** Company information with mission and vision.
  - **Why Choose Us:** Benefits of working with JK Improvement.
  - **Footer:** Contact information and copyright.
- **Design Features:**
  - Custom color scheme with dark gray and orange themes.
  - Interactive hover states and transitions.
  - Responsive layout for all device sizes.
  - Hero image with hover scaling effect.

### `button.js`
- **Props:**
  - `children`: Content inside the button.
  - `variant`: Style variant (primary by default).
  - `className`: Additional CSS classes.
  - `...props`: Other props passed to the HTML button.
- **Creates a styled button** with consistent appearance.
- **Supports variants** for different uses across the site.
- **Key Features:**
  - Built-in hover states and transitions.
  - Composable with additional classes.
  - Accessible focus states.

### `card.js`
- **Exports multiple components:**
  - `Card`: Main container component.
  - `CardHeader`: Section for card title/header content.
  - `CardTitle`: Styled heading for cards.
  - `CardContent`: Container for main card content.
- **Props for each:**
  - `children`: Content inside the component.
  - `className`: Additional CSS classes.
- **Creates consistent card layouts** for structured content display.
- **Key Features:**
  - Composable structure for flexible content.
  - Consistent styling with shadow and border.
  - Extensible through className prop.

### CSS Styles

#### `index.css`
- **Includes Tailwind directives** for the utility-first styling approach.
- **Contains base styling** for HTML elements.
- **Implements smooth scrolling** for improved navigation experience.
- **Defines fade-in animation** for page elements.

#### `App.css`
- **Contains legacy styles** for Create React App template.
- **Includes animation definitions** for logo spinning.
- **Defines layout styles** for the application header.

## Design Details

### Color Scheme
- **Primary Background:** Dark gray (`#4D4D4D`) for a professional appearance.
- **Accent Color:** Orange (`#FF6600`) for call-to-action elements and section highlights.
- **Text Colors:** White on dark backgrounds, black on light backgrounds for optimal readability.
- **Border Accents:** Subtle gray borders (`border-gray-600`) to define sections.

### Typography
- **Font Family:** System font stack with sans-serif fallbacks for clean, modern text.
- **Headings:** Bold weight with size hierarchy (3xl for main headings, 2xl for section titles).
- **Body Text:** Regular weight with appropriate line spacing for readability.
- **Navigation:** Medium weight with hover transitions for interactive feedback.

### Interactive Elements
- **Buttons and Links:** Feature hover scaling (`hover:scale-105`) and color transitions.
- **Sections:** Clear visual separation with contrasting background colors.
- **Images:** Subtle hover scaling with smooth transitions (`transition-transform duration-300`).
- **Icons:** Heroicons components for consistent visual elements with semantic meaning.

### Responsive Design
- **Mobile-First Approach:** Default styling for mobile devices.
- **Responsive Navigation:** Collapsible on small screens (hidden with `hidden md:flex`).
- **Flexible Layouts:** Using Grid and Flexbox for adaptable content positioning.
- **Column Adjustments:** Single column on mobile, multi-column on larger screens with `md:flex-row` and related utilities.
