# Lab 02 Opportunity Scanning

## Ideas Reviewed from Lab 1
| Idea | Problem Area | Target User | Current Alternative | Initial Technology Direction |
| :--- | :--- | :--- | :--- | :--- |
| Idea 1: FoodFast | Long food stall queues during brief lecture intervals cause skipped meals. | Campus students and stall vendors | Physical queues, chaotic manual paper ticketing | Mobile web app layout + lightweight cloud database |
| Idea 2: QuickPrint | Library print queues peak right before deadlines, causing late submissions. | Students printing assignments | Waiting at library service desk or old coin machines | PDF upload web script + QR code generator logic |
| Idea 3: SmartSlot | Group study rooms are blindly occupied without live central tracking tracking. | Student group study teams | Walking physically room-to-room looking for spaces | JavaScript dashboard connected to a live spreadsheet |

## Opportunity Discovery Table
| No. | Observed Problem | Target User | Current Alternative | Possible IT Solution | Feasible Technology |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Students miss assignment deadlines because reminders are scattered across LMS, chats, and email. | University students | Manual notes, phone alarms, screenshots | Student deadline reminder dashboard | HTML/CSS/JS prototype with Google Sheet data backend |
| 2 | Small campus cafes lose sales and track items poorly because stock records are updated manually. | Campus cafe owners | Paper notes, manual inventory books | Simple inventory tracking web application | Google Forms + Google Sheets dashboard system |
| 3 | Students lose personal items on campus and do not know where to search or report them cleanly. | University students | LINE chat groups, checking physical security office | Campus lost-and-found reporting database | Responsive web landing page with Airtable item list |
| 4 | Students waste meal breaks standing in long, crowded queues at peak cafeteria lunch hours. | Students & food stall vendors | Standing in line, calling vendors manually | FoodFast: Smart vendor pre-ordering application | Mobile-optimized HTML/CSS/JS with Google Sheets backend |
| 5 | Students struggle to find available peer-tutors for technical course exam preparation help. | First-year IT students | Randomly asking friends, posting in group chats | Peer-learning mentor matching platform | Figma clickable layout with Airtable matching filters |
| 6 | Campus event organizers manually track attendance using messy, slow paper sign-in sheets. | Student club leaders | Paper sign-in sheets, manual attendance entry | Event registration and attendance dashboard | Web-form tracker outputting to a Google Sheet graph |

## Technology Feasibility Mapping
| Idea | Prototype Type | Tools Needed | Data Needed | Difficulty | Feasible? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Idea 1 | Dashboard MVP | HTML, CSS, JS, Google Sheets | Assignment schedules, deadline parameters | Low | Yes |
| Idea 2 | Form-based MVP | Google Forms, Google Sheets | Menu stock counts, basic unit quantities | Low | Yes |
| Idea 3 | Airtable-based MVP | Airtable, Web Landing Page | Lost item entries, descriptions, status logs | Low | Yes |
| Idea 4 | Simple web app prototype | Figma, HTML/CSS/JS, Google Sheets | Vendor menus, active digital order queues | Medium | Yes |
| Idea 5 | Figma clickable prototype | Figma software, UI layouts | Student listings, course codes, expert categories | Medium | Yes |
| Idea 6 | Form-based MVP | Google Forms, Google Sheets | Attendee IDs, timestamps, event metrics | Low | Yes |
