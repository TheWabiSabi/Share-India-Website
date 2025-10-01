# Chatbot Troubleshooting Guide

## ✅ Issue Resolved: JSON Parsing Error

The JSON parsing error has been fixed by recreating the `components/chatbot/responses.json` file cleanly.

## 🔧 How to Verify Chatbot is Working

1. **Check if chatbot button is visible**:
   - Look for a floating blue button in the bottom-right corner of any page
   - The button should have a chat icon

2. **Test chatbot functionality**:
   - Click the chatbot button
   - You should see a welcome message: "Hello! I'm here to help you navigate Share India Insurance Brokers. What are you looking for today?"
   - Try clicking the navigation buttons to test the flow

3. **Verify navigation paths**:
   - **📰 Browsing News** → Links to news sections
   - **📊 Browsing Insights/Info** → Links to insights and blogs
   - **🛡️ Looking for Insurance** → Shows insurance type menu
   - **👨‍💼 Looking for an Insurance Agent** → Shows contact options
   - **ℹ️ About Our Company** → Links to about page sections

## 🚀 Chatbot Features

### Main Navigation Flow

```
Welcome Menu
├── 📰 Browsing News
├── 📊 Browsing Insights/Info
├── 🛡️ Looking for Insurance
│   ├── 🏭 Industry Insurance
│   ├── 👨‍👩‍👧‍👦 Retail Insurance
│   └── 🏢 Corporate Insurance
├── 👨‍💼 Looking for an Insurance Agent
│   ├── 📞 Call Us: 1800 210 2022
│   ├── ✉️ Email Us
│   ├── 📍 Visit Our Office
│   └── 📅 Schedule Consultation
└── ℹ️ About Our Company
    ├── 📖 Our Story
    ├── 👨‍💼 Leadership Team
    ├── 👥 Our Team
    ├── 🏆 Awards & Recognition
    └── 💬 Customer Testimonials
```

### Insurance Categories

- **Industry Insurance**: Infrastructure, Life Sciences, Real Estate, Chemical, etc.
- **Retail Insurance**: Life, Health, Motor, Home insurance
- **Corporate Insurance**: Property, Liability, Marine, Motor Fleet, Employee Benefits

### Contact Options

- **Phone**: 1800 210 2022 (24/7 support)
- **Email**: contact.ins@shareindia.co.in
- **Office Visit**: Links to contact page
- **Consultation**: Free consultation scheduling

## 🛠️ Technical Details

### Files Involved

- `components/chatbot/chatbot-widget.tsx` - Main chatbot component
- `components/chatbot/responses.json` - Navigation responses and flows
- `components/chatbot/chatbot-types.ts` - TypeScript type definitions
- `app/layout.tsx` - Chatbot integration in main layout

### Key Features

- ✅ **Responsive Design**: Works on mobile and desktop
- ✅ **Professional UI**: Share India branding and colors
- ✅ **Emoji Icons**: Visual indicators for better UX
- ✅ **Direct Navigation**: Links to specific page sections
- ✅ **Contact Integration**: Phone and email options
- ✅ **Quote Requests**: Streamlined quote process
- ✅ **Fallback Handling**: Error recovery and main menu return

## 🔍 If Issues Persist

1. **Clear browser cache** and refresh the page
2. **Check browser console** for any JavaScript errors
3. **Verify all files are present**:
   - `components/chatbot/chatbot-widget.tsx`
   - `components/chatbot/responses.json`
   - `components/chatbot/chatbot-types.ts`
4. **Restart development server** if needed

## 📱 Expected Behavior

The chatbot should:

- ✅ Appear as a floating button in bottom-right corner
- ✅ Open with a professional welcome message
- ✅ Provide clear navigation options with emojis
- ✅ Allow users to navigate through insurance options
- ✅ Provide contact information and quote options
- ✅ Link directly to relevant website sections
- ✅ Handle back navigation properly
- ✅ Show loading states and smooth animations

The chatbot is designed to be a **helpful navigation assistant** that guides users to the right information quickly and efficiently.
