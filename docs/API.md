# API Documentation

This document provides comprehensive information about the APIs, integrations, and data structures used in the portfolio project.

## 📋 Table of Contents

- [Overview](#overview)
- [External Integrations](#external-integrations)
- [Data Structures](#data-structures)
- [Form Handling](#form-handling)
- [Configuration](#configuration)
- [Error Handling](#error-handling)

## 🔍 Overview

The portfolio project primarily uses static data and minimal external API integrations. The main external service is FormSubmit for contact form handling.

## 🔗 External Integrations

### FormSubmit API

**Purpose**: Handle contact form submissions without backend infrastructure.

**Endpoint**: `https://formsubmit.co/{email}`

**Method**: `POST`

**Content-Type**: `application/x-www-form-urlencoded`

#### Request Format

```javascript
const formData = new FormData();
formData.append('name', 'John Doe');
formData.append('email', 'john@example.com');
formData.append('subject', 'Portfolio Contact: Inquiry');
formData.append('message', 'Hello, I would like to discuss...');
formData.append('_next', 'https://yourdomain.com/contact');
formData.append('_captcha', 'false');
```

#### Response Format

- **Success**: HTTP 200 with redirect to `_next` URL
- **Error**: HTTP 4xx/5xx with error message

#### Configuration Options

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| `name` | string | Sender's name | Yes |
| `email` | string | Sender's email | Yes |
| `subject` | string | Email subject | Yes |
| `message` | string | Email message | Yes |
| `_next` | string | Redirect URL after submission | No |
| `_captcha` | string | Enable/disable captcha | No |

#### Example Implementation

```typescript
const handleSubmit = async (formData: FormData) => {
  try {
    const response = await fetch(`https://formsubmit.co/${personalInfo.email}`, {
      method: 'POST',
      body: formData
    });
    
    if (response.ok) {
      // Success handling
      toast.success('Message sent successfully!');
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    // Error handling
    toast.error('Failed to send message. Please try again.');
  }
};
```

## 📊 Data Structures

### Personal Information

```typescript
interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  profileImage: string;
  resume: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}
```

**Location**: `src/data/personal.js`

**Example**:
```javascript
export const personalInfo = {
  name: "Kumbham Ajay Goud",
  title: "Computer Science Undergraduate",
  tagline: "Passionate about creating innovative solutions...",
  bio: "I'm a recent Computer Science graduate...",
  location: "Hyderabad, Telangana, India",
  email: "ajaygoud.kumbham@gmail.com",
  phone: "+1 (555) 123-4567",
  profileImage: "/data/images/profile-formal.jpg",
  resume: "/data/documents/resume.pdf",
  social: {
    github: "https://github.com/AjayKumbham/",
    linkedin: "https://www.linkedin.com/in/kumbham-ajay-goud/"
  }
};
```

### Project Data

```typescript
interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  image: string;
  github?: string;
  live?: string;
  featured?: boolean;
}
```

**Location**: `src/data/projects.js`

**Example**:
```javascript
{
  id: 1,
  title: "Social Media Agent",
  description: "AI-powered automation platform...",
  features: [
    "Automates content generation using multiple LLMs",
    "Smart scheduling and publishing across platforms"
  ],
  tech: ["React", "TypeScript", "Supabase"],
  image: "/data/images/projects/social-media-agent.png"
}
```

### Skills Data

```typescript
interface Skill {
  name: string;
  category: string;
  proficiency: number; // 1-100
  icon?: string;
}
```

**Location**: `src/data/skills.js`

**Example**:
```javascript
{
  name: "React",
  category: "Frontend",
  proficiency: 90,
  icon: "react"
}
```

### Experience Data

```typescript
interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}
```

**Location**: `src/data/experience.js`

### Education Data

```typescript
interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  gpa?: string;
  relevantCourses?: string[];
}
```

**Location**: `src/data/education.js`

## 📝 Form Handling

### Contact Form Validation

```typescript
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const validateForm = (data: ContactFormData): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return (
    data.name.trim().length > 0 &&
    emailRegex.test(data.email) &&
    data.subject.trim().length > 0 &&
    data.message.trim().length > 10
  );
};
```

### Form Submission Flow

1. **Client-side Validation**
2. **Form Data Preparation**
3. **API Request to FormSubmit**
4. **Response Handling**
5. **User Feedback**

## ⚙️ Configuration

### Environment Variables

```env
# Development
VITE_APP_TITLE=Kumbham Ajay Goud Portfolio
VITE_APP_DESCRIPTION=Professional portfolio website
VITE_CONTACT_EMAIL=ajaygoud.kumbham@gmail.com

# Production
VITE_APP_URL=https://yourdomain.com
VITE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Theme Configuration

```typescript
interface ThemeConfig {
  isDark: boolean;
  toggleTheme: () => void;
}

// Stored in localStorage as 'theme'
// Values: 'light' | 'dark'
```

### Routing Configuration

```typescript
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/projects', component: Projects },
  { path: '/experience', component: Experience },
  { path: '/education', component: Education },
  { path: '/achievements', component: Achievements },
  { path: '/contact', component: Contact },
  { path: '*', component: NotFound }
];
```

## ❌ Error Handling

### Form Submission Errors

```typescript
const handleFormError = (error: Error) => {
  console.error('Form submission error:', error);
  
  // User-friendly error messages
  const errorMessages = {
    'Network Error': 'Please check your internet connection',
    'Failed to send message': 'Please try again later',
    'Invalid email': 'Please enter a valid email address'
  };
  
  return errorMessages[error.message] || 'An unexpected error occurred';
};
```

### Image Loading Errors

```typescript
const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const img = event.target as HTMLImageElement;
  img.src = '/placeholder.svg'; // Fallback image
  img.alt = 'Image not available';
};
```

### Route Errors

```typescript
// 404 Error Handling
const NotFound = () => {
  useEffect(() => {
    // Log 404 errors for analytics
    console.warn('404 Error: Page not found');
  }, []);
  
  return <div>Page not found</div>;
};
```

## 🔒 Security Considerations

### Form Security

- **CSRF Protection**: FormSubmit handles CSRF protection
- **Input Validation**: Client and server-side validation
- **Rate Limiting**: FormSubmit provides rate limiting
- **Spam Protection**: Optional captcha integration

### Data Security

- **No Sensitive Data**: No sensitive information in client-side code
- **HTTPS Only**: All external requests use HTTPS
- **Content Security Policy**: Implemented in production

## 📈 Analytics Integration

### Google Analytics 4

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

### Custom Events

```typescript
// Track form submissions
gtag('event', 'form_submit', {
  form_name: 'contact',
  page_location: window.location.pathname
});

// Track project views
gtag('event', 'view_item', {
  item_name: project.title,
  item_category: 'project'
});
```

## 🔄 Caching Strategy

### Static Assets

```nginx
# Cache static assets for 1 year
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### Data Caching

```typescript
// Cache data in localStorage for offline access
const cacheData = (key: string, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.warn('Failed to cache data:', error);
  }
};

const getCachedData = (key: string) => {
  try {
    const cached = localStorage.getItem(key);
    return cached ? JSON.parse(cached) : null;
  } catch (error) {
    console.warn('Failed to retrieve cached data:', error);
    return null;
  }
};
```

## 🧪 Testing APIs

### Form Submission Testing

```typescript
// Test form submission
const testFormSubmission = async () => {
  const testData = new FormData();
  testData.append('name', 'Test User');
  testData.append('email', 'test@example.com');
  testData.append('subject', 'Test Message');
  testData.append('message', 'This is a test message');
  
  const response = await fetch(`https://formsubmit.co/${personalInfo.email}`, {
    method: 'POST',
    body: testData
  });
  
  return response.ok;
};
```

### Data Validation Testing

```typescript
// Validate data structures
const validateProjectData = (project: any): boolean => {
  return (
    typeof project.id === 'number' &&
    typeof project.title === 'string' &&
    Array.isArray(project.features) &&
    Array.isArray(project.tech) &&
    typeof project.image === 'string'
  );
};
```

## 📞 Support

For API-related issues:

- **FormSubmit**: [formsubmit.co/support](https://formsubmit.co/support)
- **Google Analytics**: [support.google.com/analytics](https://support.google.com/analytics)
- **Project Issues**: [GitHub Issues](https://github.com/AjayKumbham/portfolio/issues)

---

*This API documentation covers all external integrations and data structures used in the portfolio project.* 