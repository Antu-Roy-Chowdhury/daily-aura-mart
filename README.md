# Daily AuraMart - Premium Beauty E-commerce Website

A modern, responsive beauty e-commerce website built with Next.js and JavaScript (JSX), featuring WhatsApp integration for seamless order management.

## Features

### Core Functionality
- **Product Gallery** - Dynamic product showcase with Google Sheets integration
- **WhatsApp Ordering** - Direct ordering through WhatsApp with dedicated order page
- **Order Tracking** - Real-time order status tracking system on dedicated page
- **Customer Testimonials** - Dynamic reviews from Google Sheets
- **Floating WhatsApp Button** - Always-accessible chat button

### Design
- Mobile-first responsive design
- Premium UI with soft shadows and smooth animations
- Brand colors: Orange (#ff7b23) and Green (#04b706)
- Custom logo (auram.png) and favicon (favaura.png)
- Optimized typography with Geist Sans font family
- Accessibility-focused with proper ARIA labels

### Pages
1. **Home (/)** - Hero, categories, products, testimonials, trust section
2. **About (/about)** - Company information and mission
3. **Track Your Order (/track-order)** - Dedicated order tracking page
4. **Contact (/contact)** - Contact information and social media
5. **Order (/order)** - Complete order form with WhatsApp integration

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   \`\`\`bash
   # If using the shadcn CLI (recommended)
   npx shadcn@latest init
   \`\`\`

2. **Add your logo and favicon**
   Place these files in the `/public` folder:
   - `auram.png` - Your logo (used in navigation and footer)
   - `favaura.png` - Your favicon

3. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Google Sheets Integration

This project uses **3 separate sheets** within one Google Spreadsheet. Each sheet must be published with its specific `gid` parameter.

### Step 1: Create Your Google Spreadsheet

Create a Google Spreadsheet with **3 sheets**:

#### Sheet 1: Products (gid=0)
Columns:
- `Product_ID` - Unique identifier (e.g., SKN001)
- `Product_Name` - Product name
- `Category` - Category (Skincare, Hair Care, Wellness, Organic)
- `Price` - Price with currency (e.g., 1,450৳)
- `Image_URL` - Full image URL
- `Short_Desc` - Brief description
- `Full_Details` - Complete product description
- `Status` - "Available" or "Out of Stock"

#### Sheet 2: Order_Tracking (gid=1)
Columns:
- `Order_ID` - Order tracking ID (e.g., ORD12345)
- `Customer_Name` - Customer full name
- `Product_Name` - Ordered product
- `Current_Status` - One of: "Order Received", "On Shipping", "Delivered", "Waiting for Review", "Cancelled"

#### Sheet 3: Testimonials (gid=2)
Columns:
- `Customer_Name` - Reviewer name
- `Review_Text` - Review content
- `Rating` - Number 1-5

### Step 2: Publish Your Spreadsheet

1. **Publish to Web**
   - Go to File → Share → Publish to web
   - Select "Entire Document"
   - Choose "Comma-separated values (.csv)"
   - Click "Publish"

2. **Get Your Base URL**
   You'll get a URL like:
   \`\`\`
   https://docs.google.com/spreadsheets/d/e/2PACX-1vQHiN5h-_i-T0ooxcAbUWJ7nT5nMeeSSSWTVKFILAJNeCRxOPIB1o3qzWvRbTByeY13emId7EXnjbbC/pub?output=csv
   \`\`\`

### Step 3: Update the Code

The project is already configured to access each sheet with the correct `gid` parameter:

1. **Products** - Edit `components/product-gallery.jsx`:
   \`\`\`javascript
   const PRODUCTS_CSV_URL = "YOUR_BASE_URL/pub?gid=0&single=true&output=csv"
   \`\`\`

2. **Order Tracking** - Edit `components/order-tracking.jsx`:
   \`\`\`javascript
   const ORDER_TRACKING_CSV_URL = "YOUR_BASE_URL/pub?gid=1&single=true&output=csv"
   \`\`\`

3. **Testimonials** - Edit `components/testimonials.jsx`:
   \`\`\`javascript
   const TESTIMONIALS_CSV_URL = "YOUR_BASE_URL/pub?gid=2&single=true&output=csv"
   \`\`\`

**Note:** Replace `YOUR_BASE_URL` with your actual spreadsheet base URL (everything before `/pub?output=csv`)

## WhatsApp Configuration

Update the WhatsApp number in the following files:
- `components/navigation.jsx`
- `components/floating-whatsapp.jsx`
- `components/order-form.jsx`
- `components/contact-section.jsx`
- `components/footer.jsx`

Replace `8801234567890` with your actual WhatsApp number (with country code, no + or spaces).

## Customization

### Brand Colors
Edit `app/globals.css` to change the color scheme - update the design tokens in the `@theme inline` section.

### Typography
Fonts are configured in `app/layout.jsx` using Next.js font optimization.

### Content
- **Hero Section**: Edit `components/hero-section.jsx`
- **Categories**: Edit `components/category-highlights.jsx`
- **About**: Edit `components/about-section.jsx`
- **Contact**: Edit `components/contact-section.jsx`
- **Footer**: Edit `components/footer.jsx`

## Project Structure

\`\`\`
daily-auramart/
├── app/
│   ├── layout.jsx              # Root layout with logo/favicon
│   ├── page.jsx                # Homepage
│   ├── about/
│   │   └── page.jsx           # About page
│   ├── contact/
│   │   └── page.jsx           # Contact page
│   ├── track-order/
│   │   └── page.jsx           # Order tracking page
│   ├── order/
│   │   └── page.jsx           # Order form page
│   └── globals.css            # Global styles
├── components/
│   ├── navigation.jsx         # Header with logo
│   ├── floating-whatsapp.jsx  # Sticky WhatsApp button
│   ├── hero-section.jsx
│   ├── category-highlights.jsx
│   ├── product-gallery.jsx    # Google Sheets products
│   ├── product-card.jsx
│   ├── order-form.jsx         # WhatsApp order form
│   ├── order-tracking.jsx     # Google Sheets tracking
│   ├── testimonials.jsx       # Google Sheets reviews
│   ├── trust-section.jsx
│   ├── about-section.jsx
│   ├── contact-section.jsx
│   └── footer.jsx
├── public/
│   ├── auram.png             # Your logo
│   └── favaura.png           # Your favicon
└── README.md
\`\`\`

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript (JSX) - No TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Data Source**: Google Sheets CSV
- **Ordering**: WhatsApp Integration
- **Analytics**: Vercel Analytics

## Key Features Explained

### Floating WhatsApp Button
- Sticky button in bottom-right corner
- Animated with pulse effect
- Tooltip on hover
- Direct link to WhatsApp chat

### Order Flow
1. User clicks "Order Now" on product
2. Redirects to `/order` page with product details
3. User fills delivery and payment info
4. Submits to WhatsApp with pre-filled message

### Order Tracking
- Dedicated `/track-order` page
- Live data from Google Sheets
- Visual progress indicator
- Multiple status support

## Deployment

### Deploy to Vercel (Recommended)

Click the **"Publish"** button in v0 to deploy directly to Vercel.

Or use the Vercel CLI:
\`\`\`bash
npm i -g vercel
vercel
\`\`\`

### Environment Variables

No environment variables required. All configuration is done through:
- Google Sheets CSV URLs (in component files)
- WhatsApp number (in component files)
- Logo/favicon files (in /public folder)

## Testing Checklist

- [ ] Logo and favicon display correctly
- [ ] All navigation links work
- [ ] Products load from Google Sheets
- [ ] "Order Now" redirects to /order page
- [ ] Order form submits to WhatsApp
- [ ] Order tracking searches work
- [ ] Testimonials load from Google Sheets
- [ ] Floating WhatsApp button appears
- [ ] Mobile responsive design works
- [ ] All pages accessible

## Support

For questions or customization:
- WhatsApp: Update with your number
- Email: info@dailyauramart.com

## License

Proprietary and confidential.

---

**Daily AuraMart** - Pure Beauty. Honest Wellness.
