# 🚀 Quick GitHub Pages Setup Guide

## Step 1: Create Repository

1. Go to GitHub.com and click **New Repository**
2. Name it: `bleprint` (or `yourusername.github.io` for personal site)
3. Make it **Public**
4. Don't initialize with README (we have our own)
5. Click **Create Repository**

## Step 2: Upload Files

### Option A: Upload via GitHub Website (Easiest)
1. Click **uploading an existing file**
2. Drag and drop these 4 files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Add your profile photos:
   - `profileK.png` (400x400px recommended)
   - `profileZ.png` (400x400px recommended)
4. Commit changes

### Option B: Upload via Command Line
```bash
# In your terminal, navigate to where you saved the files
cd /path/to/bleprint-files

# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial BLEprint YC website"

# Connect to your GitHub repo (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/bleprint.git

# Push
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. In your repository, go to **Settings**
2. Scroll to **Pages** (in left sidebar)
3. Under **Source**:
   - Select branch: `main`
   - Select folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment

## Step 4: Access Your Site

Your site will be live at:
- If repo name is `bleprint`: `https://YOUR-USERNAME.github.io/bleprint/`
- If repo name is `yourusername.github.io`: `https://yourusername.github.io/`

## 📸 Profile Photo Requirements

### Before Uploading:
1. Take professional headshots
2. Crop to square (1:1 aspect ratio)
3. Resize to at least 400x400px
4. Save as:
   - `profileK.png` for first founder
   - `profileZ.png` for second founder
5. Upload to repository root

### Professional Photo Tips:
- ✅ Solid background (plain color)
- ✅ Good lighting (natural or professional)
- ✅ Professional attire
- ✅ Clear face visibility
- ✅ Authentic smile
- ❌ Avoid selfies
- ❌ Avoid busy backgrounds
- ❌ Avoid group photos

## ✏️ Quick Customizations

### Update Founder Names
Open `index.html`, search for "Founder" and replace with actual names.

### Update Email
Search for `founders@bleprint.ai` and replace with your real email.

### Update Content
All text is in `index.html` - search and replace as needed.

## 🎯 What Makes This Site Perfect for YC

✅ **Clear Problem Statement** - UCSD incident story
✅ **AI Integration** - Aligned with YC's AI Guidance track
✅ **Working Prototype** - Embedded demo video
✅ **Market Validation** - 100+ customer interviews
✅ **Professional Design** - Memorable, not generic
✅ **Technical Credibility** - Shows you can build
✅ **Clear Vision** - Path from MVP to platform

## 🔗 Share Your Site

Once live, share your GitHub Pages link:
- In your YC application
- On LinkedIn
- With potential investors
- With pilot customers (like UCSD)

## ❓ Need Help?

Common issues:

**Site not loading?**
- Wait 2-3 minutes after enabling Pages
- Check that `index.html` is in root directory
- Ensure repository is Public

**Images not showing?**
- Check filenames match exactly: `profileK.png` and `profileZ.png`
- Ensure images are in root directory
- Check file size (keep under 1MB each)

**Want to edit?**
- Edit files directly on GitHub (click file → Edit)
- Or download, edit locally, re-upload
- Changes go live in 1-2 minutes

---

Good luck with your YC application! 🚀
