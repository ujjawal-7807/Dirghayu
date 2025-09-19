# 🌿 Dirghayu Mental Wellness Platform

> *Your Journey to Mental Wellness Starts Here*

A comprehensive mental wellness platform designed to provide personalized support, professional guidance, and a caring community for mental health journey. Built with modern web technologies and a therapeutic design approach.

![Project Banner](assets/images/Gemini_Generated_Image_ji5e29ji5e29ji5e-1758032222751.png)

## 🎯 Project Overview

Dirghayu is a static web application focused on mental health support, featuring an intuitive interface with therapeutic design principles. The platform combines modern web development with thoughtful UX design to create a calming, supportive environment for users seeking mental wellness resources.

### ✨ Key Features

- 🎭 **Interactive Mood Tracking** - 5-emoji mood check-in system with trend visualization
- 👥 **Professional Consultations** - Easy booking system for mental health professionals
- 🤝 **Community Support** - Safe space for peer interaction and support
- 📊 **Personal Dashboard** - Comprehensive wellness journey tracking
- 🆘 **Crisis Support** - Immediate access to emergency mental health resources
- 📱 **Responsive Design** - Seamless experience across all devices

## 🏗️ Technical Architecture

### Frontend Stack
- **HTML5** - Semantic, accessible markup
- **TailwindCSS** - Custom therapeutic design system
- **Vanilla JavaScript** - Interactive functionality and state management
- **CSS3** - Custom animations and therapeutic styling

### Design Philosophy
- **Therapeutic Color Palette** - Warm browns and earth tones for calming effect
- **Mobile-First Approach** - Responsive design prioritizing mobile experience  
- **Accessibility-Focused** - WCAG compliant with semantic HTML structure
- **Gentle Animations** - Smooth transitions avoiding jarring movements

## 🎨 Custom Design System

### Color Palette
```css
Primary: #8B4513    /* Warm brown for branding */
Secondary: #654321  /* Rich chocolate for depth */  
Accent: #A0522D     /* Sienna for highlights */
Background: #FFFEF7 /* Warm white base */
```

### Typography
- **Primary Font**: Inter (clean, modern sans-serif)
- **Accent Font**: Crimson Text (elegant serif for emphasis)

### Custom Components
- **Therapeutic Shadows** - Soft, calming drop shadows
- **Gentle Transitions** - 300ms ease-out animations
- **Mood Tracking Interface** - Intuitive emoji-based interaction

## 📁 Project Structure

```
dirghayu_mental_wellness/
├── index.html                 # Landing page with auto-redirect
├── pages/                     # Main application pages
│   ├── homepage_dashboard.html    # Primary dashboard
│   ├── personal_dashboard.html    # User analytics
│   ├── consultation_booking.html  # Professional booking
│   ├── community_hub.html         # Community features
│   ├── crisis_support.html        # Emergency resources
│   └── about_dirghayu.html        # Platform information
├── css/
│   ├── main.css              # Generated TailwindCSS (2183 lines)
│   └── tailwind.css          # Source configuration
├── assets/
│   └── images/               # Project imagery
├── tailwind.config.js        # Custom design tokens
└── .github/
    └── copilot-instructions.md # Development guidelines
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional for development)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dirghayu-mental-wellness.git
   cd dirghayu-mental-wellness
   ```

2. **Use Live Server Extension**
    - Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code.
    - Right-click `index.html` and select **"Open with Live Server"**.
    - Your browser will automatically open at `http://localhost:5500` (or similar).


## 💡 Key Implementation Highlights

### 1. Therapeutic Design System
```javascript
// Custom TailwindCSS configuration with mental health-focused design
colors: {
  primary: { DEFAULT: "#8B4513", 50: "#F5F1ED", /* ... */ },
  therapeutic: "rgba(139, 69, 19, 0.1)",
}
```

### 2. Interactive Mood Tracking
```html
<!-- Consistent mood interface across all pages -->
<button class="mood-btn" data-mood="happy">😊</button>
<button class="mood-btn" data-mood="neutral">😐</button>
```

### 3. Responsive Navigation Pattern
```html
<!-- Mobile-first navigation with consistent active states -->
<nav class="sticky top-0 z-50">
  <div class="hidden md:flex">Desktop Menu</div>
  <div class="md:hidden">Mobile Hamburger</div>
</nav>
```

### 4. Accessibility-First Approach
- Semantic HTML structure throughout
- ARIA labels and roles where needed
- Keyboard navigation support
- High contrast ratios for readability

## 🎓 Learning Outcomes

### Technical Skills Demonstrated
- **Responsive Web Design** - Mobile-first development approach
- **CSS Framework Customization** - Extended TailwindCSS with custom design tokens
- **JavaScript DOM Manipulation** - Interactive features without external libraries
- **Design Systems** - Consistent component patterns and styling conventions
- **User Experience Design** - Therapeutic and accessibility-focused interface design

### Problem-Solving Approaches
- **Mental Health Sensitivity** - Researched and implemented calming design principles
- **Cross-device Compatibility** - Ensured seamless experience across platforms
- **Performance Optimization** - Lightweight static implementation
- **Code Organization** - Modular page structure with consistent patterns

## 🔮 Future Enhancements

### Technical Roadmap
- [ ] **Backend Integration** - User authentication and data persistence
- [ ] **Progressive Web App** - Offline functionality and push notifications
- [ ] **Data Visualization** - Advanced mood trend analytics
- [ ] **Integration APIs** - Calendar booking and professional directory
- [ ] **Multilingual Support** - Accessibility for diverse user base

### Feature Expansion
- [ ] **Meditation Guides** - Audio-guided mindfulness sessions
- [ ] **Journal Integration** - Private reflection and note-taking
- [ ] **Goal Tracking** - Wellness milestone management
- [ ] **Community Forums** - Moderated peer support groups


## 🙏 Acknowledgments

- **Design Inspiration** - Modern mental health platforms and therapeutic design principles
- **Color Psychology** - Research on calming color palettes for mental wellness
- **Accessibility Guidelines** - WCAG 2.1 standards for inclusive design
- **Typography** - Google Fonts for clean, readable typography

---

<div align="center">

**Built with ❤️ for mental wellness**

*Supporting mental health through thoughtful technology*

</div>