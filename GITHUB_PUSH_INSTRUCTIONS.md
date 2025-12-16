# Push JMC Project to GitHub

## Option 1: If you have an existing GitHub repository

1. Add the remote repository:
```bash
cd C:\Users\Links\Downloads\JMC
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

2. Rename branch to main (optional, if you prefer main over master):
```bash
git branch -M main
```

3. Push to GitHub:
```bash
git push -u origin main
```

Or if keeping master branch:
```bash
git push -u origin master
```

---

## Option 2: If you need to create a new GitHub repository

1. Go to GitHub.com and sign in
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `jmc-construction` (or any name you prefer)
5. Leave it empty (don't initialize with README)
6. Click "Create repository"
7. Then run these commands:

```bash
cd C:\Users\Links\Downloads\JMC
git remote add origin https://github.com/YOUR_USERNAME/jmc-construction.git
git branch -M main
git push -u origin main
```

---

## What's been committed:

✅ **40 files** including:
- Complete React.js application structure
- All 17 pages (Home, About, Services, Gallery, Blog, FAQ, Contact)
- Tailwind CSS configuration
- Component library (Header, Footer, Buttons, Cards, etc.)
- Comprehensive documentation (README, Setup Guide, Project Structure, Sitemap)
- Package configuration with all dependencies

✅ **8,130 lines of code**

---

## Alternative: Using SSH instead of HTTPS

If you prefer SSH (and have SSH keys set up with GitHub):

```bash
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

---

## After pushing:

Your project will be live on GitHub at:
`https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`

You can then:
- Share the repository with others
- Deploy to hosting services (Vercel, Netlify, GitHub Pages)
- Collaborate with team members
- Set up CI/CD pipelines

---

## Need Help?

If you encounter authentication issues:
1. You may need to create a Personal Access Token on GitHub
2. Go to: Settings → Developer settings → Personal access tokens → Tokens (classic)
3. Generate new token with `repo` scope
4. Use the token as your password when pushing

