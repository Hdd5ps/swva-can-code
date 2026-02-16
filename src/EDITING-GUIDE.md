# Website Editing Guide for Non-Technical Staff

This guide helps you find and edit common elements on the SWVA Can Code website.

## 🎨 Brand Colors Reference

When you see these color codes in the files, here's what they mean:
- `#00BCD4` = Cyan (bright blue)
- `#E53935` = Red
- `#1A237E` = Navy Blue (dark blue)
- `#F5F3EE` = Cream (off-white background)

## 📁 Where to Find Things

### Page Content (Most Text and Lists)
**Folder:** `/src/data/`

Most page copy, lists, and cards are now stored in data files so you can edit content without touching React code.

**Common files:**
- Home page: `/src/data/homeContent.ts`
- About page: `/src/data/aboutContent.ts`
- Contact page: `/src/data/contactContent.ts`
- Curriculum page: `/src/data/curriculumContent.ts`
- Find a Camp page: `/src/data/findCampContent.ts`
- Showcase page: `/src/data/showcaseContent.ts`
- Sponsor page: `/src/data/sponsorContent.ts`
- SWVA Can Create page: `/src/data/swvaCanCreateContent.ts`

### Navigation Menu (Top of Every Page)
**File:** `/components/Navbar.tsx`

**What you can edit:**
- Menu item names and links (look for the `navItems` array)
- Logo text ("Southwest Virginia" and "Can Code")
- Add or remove menu items

### Footer (Bottom of Every Page)
**File:** `/components/Footer.tsx`

**What you can edit:**
- Email address, phone number, location
- Quick links in footer
- Mission statement
- Copyright text

### Home Page
**File:** `/src/data/homeContent.ts`

**What you can edit:**
- Main headline and subheadline
- Statistics (500+ Students, 25+ Camps, etc.)
- The 4 "What We Offer" cards
- Upcoming camp listings (dates, locations, ages)
- Call-to-action buttons

**To add a new upcoming camp:**
1. Find the `upcomingCamps` list in `/src/data/homeContent.ts`
2. Copy one camp object (the part between `{` and `}`)
3. Paste it after the last camp, adding a comma
4. Edit the title, date, location, ages, and color

### Contact Page
**File:** `/src/data/contactContent.ts`

**What you can edit:**
- Contact information (email, phone, location, hours)
- Form field labels and placeholders
- FAQ questions and answers

**To add a new FAQ:**
1. Find the `faq.items` list in `/src/data/contactContent.ts`
2. Copy one FAQ object (the part between `{` and `}`)
3. Paste it after the last FAQ, adding a comma
4. Edit the question and answer text

## 🔧 Common Editing Tasks

### Changing Text
Most text now lives in `/src/data/*.ts` files. Find the text in the data file and replace it.

### Changing Links
Find the `to="/page-name"` or `href="/page-name"` and change the page name. For example:
```
<Link to="/old-page">Click Here</Link>
```
Change to:
```
<Link to="/new-page">Click Here</Link>
```

### Changing Colors
Find color codes like `#00BCD4` and replace them with another brand color. Use the reference at the top of this guide.

### Adding Items to Lists
Most lists are in arrays with this format:
```javascript
[
  { title: 'Item 1', description: 'Text...' },
  { title: 'Item 2', description: 'Text...' },
]
```
To add an item:
1. Copy one complete item (including the `{ }` and comma)
2. Paste it inside the array
3. Edit the values

## ⚠️ Important: What NOT to Edit

**Don't touch these parts:**
- Lines starting with `import` at the top of files
- Lines starting with `const`, `function`, or `export`
- Anything inside `{...}` after `className=`
- The word `useState` or code that looks like `useState(...)`
- Lines with `//` followed by "Don't edit" warnings

**If you accidentally break something:**
1. Press Ctrl+Z (Windows) or Cmd+Z (Mac) to undo
2. Or, contact your developer to restore the file

## 📝 Best Practices

1. **Make small changes at a time** - Test after each change
2. **Keep backups** - Save a copy before making major edits
3. **Match the pattern** - When adding items, copy the existing format exactly
4. **Test on mobile** - Check how your changes look on phones/tablets
5. **Ask for help** - If something looks wrong, don't guess—ask your developer

## 🆘 Need More Help?

Look for comments in the code files that look like this:
```
/* ============================================
   SECTION NAME - What this does
   ============================================ */
```
These explain what each section does and often include editing instructions.
