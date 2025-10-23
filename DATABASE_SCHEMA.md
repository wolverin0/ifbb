# IFBB Argentina - Database Schema

This document outlines the proposed database schema for the IFBB Argentina platform. The design is intended to be flexible and scalable to support all the features described in the project plan.

## Table of Contents

- [Users](#users)
- [Athletes](#athletes)
- [Events](#events)
- [Categories](#categories)
- [EventCategories (Pivot Table)](#eventcategories-pivot-table)
- [Registrations](#registrations)
- [Payments](#payments)
- [Results](#results)
- [Articles](#articles)
- [Media](#media)
- [AthleteMedia (Pivot Table)](#athletemedia-pivot-table)
- [Sponsors](#sponsors)
- [Judges](#judges)
- [EventJudges (Pivot Table)](#eventjudges-pivot-table)

---

### Users

Stores account information for all user types (Athletes, Admins, Judges).

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | `UUID` | Primary Key | Unique identifier for the user. |
| `email` | `VARCHAR(255)` | Unique, Not Null | User's email address. |
| `password_hash` | `VARCHAR(255)` | Not Null | Hashed password. |
| `role` | `ENUM` | Not Null, Default: 'athlete' | User role (`athlete`, `admin`, `judge`). |
| `created_at` | `TIMESTAMP` | Not Null, Default: `NOW()` | Timestamp of account creation. |
| `updated_at` | `TIMESTAMP` | Not Null, Default: `NOW()` | Timestamp of last update. |

### Athletes

Stores profile information for competitors. Linked to a user account.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | `UUID` | Primary Key | Unique identifier for the athlete profile. |
| `user_id` | `UUID` | Foreign Key (users.id) | Links to the user account. |
| `first_name` | `VARCHAR(100)` | Not Null | Athlete's first name. |
| `last_name` | `VARCHAR(100)` | Not Null | Athlete's last name. |
| `date_of_birth` | `DATE` | Not Null | Athlete's date of birth. |
| `height_cm` | `DECIMAL(5,2)` | | Athlete's height in centimeters. |
| `weight_kg` | `DECIMAL(5,2)` | | Athlete's current weight in kilograms. |
| `team_name` | `VARCHAR(100)` | | Name of the athlete's team or gym. |
| `bio` | `TEXT` | | Short biography. |
| `profile_image_url` | `VARCHAR(255)` | | URL to the athlete's profile picture. |
| `created_at` | `TIMESTAMP` | Not Null, Default: `NOW()` | | 
| `updated_at` | `TIMESTAMP` | Not Null, Default: `NOW()` | | 

### Events

Stores information about each competition.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | `UUID` | Primary Key | Unique identifier for the event. |
| `name` | `VARCHAR(255)` | Not Null | Official name of the event. |
| `date` | `DATE` | Not Null | Date of the event. |
| `location_name` | `VARCHAR(255)` | | Name of the venue. |
| `city` | `VARCHAR(100)` | | City where the event is held. |
| `address` | `VARCHAR(255)` | | Full address of the venue. |
| `status` | `ENUM` | Not Null, Default: 'upcoming' | Event status (`upcoming`, `registration_open`, `live`, `finished`, `cancelled`). |
| `registration_deadline` | `TIMESTAMP` | | Deadline for registration. |
| `poster_image_url` | `VARCHAR(255)` | | URL to the event poster. |
| `created_at` | `TIMESTAMP` | Not Null, Default: `NOW()` | | 
| `updated_at` | `TIMESTAMP` | Not Null, Default: `NOW()` | | 

### Categories

Stores all possible competition categories (e.g., Men's Physique, Bikini Fitness).

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | `UUID` | Primary Key | Unique identifier for the category. |
| `name` | `VARCHAR(100)` | Not Null, Unique | Name of the category (e.g., "Men's Physique - Class A"). |
| `description` | `TEXT` | | Rules or description for the category. |
| `division` | `VARCHAR(50)` | | e.g., 'Men's Physique', 'Bikini' |
| `class` | `VARCHAR(50)` | | e.g., 'Class A', 'Novice', 'Open' |

### EventCategories (Pivot Table)

Links which categories are available at which events.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `event_id` | `UUID` | Foreign Key (events.id) | |
| `category_id` | `UUID` | Foreign Key (categories.id) | |
| Primary Key | `(event_id, category_id)` | | |

### Registrations

Links an athlete to a specific category within an event.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | `UUID` | Primary Key | Unique identifier for the registration. |
| `athlete_id` | `UUID` | Foreign Key (athletes.id) | The registered athlete. |
| `event_id` | `UUID` | Foreign Key (events.id) | The event they are registering for. |
| `category_id` | `UUID` | Foreign Key (categories.id) | The category they are competing in. |
| `competitor_number` | `INT` | | The number assigned to the athlete for the event. |
| `music_file_url` | `VARCHAR(255)` | | URL to the uploaded posing music. |
| `payment_id` | `UUID` | Foreign Key (payments.id) | Links to the payment record. |
| `status` | `ENUM` | Not Null, Default: 'pending' | Registration status (`pending`, `confirmed`, `cancelled`). |
| `created_at` | `TIMESTAMP` | Not Null, Default: `NOW()` | | 

### Payments

Stores information about each financial transaction.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | `UUID` | Primary Key | Unique identifier for the payment. |
| `user_id` | `UUID` | Foreign Key (users.id) | The user who made the payment. |
| `amount` | `DECIMAL(10,2)` | Not Null | The total amount paid. |
| `currency` | `VARCHAR(3)` | Not Null, Default: 'ARS' | Currency of the payment. |
| `provider` | `VARCHAR(50)` | | Payment provider (e.g., 'MercadoPago', 'Stripe'). |
| `provider_payment_id` | `VARCHAR(255)` | | The ID from the payment provider. |
| `status` | `ENUM` | Not Null, Default: 'pending' | Payment status (`pending`, `succeeded`, `failed`). |
| `created_at` | `TIMESTAMP` | Not Null, Default: `NOW()` | | 

### Results

Stores the final placings for each athlete in each category at an event.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | `UUID` | Primary Key | | 
| `registration_id` | `UUID` | Foreign Key (registrations.id), Unique | The registration this result is for. |
| `place` | `INT` | Not Null | The final placing (1, 2, 3, etc.). |
| `score` | `DECIMAL(5,2)` | | The total score from judges. |
| `created_at` | `TIMESTAMP` | Not Null, Default: `NOW()` | | 

### Articles

Stores news, announcements, and other content.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | `UUID` | Primary Key | | 
| `title` | `VARCHAR(255)` | Not Null | The article title. |
| `slug` | `VARCHAR(255)` | Not Null, Unique | URL-friendly slug. |
| `content` | `TEXT` | | The main body of the article. |
| `author_id` | `UUID` | Foreign Key (users.id) | The admin who wrote the article. |
| `status` | `ENUM` | Not Null, Default: 'draft' | `draft`, `published`. |
| `published_at` | `TIMESTAMP` | | | 
| `created_at` | `TIMESTAMP` | Not Null, Default: `NOW()` | | 

### Media

Stores information about photos and videos.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | `UUID` | Primary Key | | 
| `event_id` | `UUID` | Foreign Key (events.id) | The event where the media was captured. |
| `url` | `VARCHAR(255)` | Not Null | URL to the media file (e.g., on S3). |
| `thumbnail_url` | `VARCHAR(255)` | | URL to a smaller thumbnail version. |
| `type` | `ENUM` | Not Null | `photo`, `video`. |
| `price` | `DECIMAL(10,2)` | Default: 0 | Price to purchase the media. 0 for free. |
| `created_at` | `TIMESTAMP` | Not Null, Default: `NOW()` | | 

### AthleteMedia (Pivot Table)

Tags athletes in media files.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `media_id` | `UUID` | Foreign Key (media.id) | |
| `athlete_id` | `UUID` | Foreign Key (athletes.id) | |
| Primary Key | `(media_id, athlete_id)` | | |

### Sponsors

Stores information about sponsors.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | `UUID` | Primary Key | | 
| `name` | `VARCHAR(100)` | Not Null, Unique | Sponsor's brand name. |
| `logo_url` | `VARCHAR(255)` | Not Null | URL to the sponsor's logo. |
| `website_url` | `VARCHAR(255)` | | URL to the sponsor's website. |
| `tier` | `ENUM` | | Sponsorship tier (`gold`, `silver`, `bronze`). |
| `created_at` | `TIMESTAMP` | Not Null, Default: `NOW()` | | 

### Judges

Stores profile information for judges.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | `UUID` | Primary Key | | 
| `user_id` | `UUID` | Foreign Key (users.id) | Links to the user account. |
| `first_name` | `VARCHAR(100)` | Not Null | | 
| `last_name` | `VARCHAR(100)` | Not Null | | 
| `level` | `VARCHAR(50)` | | e.g., 'National', 'International' |

### EventJudges (Pivot Table)

Assigns judges to specific events.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `event_id` | `UUID` | Foreign Key (events.id) | |
| `judge_id` | `UUID` | Foreign Key (judges.id) | |
| Primary Key | `(event_id, judge_id)` | | |
