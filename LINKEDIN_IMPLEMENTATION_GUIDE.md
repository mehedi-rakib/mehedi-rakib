# LinkedIn Profile Implementation Guide

## Files Created

1. `src/data/linkedinMeta.ts` - LinkedIn copy and metadata (TypeScript data file)
2. `src/components/LinkedinCTA.astro` - Optional LinkedIn CTA component
3. `LINKEDIN_PROFILE_OPTIMIZATION.md` - Detailed optimization guide
4. This guide

## How to Use

### Step 1: Copy LinkedIn Content

Open `src/data/linkedinMeta.ts` and use the content to update your LinkedIn profile:

- **Headline**: Use `linkedinMeta.headline`
- **About**: Choose between `aboutMain`, `aboutCasual`, or `aboutResults`
- **Services**: Copy from `linkedinMeta.services`
- **Post Ideas**: Reference `linkedinMeta.postIdeas` for content calendar

### Step 2: Update LinkedIn Profile (Manual)

Go to LinkedIn and update:

1. **Profile Photo**: Keep current (looks professional)
2. **Headline**: Replace with the optimized version
3. **Location/Industry**: Update if needed
4. **About Section**: Paste the full about text
5. **Services**: Add all 6 service categories
6. **Featured**: Add links to portfolio projects
7. **Open to Work**: Select "Open to hire" and add the roles

### Step 3: Optional - Add LinkedIn CTA to Website

If you want to drive traffic to LinkedIn from your portfolio:

1. Import the component in `src/pages/index.astro`:
   ```astro
   import LinkedinCTA from '../components/LinkedinCTA.astro';
   ```

2. Add it after the ContactSection (before footer):
   ```astro
   <LinkedinCTA />
   ```

3. Customize styling if needed (modify LinkedinCTA.astro)

### Step 4: Content Calendar

Use the post ideas in `linkedinMeta.ts` to post 1-2x per week:

- Week 1-2: Post about recent project (pick from `postIdeas`)
- Week 3-4: Post about technical lesson or philosophy
- Week 5-6: Post about availability and what you're looking for
- Week 7-8: Post deep dive case study
- Repeat on 4-week cycle

---

## LinkedIn Profile Sections Checklist

After copying content to LinkedIn:

- [ ] Headline updated
- [ ] About section updated (all text)
- [ ] Services expanded to 6 items
- [ ] Featured section updated with 3+ items
- [ ] Open to Work status enabled
- [ ] Location and language settings correct
- [ ] Profile photo and banner optimized
- [ ] Contact info visible
- [ ] Link to portfolio in About or headline
- [ ] HackerRank certifications added

---

## Expected Results

After 1-2 weeks:
- More profile views (better-optimized headline)
- Better quality connection requests

After 4 weeks:
- Higher engagement on posts
- More inbound inquiries for projects
- Better positioning in LinkedIn search

After 8+ weeks:
- Consistent inbound leads
- Portfolio website traffic from LinkedIn
- Established personal brand

---

## TypeScript Usage (Optional)

If you want to use the LinkedIn data in your Astro components:

```astro
---
import { linkedinMeta } from '../data/linkedinMeta';
---

<section>
  <h2>{linkedinMeta.keyStats.yearsExperience} years experience</h2>
  <p>{linkedinMeta.aboutMain}</p>
</section>
```

---

## Maintenance

Update `linkedinMeta.ts` whenever you:
- Complete a new project
- Want to change headline/about
- Add new services
- Get new certifications
- Post new content ideas

This keeps your data centralized and easy to update across platforms.

---

## LinkedIn URL for Sharing

Your LinkedIn profile: https://www.linkedin.com/in/mehedirakib/

Add this to:
- Portfolio website footer
- Email signature
- Resume/CV
- GitHub profile
- Twitter bio

---

## Quick Start Checklist

1. [ ] Read through the main about section in `linkedinMeta.ts`
2. [ ] Copy and paste to LinkedIn About section
3. [ ] Copy headline to LinkedIn headline
4. [ ] Add services from the services array
5. [ ] Add featured content links
6. [ ] Enable Open to Work status
7. [ ] Set reminder to post 1-2x per week
8. [ ] (Optional) Add LinkedinCTA component to website
9. [ ] Share portfolio link in About section

---

## Questions?

Refer to `LINKEDIN_PROFILE_OPTIMIZATION.md` for detailed guidance on each section.
