# MieMore Agents - Noodle Innovation Project

A responsive, modern landing page showcasing the MieMore Agents school project - an innovative noodle creation process using sustainable ingredients.

## 🍜 Project Overview

MieMore Agents is a school project that demonstrates the innovative process of creating noodles using millet flours, breadfruit flours, and moringa leaves. This landing page showcases the team's journey through four essential steps of noodle innovation.

## ✨ Features

- **Responsive Design** - Mobile-first approach with perfect cross-device compatibility
- **Modern Animations** - AOS (Animate On Scroll) library for smooth, professional animations
- **Interactive Carousels** - Image carousels for each innovation step with auto-slide functionality
- **Smooth Scrolling** - Seamless navigation between sections
- **Touch Support** - Swipe gestures for mobile carousel navigation
- **Keyboard Navigation** - Arrow key support for carousel controls
- **Lazy Loading** - Optimized image loading for better performance
- **Accessibility** - WCAG compliant with proper ARIA labels and focus management
- **Modern Stack** - Latest versions of HTML5, Tailwind CSS, JavaScript ES6+, and FontAwesome

## 🎯 Project Sections

### 1. Hero Section
- **Group Name**: "MieMore Agents"
- **Introduction**: Welcome message explaining the project purpose
- **Animations**: Fade-in and slide-in effects using AOS
- **Design**: Gradient background with warm, student-friendly colors

### 2. Team Introduction
- **Title**: "Meet Our Team"
- **Team Image**: `src/assets/images/team.jpeg`
- **Team Members**:
  - Santika Anindya Sasono (Grade 8F)
  - Aqila Azalea Prasetiyo (Grade 8G)
  - Diarra Janeeta Arie (Grade 8G)
- **Layout**: Responsive grid with hover effects and entrance animations

### 3. Innovation Process
Four detailed steps with image carousels:

#### Step 1: Preparing Millet Flours
- **Images**: `PMF-1.jpeg` to `PMF-8.jpeg`
- **Description**: The foundation of our innovative noodle recipe

#### Step 2: Preparing Breadfruit Flours
- **Images**: `PBD-1.jpeg` to `PBD-9.jpeg`
- **Description**: Adding nutritional value and unique texture

#### Step 3: Preparing Moringa Leaves
- **Images**: `PML-1.jpeg` to `PML-8.jpeg`
- **Description**: Incorporating superfood benefits into our noodles

#### Step 4: Noodle Making
- **Images**: `NM-1.jpeg` to `NM-9.jpeg`
- **Description**: The final step - bringing everything together

### 4. Closing Section
- **Thank You Message**: Warm and professional closing
- **Statistics**: Team members, innovation steps, and possibilities
- **Animations**: Zoom-in and fade-up effects

### 5. Footer
- **Copyright**: "© 2025 MieMore Agents. All rights reserved."
- **Social Media**: FontAwesome icons with hover effects
- **Quick Links**: Navigation to all sections

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with accessibility features
- **Tailwind CSS 3.x** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript with best practices
- **FontAwesome 6.5.1** - Comprehensive icon library
- **AOS 2.3.1** - Animate On Scroll library
- **Google Fonts** - Poppins font family
- **CSS Grid & Flexbox** - Modern layout techniques
- **CSS Custom Properties** - CSS variables for theming
- **Intersection Observer API** - For scroll animations and lazy loading

## 🎨 Design System

### Color Palette
- **Primary**: #FF6B35 (Orange)
- **Secondary**: #2E8B57 (Sea Green)
- **Accent**: #FFD700 (Gold)
- **Warm**: #FFF8DC (Cream)
- **Dark**: #2C3E50 (Dark Blue-Gray)

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Fallback**: system-ui, sans-serif
- **Responsive**: Fluid typography scaling

### Animations
- **AOS Effects**: fade-up, slide-in-left, slide-in-right, zoom-in
- **Custom Animations**: hover effects, transitions, transforms
- **Performance**: Hardware-accelerated animations

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Installation
1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Or run a local server**:

```bash
# Using Node.js
npm install
npm run dev

# Using Python
python -m http.server 8000

# Using PHP
php -S localhost:8000
```

## 🎮 Interactive Features

### Carousel Controls
- **Auto-slide**: Every 5 seconds
- **Navigation**: Previous/Next arrows
- **Pagination**: Clickable dots
- **Keyboard**: Arrow key navigation
- **Touch**: Swipe gestures on mobile
- **Hover**: Pause auto-slide on hover

### Navigation
- **Smooth Scrolling**: Between sections
- **Fixed Navigation**: Sticky header with backdrop blur
- **Active States**: Visual feedback for current section

### Animations
- **Scroll-triggered**: Elements animate as they enter viewport
- **Hover Effects**: Interactive feedback on buttons and cards
- **Loading States**: Smooth image loading with fallbacks

## 📁 Project Structure

```
MieMore Agents/
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
├── README.md              # Project documentation
└── src/
    ├── css/
    │   └── style.css      # Custom CSS styles and animations
    ├── js/
    │   └── main.js        # Main JavaScript functionality
    └── assets/
        └── images/        # Project images
            ├── team.jpeg  # Team photo
            ├── PMF-*.jpeg # Millet flour images (1-8)
            ├── PBD-*.jpeg # Breadfruit flour images (1-9)
            ├── PML-*.jpeg # Moringa leaves images (1-8)
            └── NM-*.jpeg  # Noodle making images (1-9)
```

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Start production server
npm start

# Build project (placeholder)
npm run build

# Lint code (placeholder)
npm run lint

# Format code (placeholder)
npm run format
```

## 📱 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant
- **Alt Text**: Descriptive image alternatives

## ⚡ Performance Features

- **Lazy Loading**: Images load only when needed
- **Debounced Events**: Optimized scroll and resize handlers
- **Efficient Animations**: Hardware-accelerated CSS animations
- **Minimal Dependencies**: Only essential external libraries
- **Optimized Assets**: Compressed images and efficient code
- **Intersection Observer**: Efficient scroll-based animations

## 🎓 Educational Value

This project demonstrates:
- **Modern Web Development**: Latest technologies and best practices
- **Responsive Design**: Mobile-first approach
- **User Experience**: Smooth animations and interactions
- **Accessibility**: Inclusive design principles
- **Performance**: Optimized loading and rendering
- **Code Quality**: Clean, maintainable, and documented code

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **MieMore Agents Team** - For the innovative noodle project concept
- **Tailwind CSS** - For the amazing utility-first CSS framework
- **FontAwesome** - For the comprehensive icon library
- **AOS** - For the smooth scroll animation library
- **Google Fonts** - For the Poppins font family
- **Modern Web Standards** - For accessibility and performance best practices

## 📞 Support

If you have any questions or need help with the project:

1. Check the documentation above
2. Look for existing issues in the repository
3. Create a new issue with detailed information
4. Contact the development team

---

**Happy learning and innovating! 🍜✨**