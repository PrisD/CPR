# CPR - Radioterapia Río Cuarto

Official web application for the Radioterapia Río Cuarto medical center. This Single Page Application (SPA) provides patient information and institutional services using a modern technical stack.

## Tech Stack

* **Framework**: Angular 17.3.7.
* **UI Components**: PrimeNG 17.12.0 with PrimeFlex and PrimeIcons.
* **Maps Integration**: Leaflet 1.9.4 for location services.
* **Contact Services**: EmailJS Browser 4.4.1.
* **Security**: Integrated reCAPTCHA support.
* **Automation**: CI/CD pipeline via GitHub Actions for FTP deployment.

---

## Development and Local Setup

1. **Clone the repository**:
`git clone https://github.com/your-username/cpr.git`
2. **Install dependencies**:
`npm install`.
3. **Run development server**:
`ng serve --open`
The application will be available at `http://localhost:4200/`.

---

## Production and Deployment

This project uses an automated deployment workflow. Any push to the `main` branch triggers the build and upload process to the production server.

### Deployment Configuration

* **Base Href**: The production build is configured to run from the root directory.
* **Build Command**: `ng build --configuration production --base-href /`
* **Output Directory**: The build artifacts are stored in `dist/cpr`.

### Assets Management

To maintain consistency, images should be referenced using the following format:

```html
<img id="logo" src="assets/images/CPR-logo-green.svg" alt="CPR Logo">

```

---

## Technical Maintenance

* **Server Routing**: Since this is an SPA, server-side routing is handled by the `.htaccess` file in the root directory to prevent 404 errors on page refresh.
* **Asset Registration**: All static files like `.htaccess`, `sitemap.xml`, and `robots.txt` are registered in `angular.json` to be included in every production build.
* **FTP Secrets**: Deployment credentials (server, username, and password) are managed as GitHub Repository Secrets for security.

---
