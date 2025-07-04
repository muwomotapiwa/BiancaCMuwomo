# Deployment Guide

This guide provides step-by-step instructions for deploying the Bianca Charuma Portfolio to various hosting platforms.

## 🌐 GitHub Pages (Free & Recommended)

GitHub Pages is the easiest and most cost-effective way to host this portfolio.

### Prerequisites
- GitHub account
- Repository containing the portfolio code

### Step-by-Step Instructions

1. **Upload Code to GitHub**
   ```bash
   # Initialize git repository (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit files
   git commit -m "Initial portfolio commit"
   
   # Add remote repository (replace with your repo URL)
   git remote add origin https://github.com/yourusername/bianca-portfolio.git
   
   # Push to GitHub
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/repository-name`
   - It may take a few minutes for the site to become available

### Custom Domain (Optional)
1. **Purchase a Domain**
   - Buy from registrars like Namecheap, GoDaddy, or Google Domains

2. **Configure DNS**
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub's IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Configure GitHub**
   - In repository settings → Pages
   - Add your custom domain in the "Custom domain" field
   - Enable "Enforce HTTPS"

## 🚀 Netlify (Advanced Features)

Netlify offers additional features like form handling, redirects, and edge functions.

### Deployment Steps

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "New site from Git"
   - Choose GitHub and select your repository

2. **Configure Build Settings**
   - Build command: (leave empty for static site)
   - Publish directory: `/` (root directory)
   - Click "Deploy site"

3. **Custom Domain**
   - Go to Site settings → Domain management
   - Add custom domain
   - Configure DNS as instructed

### Netlify Features
- **Forms**: Add `netlify` attribute to forms for backend processing
- **Redirects**: Create `_redirects` file for URL redirects
- **Headers**: Create `_headers` file for custom HTTP headers

## ⚡ Vercel (Performance Optimized)

Vercel provides excellent performance with global CDN and automatic optimizations.

### Deployment Steps

1. **Import Project**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Project**
   - Framework Preset: "Other"
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
   - Install Command: (leave empty)

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes

### Vercel Features
- **Analytics**: Built-in web analytics
- **Edge Functions**: Serverless functions at the edge
- **Image Optimization**: Automatic image optimization

## 🔧 Traditional Web Hosting

For shared hosting providers like Bluehost, HostGator, etc.

### Deployment Steps

1. **Prepare Files**
   - Download all files from your repository
   - Ensure `index.html` is in the root directory

2. **Upload via FTP**
   - Use FTP client (FileZilla, WinSCP, etc.)
   - Connect to your hosting account
   - Upload all files to `public_html` or `www` directory

3. **Configure Domain**
   - Point your domain to the hosting server
   - Update nameservers if necessary

## 📱 Mobile Testing

Before going live, test your portfolio on various devices:

### Browser Testing
- Chrome (Desktop & Mobile)
- Firefox (Desktop & Mobile)
- Safari (Desktop & Mobile)
- Edge (Desktop)

### Device Testing
- iPhone (various sizes)
- Android phones
- Tablets (iPad, Android)
- Desktop (various screen sizes)

### Testing Tools
- **Chrome DevTools**: Device simulation
- **BrowserStack**: Cross-browser testing
- **Responsive Design Checker**: Online tool
- **Google Mobile-Friendly Test**: SEO tool

## 🔍 SEO Optimization

### Meta Tags
Add these to your `<head>` section:

```html
<!-- Primary Meta Tags -->
<meta name="title" content="Bianca Charuma Muwomo | Economic Development Professional">
<meta name="description" content="Experienced professional in financial inclusion, gender equity, and economic development across Africa.">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yoursite.com/">
<meta property="og:title" content="Bianca Charuma Muwomo | Economic Development Professional">
<meta property="og:description" content="Experienced professional in financial inclusion, gender equity, and economic development across Africa.">
<meta property="og:image" content="https://yoursite.com/assets/images/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://yoursite.com/">
<meta property="twitter:title" content="Bianca Charuma Muwomo | Economic Development Professional">
<meta property="twitter:description" content="Experienced professional in financial inclusion, gender equity, and economic development across Africa.">
<meta property="twitter:image" content="https://yoursite.com/assets/images/og-image.jpg">
```

### Sitemap
Create `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Google Analytics
Add tracking code before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🛡️ Security Considerations

### HTTPS
- Always use HTTPS (enabled by default on GitHub Pages, Netlify, Vercel)
- For custom hosting, obtain SSL certificate

### Content Security Policy
Add to `<head>` section:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.tailwindcss.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:;">
```

### Regular Updates
- Keep external dependencies updated
- Monitor for security vulnerabilities
- Regular backups of your code

## 📊 Performance Optimization

### Image Optimization
- Compress images before uploading
- Use WebP format when possible
- Implement lazy loading for images

### Code Minification
For production, consider minifying:
- CSS files
- JavaScript files
- HTML (optional)

### CDN Usage
- External libraries are already loaded from CDN
- Consider using CDN for custom assets

## 🔧 Troubleshooting

### Common Issues

1. **Site Not Loading**
   - Check GitHub Pages settings
   - Verify all files are uploaded
   - Check for JavaScript errors in console

2. **Mobile Layout Issues**
   - Test responsive design
   - Check viewport meta tag
   - Verify touch interactions

3. **Chart Not Displaying**
   - Check Chart.js CDN link
   - Verify JavaScript console for errors
   - Ensure canvas element exists

4. **Slow Loading**
   - Optimize images
   - Check external CDN links
   - Minimize HTTP requests

### Getting Help
- Check browser console for errors
- Validate HTML and CSS
- Test on different devices and browsers
- Consult hosting provider documentation

---

**Need additional help?** Open an issue on the GitHub repository or consult the hosting platform's documentation.

