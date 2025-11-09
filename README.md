# Secret Santa Web App

A simple, privacy-focused Secret Santa app with minimal requirements: no cookies, no long-term storage, and no registration required.

## Features

- **Create Groups**: Set up a Secret Santa group with participant names, occasion, custom message, and budget
- **Unique Links**: Generate unique URLs for participants to join (active for configurable number of days)
- **Anonymous Assignment**: Participants select their identity and get randomly assigned someone to buy for
- **Gift Preferences**: Participants can share gift preferences with their Secret Santa
- **Admin Controls**: Group creator can view status and reroll assignments
- **Temporary Storage**: All data expires automatically after the configured period
- **No Registration**: No accounts, no cookies, no tracking

## Tech Stack

- **Frontend**: Static HTML, CSS, JavaScript (hosted on GitHub Pages)
- **Backend**: Supabase (PostgreSQL database with free tier)
- **No Server**: Completely serverless architecture

## Setup Instructions

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up for a free account
2. Click "New Project"
3. Fill in your project details:
   - Project name: `secret-santa` (or any name you prefer)
   - Database password: Create a strong password
   - Region: Choose the closest to your users
4. Wait for the project to be created (takes ~2 minutes)

### 2. Set Up the Database

1. In your Supabase project, go to the **SQL Editor** (in the left sidebar)
2. Click "New Query"
3. Copy the contents of `database_schema.sql` from this repository
4. Paste it into the SQL editor
5. Click "Run" to execute the SQL and create the tables

### 3. Get Your Supabase Credentials

1. In your Supabase project, go to **Settings** > **API**
2. You'll need two values:
   - **Project URL**: Copy this (looks like `https://xxxxx.supabase.co`)
   - **Project API keys** > **anon/public**: Copy this key

### 4. Configure the App

1. Open `js/config.js` in this repository
2. Replace the placeholder values:

```javascript
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key-here';
```

### 5. Deploy to GitHub Pages

#### Option A: GitHub Pages (Recommended)

1. Create a new repository on GitHub
2. Push this code to your repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. Go to your repository settings on GitHub
4. Navigate to **Pages** (in the left sidebar)
5. Under "Source", select "main" branch
6. Click "Save"
7. Your site will be published at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

#### Option B: Other Free Hosting

You can also deploy to:
- [Netlify](https://netlify.com) - Drag and drop deployment
- [Vercel](https://vercel.com) - Connect to GitHub
- [Cloudflare Pages](https://pages.cloudflare.com) - Connect to GitHub

### 6. Test Your Setup

1. Visit your deployed site
2. Create a test group with 3-4 participants
3. Open the participant link in a different browser/incognito window
4. Join as a participant and verify you get assigned someone
5. Test the admin panel to view status

## Usage Guide

### For Group Organizers

1. Visit the app homepage
2. Fill in:
   - Occasion name (e.g., "Christmas 2025")
   - Custom message (optional)
   - Budget limit (optional)
   - How many days the group should be active
   - Participant names (minimum 3)
3. Click "Create Secret Santa Group"
4. **Save both links**:
   - **Participant link**: Share this with everyone
   - **Admin link**: Keep this private for managing the group
5. Share the participant link with your group

### For Participants

1. Click the link shared by the organizer
2. Select your name from the dropdown
3. Click "Join Group"
4. You'll see who you're Secret Santa for
5. (Optional) Add your gift preferences so your Secret Santa knows what you'd like

### For Admins

1. Use your admin link to access the admin panel
2. View participant join status
3. See who has added gift preferences
4. Reroll assignments if needed (useful if someone drops out or you need to reassign)

## How It Works

### Assignment Algorithm

The app uses a derangement algorithm to ensure:
- Nobody is assigned to themselves
- Everyone gets exactly one person to buy for
- Everyone has exactly one Secret Santa
- Forms a complete cycle

When a new participant joins, all assignments are recalculated to include them fairly.

### Privacy & Security

- No authentication required
- Participant identity is tracked via a UUID stored in browser localStorage
- No personal data is collected
- Groups automatically expire after the configured period
- Row Level Security (RLS) policies protect data access
- Admin code is required to access admin features

### Data Storage

All data is stored temporarily in Supabase and includes:
- Group information (occasion, message, budget, participant names)
- Participant assignments (who is Secret Santa for whom)
- Gift preferences

Data is automatically cleaned up after the group expires.

## Project Structure

```
secret-santa/
├── index.html              # Group creation page
├── group.html              # Participant join/dashboard page
├── admin.html              # Admin panel
├── css/
│   └── style.css          # All styles
├── js/
│   ├── config.js          # Supabase configuration
│   └── app.js             # Application logic
├── database_schema.sql     # Supabase database schema
└── README.md              # This file
```

## Troubleshooting

### "Error creating group" or database errors

- Make sure you ran the SQL schema in Supabase
- Verify your Supabase URL and anon key are correct in `config.js`
- Check the browser console for detailed error messages
- Ensure RLS policies are enabled (they're created by the schema script)

### Assignments not working

- Minimum 2 participants required for assignments
- The first participant won't see an assignment until a second person joins
- Try the reroll feature in the admin panel

### Group not found

- Groups expire after the configured number of days
- Check if the URL is correct
- Verify the group hasn't been deleted from Supabase

### Can't access admin panel

- Make sure you're using the admin link (includes `?admin=` parameter)
- The admin code must match the one in the database

## Free Tier Limits

### Supabase Free Tier

- 500 MB database storage
- 50,000 monthly active users
- 2 GB bandwidth
- Unlimited API requests

This is more than enough for typical Secret Santa groups!

### GitHub Pages

- 1 GB storage
- 100 GB bandwidth per month
- Completely free for public repositories

## Security Notes

1. The admin link contains the admin code - keep it private
2. Participant links are public but only allow joining as available names
3. Consider using HTTPS (GitHub Pages provides this automatically)
4. No sensitive data should be stored in gift preferences

## Contributing

Feel free to fork this project and customize it for your needs!

## License

MIT License - feel free to use this for any purpose.

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Look for errors in the browser console (F12)
3. Verify your Supabase configuration
4. Check the Supabase logs in your project dashboard

## Future Enhancements

Possible features to add:
- Email notifications when assignments are made
- Mobile app version
- Multiple group templates
- Export group data
- Wishlist links integration
- Budget tracking

Enjoy your Secret Santa! 🎁
