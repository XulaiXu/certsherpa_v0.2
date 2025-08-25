# CertSherpa - Engineering Exam Preparation Hub

A modern, secure, and future-proof React application for engineering exam preparation (PE and SE exams).

## 🚀 **Modern Tech Stack**

- **React 19** - Latest React with concurrent features
- **Vite** - Ultra-fast build tool (replaces Create React App)
- **React Router 7** - Modern routing with data APIs
- **Reactstrap** - Bootstrap 5 components for React
- **ESLint** - Strict code quality enforcement
- **Zero Vulnerabilities** - Fully audited dependencies

## 🛡️ **Security Features**

- ✅ **Zero npm vulnerabilities**
- ✅ **Latest dependency versions**
- ✅ **Modern build tooling**
- ✅ **ESLint security rules**
- ✅ **Type-safe development**

## 🚀 **Quick Start**

### Prerequisites
- **Node.js 18+** (LTS recommended)
- **npm 9+** or **yarn 1.22+**

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📁 **Project Structure**

```
certsherpa_v0.2/
├── src/
│   ├── assets/
│   │   └── css/
│   │       ├── dashboard.css    # Paper Dashboard styles
│   │       └── auth.css         # Authentication styles
│   ├── views/
│   │   ├── Dashboard.js         # Main dashboard
│   │   ├── Login.js            # Login page
│   │   ├── CreateAccount.js    # Registration page
│   │   └── icons.css           # Nucleo icons
│   ├── App.js                  # Main app with routing
│   └── index.js                # Entry point
├── index.html                  # Vite entry point
├── vite.config.js              # Vite configuration
├── .eslintrc.cjs               # ESLint configuration
└── package.json                # Dependencies and scripts
```

## 🌐 **Routing Structure**

- `/` → Redirects to `/login`
- `/login` → User authentication
- `/create-account` → User registration
- `/dashboard` → Main application (protected)

## 🎨 **Features**

### Authentication System
- **Login Page** - Modern form with validation
- **Create Account** - Comprehensive registration
- **Responsive Design** - Mobile-first approach
- **Form Validation** - Client-side validation

### Dashboard
- **Progress Tracking** - PE/SE exam progress
- **Modern UI** - Paper Dashboard React theme
- **Responsive Cards** - Beautiful statistics display
- **Navigation** - Seamless page transitions

## 🔧 **Development Commands**

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Code quality
npm run lint
npm run lint:fix

# Preview production build
npm run preview
```

## 🚀 **Deployment to AWS Amplify**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update to modern tech stack"
   git push origin main
   ```

2. **AWS Amplify Setup**
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node.js version: 18.x

## 🔒 **Security & Best Practices**

- **Dependency Auditing** - Regular `npm audit` checks
- **Code Quality** - ESLint with strict rules
- **Modern Standards** - ES2020+ features
- **Performance** - Vite's fast build system
- **Future-Proof** - Latest React and tooling

## 📱 **Browser Support**

- **Chrome 90+**
- **Firefox 88+**
- **Safari 14+**
- **Edge 90+**

## 🛠️ **Customization**

### Adding New Pages
1. Create component in `src/views/`
2. Add route in `src/App.js`
3. Import CSS if needed
4. Test with `npm run dev`

### Styling
- **Dashboard styles**: `src/assets/css/dashboard.css`
- **Auth styles**: `src/assets/css/auth.css`
- **Global styles**: `src/App.css`

## 🔍 **Troubleshooting**

### Common Issues
- **Port conflicts**: Change port in `vite.config.js`
- **Build errors**: Run `npm run lint` to check code
- **Dependency issues**: Delete `node_modules` and `npm install`

### Performance Tips
- Use React.memo for expensive components
- Implement code splitting with React.lazy
- Optimize images and assets

## 📈 **Future Roadmap**

- [ ] **User Authentication** - AWS Cognito integration
- [ ] **Database** - AWS DynamoDB setup
- [ ] **Progress Tracking** - Real-time updates
- [ ] **Study Materials** - Content management
- [ ] **Practice Tests** - Quiz functionality
- [ ] **Mobile App** - React Native version

## 🤝 **Contributing**

1. Fork the repository
2. Create feature branch
3. Make changes
4. Run `npm run lint`
5. Submit pull request

## 📄 **License**

MIT License - See LICENSE file for details

## 🆘 **Support**

- **Documentation**: This README
- **Issues**: GitHub Issues
- **Security**: Report to maintainers

---

**Built with ❤️ for the engineering community**
