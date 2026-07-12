# MediQueue — Tutor Booking Platform

**Live Site:** https://mediqueue-client-sable.vercel.app

**Server Repository:** https://github.com/UmaDhar97/MediQueue-Server-

MediQueue is a tutor booking web application where students can register, log in, browse available tutors, and book online learning sessions based on subject and time availability. The platform simplifies the tutor booking process by eliminating manual scheduling, preventing time-slot conflicts, and giving students a smooth, organized learning experience.

## ✨ Key Features

- 🔐 **Secure Authentication** — Email/password and Google social login, both protected with JWT tokens on every private route.
- 🔍 **Smart Search & Filter** — Search tutors by name (case-insensitive) and filter by session start/end date range.
- 📅 **Real-Time Slot Management** — Every booking automatically decreases a tutor's available slots, and blocks bookings once a tutor is fully booked or before their session start date.
- 🧑‍🏫 **Full Tutor Management** — Logged-in users can add, update, and delete their own tutor listings, with instant UI updates and confirmation modals.
- 📖 **Personal Booking Dashboard** — Students can view and cancel their own booked sessions from a dedicated "My Booked Sessions" page.
- 📱 **Fully Responsive** — Optimized layout for mobile, tablet, and desktop devices.
- 🔔 **Toast Notifications** — Every CRUD action (add, update, delete, cancel, login, register) shows a clear toast notification instead of default browser alerts.

## 🛠️ Tech Stack

- **Frontend:** React, React Router, Tailwind CSS
- **Authentication:** Firebase Authentication (Email/Password + Google)
- **API Requests:** Axios
- **Animations:** Framer Motion
- **Notifications:** React Hot Toast, SweetAlert2
- **Carousel:** Swiper
- **Dynamic Page Titles:** React Helmet Async
