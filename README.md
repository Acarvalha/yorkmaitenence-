# York Maintenance Request System

Course: ITEC 3230 – Designing User Interface

Instructor: Shadikur Rahman

Project: Group Project – Maintenance Request System

Date: April 2026


#### Project Overview

The York Maintenance Request System is a web-based platform that allows students to report any issues they may encounter across campus and track their status. The system provides role-based interfaces for users, staff and administrators.

#### Github Repository Structure

york-maintenance-system/

├── login.html

├── register.html

├── submit-request.html

├── ongoing.html

├── completed.html

├── account-info.html

├── staff-dashboard.html

├── admin-dashboard.html

├── assign-requests.html

├── set-priorities.html

├── manage-users.html

├── style.css

└── README.md

### Implementation Approach

#### 1. Front-End Framework
   
The system is built using HTML5, CSS3, and Bootstrap 5. No backend or database is used – all data is simulated using client-side JavaScript and localStorage for demonstration purposes.

#### 3. Design Consistency
   
The interface follows a consistent design language:

Primary color: Red (#d90404) for headers and buttons

Typography: Clean sans-serif fonts (Arial, system fonts)

Layout: Responsive grid system (Bootstrap) adapting to desktop, tablet, and mobile

Components: Cards, forms, tables, dropdowns, and modals

#### 3. Role-Based Access
   
Three user roles are implemented with distinct interfaces:

| Role | Pages Accessible | Key Features |
|:---|:---|:---|
| **User** | ongoing.html, completed.html, submit-request.html, account-info.html | Submit requests, view status (Ongoing/Completed tabs) |
| **Staff** | staff-dashboard.html, account-info.html | View assigned requests, update status, add resolution notes |
| **Admin** | admin-dashboard.html, assign-requests.html, set-priorities.html, manage-users.html, account-info.html | Assign requests, set priorities, manage users, system overview |

#### 4. Demo Credentials

| Role | Email | Password | Redirect After Login |
|:---|:---|:---|:---|
| **User** | demo@yorku.ca | password@york | ongoing.html |
| **Staff** | demo@yorku.ca | password@york | staff-dashboard.html |
| **Admin** | demo@yorku.ca | password@york | admin-dashboard.html |

### 5. Key Features Implemented

| Feature | Implementation |
|:---|:---|
| Login with role selection | HTML form + JavaScript validation |
| Submit maintenance request | Form with category, campus, building, room, description |
| View ongoing requests | Cards showing Submitted/In Progress status |
| View completed requests | Cards showing Completed status |
| Staff update status | Form + resolution notes textarea |
| Admin assign requests | Dropdown selection for request ID and staff member |
| Admin set priorities | Dropdown with Low/Medium/High/Urgent options |
| Admin manage users | Table displaying users, roles, status |
| Account settings | Editable profile with notification preferences |
| Persistent data | localStorage stores user name, email, role |

### Figma Prototype Link

The medium-fidelity prototype was designed in Figma and used as a reference for implementation:

Figma URL:  https://www.figma.com/design/WQCDbqZotJvvBe79ocpci2/Untitled?node-id=0-1&p=f

### How to Run the Project

1. Clone the repository or download the ZIP file

2. Open login.html in any modern web browser (Chrome, Firefox, Safari, Edge)

3. Use the demo credentials above to log in

4. Select a role (User, Staff, or Admin) from the dropdown

5. Navigate using the navbar or dashboard links

### Responsive Design Notes

The system uses Bootstrap's responsive grid system:

Desktop: Full layout with sidebars and multiple columns

Tablet: Collapsible navbar, adjusted spacing

Mobile: Stacked layout, full-width forms, hamburger menu

#### Contributors

Hibaq Ahmed

Bavreet Gill

Anthony Carvalha

Eyinimofe Martins-Donus











