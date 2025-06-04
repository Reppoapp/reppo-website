# Reppo - Fitness Social App Landing Page

A modern, responsive marketing website for Reppo, the fitness social app. Built with React, TailwindCSS, and Framer Motion with Supabase integration for waitlist management.

## 🎯 Features

- **Fully Responsive Design** - Mobile-first approach with beautiful desktop layouts
- **Modern Animations** - Smooth transitions and scroll-triggered animations using Framer Motion
- **Waitlist Integration** - Connected to Supabase for email collection and management
- **Performance Optimized** - Fast loading with modern build tools (Vite)
- **Accessibility Ready** - Semantic HTML and proper contrast ratios

## 🚀 Live Demo

Visit the live site: [Your deployment URL here]

## 🛠️ Tech Stack

- **Frontend**: React 18, TailwindCSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Database**: Supabase
- **Deployment**: [Your deployment platform]

## 📱 Design System

### Colors
- **Primary Red**: `#FF3B30`
- **Accent Blue**: `#2979FF`
- **Background**: `#000000` (Black)
- **Text**: White with gradient accents

### Typography
- **Font**: Inter (Google Fonts)
- **Scale**: Mobile-first responsive typography

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd reppo-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to Project Settings > API
   - Copy your project URL and anon key
   - Create a `.env` file in the root directory:
     ```env
     VITE_SUPABASE_URL=your-project-url
     VITE_SUPABASE_ANON_KEY=your-anon-key
     ```

4. **Create the waitlist table**
   ```sql
   create table waitlist (
     id uuid default gen_random_uuid() primary key,
     email text not null unique,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null
   );
   
   -- Enable Row Level Security
   alter table waitlist enable row level security;
   
   -- Allow anonymous inserts
   create policy "Anyone can insert into waitlist" on waitlist
     for insert with check (true);
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```
src/
├── components/           # React components
│   ├── HeroSection.jsx
│   ├── ProblemSection.jsx
│   ├── HowItWorks.jsx
│   ├── FeatureGrid.jsx
│   ├── ProfilePreview.jsx
│   └── FinalCTA.jsx
├── lib/                 # Utilities and configurations
│   └── supabase.js      # Supabase client and functions
├── App.jsx              # Main application component
├── main.jsx             # React entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎨 Page Sections

1. **Hero Section** - Main headline with gradient text and CTA buttons
2. **Problem Section** - Three-card layout explaining user pain points
3. **How It Works** - Step-by-step process with icons and animations
4. **Feature Grid** - Six feature cards with icons and descriptions
5. **Profile Preview** - Interactive mock profile showing app functionality
6. **Final CTA** - Waitlist signup with form validation and success states

## 🔗 Supabase Integration

The waitlist functionality includes:
- Email validation
- Duplicate prevention
- Success/error messaging
- Form state management

## 📱 Responsive Breakpoints

- **Mobile**: 0-640px
- **Tablet**: 641-1024px
- **Desktop**: 1025px+

## 🎯 Performance Features

- Optimized images and assets
- Lazy loading for sections
- Smooth scroll behavior
- Efficient re-renders

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your platform**
   - Vercel: Connect your GitHub repo
   - Netlify: Drag and drop the `dist` folder
   - Other platforms: Upload the `dist` folder contents

3. **Set environment variables**
   Make sure to set your Supabase credentials in your deployment platform's environment variables.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support, please reach out to [your-email@example.com]

---

**Reppo** - Own Your Reps. Share Your Grind. 💪 