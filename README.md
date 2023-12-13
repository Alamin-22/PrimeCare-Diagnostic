# PrimeCare Diagnostic Center - Client Presentation

## Overview

Welcome to PrimeCare Diagnostic Center, a cutting-edge platform designed to streamline the management of diagnostic center operations. Our comprehensive system offers a range of features to enhance user experience, ensure data security, and facilitate efficient healthcare management.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Authentication
- **Payment Gateway**: Stripe
- **Server Hosting**: firebase
- **File Upload**: ImageBB API

## Key Features

### User Authentication and Profile Management

- **Secure Login**: Implemented Firebase Authentication for secure email/password login.
- **User Registration**: Capture essential user details including avatar, blood group, district, and upazila.
- **Status Management**: Users have default "active" status, with the ability for admins to block and manage user roles.

### User Dashboard (Private🔒)

- **Upcoming Appointments**: View, cancel, and manage upcoming appointments with key details.
- **Test Results**: Access and download test results for records.
- **My Profile**: Edit and update user profile details.

### Homepage

- **Dynamic Banners**: Admin can upload banners with dynamic content (title, image, text, coupon code, discount rate).
- **Role-based Navigation**: Navbar adapts based on user roles (admin/user).
- **Featured Tests and Promotions**: Display booked tests, promotions, and personalized recommendations.
- **Footer Information**: Relevant information in the footer for easy access.

### All Tests Page

- **Detailed Test Information**: Display all available tests with images, dates, and slots.
- **Date Filtering**: Users can filter tests by date.
- **Details Page Navigation**: Detailed button for each test leading to the respective details page.

### Details Page

- **Test Details**: View comprehensive details of a selected test.
- **Booking Feature**: Book a test if available slots are greater than 0.
- **Payment Integration**: Secure payment process using Stripe with the option to apply promo codes.

### Admin Dashboard

- **User Management**: View all users, change user status, and assign admin roles.
- **Add a Test**: Admins can add new tests with details, and receive confirmations.
- **Manage Tests**: View, update, and delete test/service data.
- **Reservation Handling**: Admins can view reservations, search by user email, cancel reservations, and submit test results.
- **Banner Management**: Upload and manage banners with activation status.

## Bonus Features

- **Enhanced Security**: Implemented JWT for added security.
- **Pagination**: Enhanced user experience with pagination on the "All Tests" page.
- **Additional Pages**: Designed three extra pages with relevant content.

## Conclusion

PrimeCare Diagnostic Center is a feature-rich, secure, and user-friendly platform that aims to revolutionize the diagnostic center experience. We are committed to providing a seamless and efficient healthcare management system tailored to meet the diverse needs of our users.

Thank you for considering PrimeCare Diagnostic Center. We look forward to partnering with you in enhancing healthcare services for a better future.

