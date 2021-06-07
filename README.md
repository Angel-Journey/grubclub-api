# GrubClub

## Description
This application allows the user to manage their planning for Potlucks they are either hosting or attending. They can create new Potlucks post entries, read their posts, update their pre-existing posts, delete their posts, and read other people's posts. The user can also add Item posts to any Potluck post, regardless of ownership. An Item posts is nested within the corresponding Potluck post.

## Set up and installation instructions
1. Fork and clone this repository.
2. Run `npm install` to install all dependencies
3. Use `npm run server` to spin up the server.

## Important Links
- Deployed API: [view here](https://grubclub-api.herokuapp.com/)
- Client Repo: [view here](https://github.com/Angel-Journey/grubclub-client)
- Deployed Client: [view here](https://angel-journey.github.io/grubclub-client/)

## Planning Story
Brainstormed CRUD-based ideas and reflected on how easier it would be to have one centralized place to manage potlucks instead of trying to organize it through multiple text threads.

## Technologies Used
- ReactJS
- HTML/CSS
- Bootstrap
- Express

## ERD

![GrubClub ERD](/images/GrubClub_ERD.png)

## Problem-solving process and strategy
- Would troubleshoot problems through trial & error and research via Google, stackoverflow, etc.
- If I couldn't find the answer, would seek help from instructors by submitting an issue request

## Unsolved Problems
- Update Location details in Potluck to reflect Google Maps location
- Update styling in list of various Potlucks details
- Index All Users and be able to view that User's Potlucks

## Catalog of Routes
#### Auth
|Verb   | URI Pattern   |
|---|---|
| POST  | /sign-up  |
| POST  | /sign-in  |
| DELETE  | /sign-out  |
| PATCH  | /change-password  |

#### User
|Verb   | URI Pattern   |
|---|---|
| GET  | /users  |

#### Potlucks
|Verb   | URI Pattern   |
|---|---|
| POST  | /potlucks  |
| GET  | /potlucks  |
| GET  | /potlucks/all  |
| DELETE  | /potlucks/:id  |
| PATCH  | /potlucks/:id  |

#### Items
|Verb   | URI Pattern   |
|---|---|
| POST  | /items  |
| DELETE  | /items/:id  |
| PATCH  | /items/:id  |

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
