# Deployment Guide

This guide provides detailed instructions for deploying your portfolio website to various hosting platforms.

## 🚀 Quick Deploy Options

### Vercel (Recommended)

Vercel is the easiest and fastest way to deploy your portfolio.

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your portfolio repository

2. **Configure Settings**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes

4. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS settings

### Netlify

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"
   - Choose your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18` (or higher)

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live shortly

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add Scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Save

## 📦 Manual Deployment

### Build for Production

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build Project**
   ```bash
   npm run build
   ```

3. **Test Build**
   ```bash
   npm run preview
   ```

### Upload to Static Hosting

1. **Upload dist folder** to your hosting provider
2. **Configure server** to serve index.html for all routes
3. **Set up custom domain** if needed

## 🌐 Domain Configuration

### Custom Domain Setup

1. **Purchase Domain** (if not already owned)
2. **Configure DNS Records**
   - A Record: Point to hosting IP
   - CNAME Record: Point to hosting URL
3. **SSL Certificate** (usually automatic with modern hosts)

### DNS Configuration Examples

#### Vercel
```
Type: CNAME
Name: www
Value: your-project.vercel.app
```

#### Netlify
```
Type: CNAME
Name: www
Value: your-site.netlify.app
```

## 🔧 Environment Configuration

### Environment Variables

Create `.env` file for local development:

```env
VITE_APP_TITLE=Kumbham Ajay Goud Portfolio
VITE_APP_DESCRIPTION=Professional portfolio website
VITE_CONTACT_EMAIL=ajaygoud.kumbham@gmail.com
```

### Production Environment

Set environment variables in your hosting platform:

- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **GitHub Pages**: Repository Settings → Secrets and variables

## 📱 Performance Optimization

### Pre-deployment Checklist

- [ ] Optimize images (compress, resize)
- [ ] Minify CSS and JavaScript
- [ ] Enable gzip compression
- [ ] Set up caching headers
- [ ] Test responsive design
- [ ] Validate HTML and CSS
- [ ] Check accessibility
- [ ] Test contact form

### Image Optimization

1. **Compress Images**
   ```bash
   # Using ImageOptim or similar tools
   # Recommended formats: WebP, AVIF
   # Max size: 500KB per image
   ```

2. **Responsive Images**
   ```html
   <img src="image.webp" alt="Description" loading="lazy" />
   ```

### Caching Strategy

```nginx
# Nginx configuration example
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## 🔒 Security Configuration

### HTTPS Setup

- **Vercel/Netlify**: Automatic HTTPS
- **Custom Server**: Install SSL certificate
- **Redirect HTTP to HTTPS**

### Security Headers

```nginx
# Security headers
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
```

## 📊 Analytics Setup

### Google Analytics

1. **Create GA4 Property**
2. **Add Tracking Code**
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```tsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

## 🔄 Continuous Deployment

### GitHub Actions (Vercel/Netlify)

Automatically deploy on push to main branch:

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run deploy
```

## 🧪 Testing Deployment

### Pre-deployment Tests

```bash
# Run all tests
npm run build
npm run preview

# Check for issues
npm run lint
npm run type-check
```

### Post-deployment Tests

- [ ] Test all pages load correctly
- [ ] Verify contact form works
- [ ] Check responsive design
- [ ] Test theme toggle
- [ ] Validate links and navigation
- [ ] Check loading performance
- [ ] Test accessibility features

## 🐛 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Routing Issues
- Ensure server serves `index.html` for all routes
- Check for proper base path configuration
- Verify React Router setup

#### Performance Issues
- Optimize images
- Enable compression
- Check bundle size
- Use CDN for assets

### Debug Commands

```bash
# Check bundle size
npm run build
npx vite-bundle-analyzer

# Check for unused dependencies
npx depcheck

# Validate HTML
npx html-validate dist/**/*.html
```

## 📈 Monitoring

### Performance Monitoring

- **Lighthouse**: Run performance audits
- **WebPageTest**: Test from different locations
- **GTmetrix**: Monitor Core Web Vitals

### Error Monitoring

- **Sentry**: Track JavaScript errors
- **LogRocket**: Session replay and debugging
- **Bugsnag**: Error tracking and reporting

## 🔄 Updates and Maintenance

### Regular Maintenance

- Update dependencies monthly
- Monitor performance metrics
- Check for security vulnerabilities
- Backup data regularly

### Update Process

```bash
# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Update to latest versions
npm install package@latest
```

## 📞 Support

For deployment issues:

- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Netlify**: [netlify.com/support](https://netlify.com/support)
- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)

---

*This deployment guide covers the most common deployment scenarios. For specific hosting providers, refer to their official documentation.* 