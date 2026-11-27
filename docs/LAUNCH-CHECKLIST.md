# Solan Bamboo Furniture — launch checklist

## Brand and catalogue
- [ ] Confirm official business name, logo, brand colours and approved fonts.
- [ ] Replace demo product cards with the real catalogue, prices/quote policy, dimensions, material details and availability.
- [ ] Upload approved product photos/videos to Firebase Storage and add descriptive alt text.
- [ ] Confirm business phone, email, address/service area and social links.

## Firebase and security
- [ ] Create Firebase project; enable Email/Password Authentication, Firestore and Storage.
- [ ] Configure environment variables in local and Vercel environments.
- [ ] Create 2–3 admin accounts and grant custom admin claims server-side.
- [ ] Review and publish Firestore/Storage rules against the final schema.
- [ ] Add App Check, abuse protection, logging and monitoring.
- [ ] Configure scheduled Firestore exports to a secured bucket and test a restore.

## Features still requiring implementation
- [ ] Product catalogue management (create/edit/publish/archive, image upload).
- [ ] Customer account flows and password reset.
- [ ] Shopping cart and checkout only after payment/shipping/tax requirements are confirmed.
- [ ] Secure enquiry API / Cloud Function, validation, spam controls and notification emails.
- [ ] Full English/Hindi admin translation and role/permission UI.

## SEO, analytics and compliance
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the final canonical HTTPS domain.
- [ ] Add Google Search Console verification and submit `/sitemap.xml`.
- [ ] Add `NEXT_PUBLIC_GA_ID` and validate GA4 events in the live property.
- [ ] Add privacy policy, terms, contact details and cookie/analytics notice as applicable.
- [ ] Validate metadata, Open Graph previews, mobile usability, performance and accessibility.

## Safe launch
- [ ] Identify where the current website is hosted; GitHub may only contain source code.
- [ ] Deploy this new project to a Vercel preview URL first.
- [ ] Test all flows and obtain business approval.
- [ ] Keep the old site live until the new site is accepted.
- [ ] Plan DNS/domain cutover and rollback window; do not switch before approval.
