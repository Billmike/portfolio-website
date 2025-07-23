# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, featuring a two-column layout with smooth scrolling navigation and interactive components.

## ✨ Features

- **Two-Column Layout**: Fixed left sidebar with intro header and scrollable right content area
- **Responsive Design**: Mobile-first approach with sticky navigation on smaller screens
- **Smooth Scrolling**: Navigation links with smooth scroll-to-section functionality
- **Interactive Contact Form**: Powered by Resend with Zod validation and real-time feedback
- **Typing Animation**: Dynamic text animation for the description
- **Fade-in Animations**: Smooth entrance animations for enhanced UX
- **Dark Theme**: Modern dark color scheme with teal accents
- **Professional Experience Section**: Detailed work history with technology tags
- **Social Links**: GitHub, LinkedIn, and Twitter integration
- **Google Fonts**: Custom typography with "Winky Rough" and "Jura" fonts

## 🛠️ Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form with Zod validation
- **Email Service**: Resend API
- **Fonts**: Google Fonts (Winky Rough, Jura)
- **Icons**: Custom SVG icons
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
RESEND_API_KEY=your_resend_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── AboutSection.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── IntroHeader.tsx
│   ├── MobileNavigation.tsx
│   └── index.ts
├── api/                 # API routes
│   └── send-email/      # Email sending endpoint
├── globals.css          # Global styles
├── layout.tsx           # Root layout
└── page.tsx             # Home page
```

## 🎨 Customization

### Personal Information
Update your personal details in the following components:
- `IntroHeader.tsx`: Name, title, description, social links
- `AboutSection.tsx`: About me content
- `Experience.tsx`: Work experience and skills

### Styling
- Colors are defined in `tailwind.config.js` and `globals.css`
- Font variables are in `globals.css`
- Component-specific styles are in their respective files

### Contact Form
The contact form uses Resend for email delivery. To set up:
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add it to `.env.local`

## 📱 Responsive Design

- **Desktop**: Two-column layout with fixed sidebar
- **Mobile**: Single-column layout with sticky navigation header
- **Tablet**: Responsive grid adjustments

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js and Tailwind CSS
