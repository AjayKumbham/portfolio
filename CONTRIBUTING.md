# Contributing to Portfolio Project

Thank you for your interest in contributing to this portfolio project! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- **Bug Reports**: Report issues you find
- **Feature Requests**: Suggest new features or improvements
- **Code Contributions**: Submit pull requests with code changes
- **Documentation**: Improve or add documentation
- **Design**: Suggest UI/UX improvements
- **Testing**: Help with testing and quality assurance

### Before You Start

1. **Check Existing Issues**: Look through existing issues to avoid duplicates
2. **Read Documentation**: Familiarize yourself with the project structure
3. **Set Up Development Environment**: Follow the installation guide in README.md

## 🚀 Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Local Development

1. **Fork the Repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

## 📝 Code Style Guidelines

### TypeScript
- Use TypeScript for all new code
- Provide proper type definitions
- Avoid `any` type when possible
- Use interfaces for object shapes

### React Components
- Use functional components with hooks
- Follow React best practices
- Use proper prop types
- Keep components focused and reusable

### CSS/Styling
- Use Tailwind CSS classes
- Follow utility-first approach
- Maintain consistent spacing and colors
- Ensure responsive design

### File Naming
- Use PascalCase for components: `MyComponent.tsx`
- Use camelCase for utilities: `formatDate.ts`
- Use kebab-case for CSS files: `my-styles.css`

## 🔧 Development Workflow

### Making Changes

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make Your Changes**
   - Write clean, readable code
   - Add comments where necessary
   - Follow existing patterns

3. **Test Your Changes**
   ```bash
   npm run build
   npm run lint
   ```

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

### Commit Message Format

Use conventional commit messages:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(contact): add email validation
fix(navigation): resolve mobile menu issue
docs(readme): update installation instructions
```

### Pull Request Process

1. **Update Documentation**
   - Update README.md if needed
   - Add comments to new code
   - Update any relevant documentation

2. **Test Thoroughly**
   - Test on different browsers
   - Test responsive design
   - Test accessibility features

3. **Submit Pull Request**
   - Provide clear description of changes
   - Include screenshots if UI changes
   - Reference related issues

4. **Review Process**
   - Address review comments
   - Make requested changes
   - Ensure all checks pass

## 🐛 Bug Reports

### Before Reporting

1. Check if the issue is already reported
2. Try to reproduce the issue
3. Check if it's a browser-specific issue

### Bug Report Template

```markdown
**Bug Description**
Brief description of the issue

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What you expected to happen

**Actual Behavior**
What actually happened

**Environment**
- Browser: [e.g. Chrome, Firefox, Safari]
- Version: [e.g. 22]
- OS: [e.g. Windows, macOS, Linux]

**Additional Context**
Any other context about the problem
```

## 💡 Feature Requests

### Before Requesting

1. Check if the feature is already planned
2. Consider if it fits the project scope
3. Think about implementation complexity

### Feature Request Template

```markdown
**Feature Description**
Brief description of the feature

**Problem Statement**
What problem does this feature solve?

**Proposed Solution**
How would you implement this feature?

**Alternative Solutions**
Any alternative approaches considered?

**Additional Context**
Any other relevant information
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] Test responsive design at different screen sizes
- [ ] Test dark/light theme toggle
- [ ] Test form validation
- [ ] Test navigation and routing
- [ ] Test accessibility features

### Automated Testing

```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build test
npm run build
```

## 📚 Documentation

### Documentation Standards

- Write clear, concise documentation
- Use proper markdown formatting
- Include code examples where helpful
- Keep documentation up to date

### Areas to Document

- New features and components
- Configuration options
- API changes
- Breaking changes
- Installation procedures

## 🤝 Community Guidelines

### Be Respectful
- Be kind and respectful to other contributors
- Provide constructive feedback
- Help others learn and grow

### Communication
- Use clear, professional language
- Ask questions when unsure
- Share knowledge and experiences

### Collaboration
- Work together to solve problems
- Share ideas and suggestions
- Help review others' contributions

## 🎯 Getting Help

### Resources
- [README.md](README.md) - Project overview and setup
- [Issues](https://github.com/yourusername/portfolio/issues) - Browse existing issues
- [Discussions](https://github.com/yourusername/portfolio/discussions) - Community discussions

### Contact
- Create an issue for bugs or feature requests
- Use discussions for general questions
- Email: ajaygoud.kumbham@gmail.com

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to this project! Your help makes it better for everyone. 🚀 