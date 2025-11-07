# Next.js Portfolio Resume Website

A professional, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This acts as a personal resume that's easy to customize and extend.

## Features

- **Modern Stack**: Next.js 14+ (App Router), TypeScript, Tailwind CSS
- **Dark Mode**: Built-in light/dark theme toggle
- **Responsive Design**: Mobile-first, works on all devices
- **Easy Content Management**: All content stored in `/data/content.ts` for easy editing
- **SEO Optimized**: Meta tags and semantic HTML
- **Accessible**: ARIA labels and keyboard navigation support

## Pages

- **Home**: Hero section, intro, featured projects preview, AI chat placeholder
- **Resume**: Summary, skills, experience timeline, education
- **Projects**: Grid of projects with filtering and search
- **Now**: Current learning, building, exploring, and reading
- **Contact**: Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Content

All text content is stored in `/data/content.ts`. Simply edit this file to update:

- Personal information (name, title, bio, location)
- Experience entries
- Education
- Skills
- Projects
- Current activities (Now page)
- Social links

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Color scheme can be customized in Tailwind config

### Add Your Resume PDF

1. Add your resume PDF to `/public/resume.pdf`
2. The download button on the Resume page will automatically work

### Analytics Integration

To add analytics, uncomment and configure the analytics section in `app/layout.tsx`:

- **Plausible**: Privacy-friendly analytics
- **Google Analytics**: Traditional analytics

### Contact Form Backend

The contact form is currently client-side only. To make it functional:

1. Create an API route at `/app/api/contact/route.ts`
2. Integrate with an email service (SendGrid, Resend, etc.) or form service (Formspree, etc.)
3. Update `components/ContactForm.tsx` to call your API

### AI Chat Integration

The AI Chat placeholder component includes detailed integration instructions in `/components/AIChatPlaceholder.tsx`. To integrate:

1. Install OpenAI SDK: `npm install openai`
2. Create API route: `/app/api/chat/route.ts`
3. Update the placeholder component to connect to your API
4. Add rate limiting and security measures

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navbar/Footer
│   ├── page.tsx           # Home page
│   ├── resume/            # Resume page
│   ├── projects/          # Projects page
│   ├── now/               # Now page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer component
│   ├── ThemeToggle.tsx   # Dark mode toggle
│   ├── ProjectCard.tsx   # Project card component
│   ├── Timeline.tsx      # Experience/Education timeline
│   ├── SkillBadge.tsx    # Skill display component
│   ├── ContactForm.tsx   # Contact form
│   └── AIChatPlaceholder.tsx  # AI chat placeholder
├── data/                  # Content data
│   └── content.ts        # All portfolio content
├── lib/                   # Utilities and types
│   └── types.ts         # TypeScript type definitions
└── public/                # Static assets
```

## Technologies Used

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **next-themes**: Dark mode support

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

## Future Enhancements

- [ ] AI Chat Assistant integration
- [ ] Blog section
- [ ] Testimonials section
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] PDF resume generation

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub or contact through the contact page.

