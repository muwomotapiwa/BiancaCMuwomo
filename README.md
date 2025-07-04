# Bianca Charuma Muwomo - Professional Portfolio

A modern, responsive portfolio website showcasing expertise in economic development, financial inclusion, and gender equity. Built with HTML5, CSS3, and vanilla JavaScript, featuring interactive elements and mobile-first design.

## 🌟 Features

### Interactive Elements
- **Dynamic Timeline**: Click to expand career journey details
- **Impact Stories Modal**: Detailed case studies with challenge-action-outcome format
- **Competency Radar Chart**: Visual representation of core skills using Chart.js
- **Animated Counters**: Statistics that animate when scrolled into view
- **Scroll Progress Indicator**: Visual progress bar showing page scroll position

### Mobile-First Design
- **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Touch Gestures**: Swipe to close modals and mobile menu
- **Mobile Navigation**: Collapsible hamburger menu with smooth animations
- **Touch-Friendly**: Large tap targets and haptic feedback support
- **Performance Optimized**: Lazy loading and efficient animations

### Accessibility Features
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Focus Management**: Clear focus indicators and logical tab order
- **Screen Reader Friendly**: Semantic HTML and proper ARIA labels
- **High Contrast**: Accessible color combinations meeting WCAG guidelines

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)
1. Fork this repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" → "main" → "/ (root)"
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/bianca-portfolio.git

# Navigate to project directory
cd bianca-portfolio

# Open with a local server (recommended)
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have live-server installed)
npx live-server

# Or simply open index.html in your browser
open index.html
```

## 📁 Project Structure

```
bianca-portfolio/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Custom styles and responsive design
├── js/
│   └── main.js             # Interactive functionality and animations
├── assets/
│   └── images/             # Image assets (currently using external CDN)
├── README.md               # Project documentation
├── LICENSE                 # MIT License
└── .gitignore             # Git ignore file
```

## 🛠️ Technologies Used

### Core Technologies
- **HTML5**: Semantic markup with accessibility in mind
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Vanilla JS for all interactions and animations

### External Libraries
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **Chart.js**: Interactive radar chart for competency visualization
- **Inter Font**: Modern, readable typography from Google Fonts

### Browser Support
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization Guide

### Color Scheme
The portfolio uses a professional color palette:
- **Primary**: Amber (#f59e0b) - Call-to-action elements
- **Background**: Slate gray (#f8fafc) - Clean, professional backdrop
- **Text**: Dark slate (#1e293b) - High contrast readability
- **Accent**: Blue (#3b82f6) - Links and highlights

### Content Updates
1. **Personal Information**: Update `index.html` hero section
2. **Professional Experience**: Modify the `professionalExperience` array in `main.js`
3. **Case Studies**: Update the `caseStudies` array in `main.js`
4. **Contact Information**: Update email links and footer details

### Styling Modifications
- **CSS Variables**: Define custom properties in `styles.css` for easy theme changes
- **Responsive Breakpoints**: Modify media queries for different screen sizes
- **Animations**: Adjust timing and easing in CSS and JavaScript

## 📱 Mobile Responsiveness

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile Features
- Collapsible navigation menu
- Touch-optimized interactions
- Swipe gestures for modals
- Optimized typography and spacing
- Fast loading with performance optimizations

## 🔧 Development

### Adding New Sections
1. Add HTML structure to `index.html`
2. Add corresponding styles to `css/styles.css`
3. Implement functionality in `js/main.js`
4. Update navigation links

### Performance Optimization
- Images are optimized and served via CDN
- CSS and JS are minified for production
- Lazy loading implemented for animations
- Efficient event handling with debouncing

### Testing
- Test on multiple devices and browsers
- Validate HTML and CSS
- Check accessibility with screen readers
- Verify performance with Lighthouse

## 🚀 Deployment Options

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)
4. Access via `https://username.github.io/repository-name`

### Netlify
1. Connect GitHub repository to Netlify
2. Set build command: (none needed for static site)
3. Set publish directory: `/` (root)
4. Deploy automatically on git push

### Vercel
1. Import GitHub repository to Vercel
2. Configure as static site
3. Deploy with automatic HTTPS and CDN

### Custom Domain
1. Purchase domain from registrar
2. Configure DNS settings:
   - For GitHub Pages: CNAME record pointing to `username.github.io`
   - For Netlify/Vercel: Follow platform-specific instructions
3. Enable HTTPS (usually automatic)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions or support regarding this portfolio template:
- Open an issue on GitHub
- Contact: [Your Email]

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **Chart.js** for the interactive competency visualization
- **Google Fonts** for the Inter typography
- **Unsplash** for placeholder images (if used)

---

**Built with ❤️ for showcasing professional excellence in economic development and financial inclusion.**

