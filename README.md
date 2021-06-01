# GrubClub

## Description
This developer-focused social-media application allows the user to manage their planning for Potlucks they are either hosting or attending. They can create new post entries, read their posts, update their pre-existing posts, delete their posts, and read other people's posts.

## Planning Story
Brainstormed CRUD-based ideas and reflected on how easier it would be to have one centralized place to manage potlucks instead of trying to organize it through multiple text threads.

## Important Links
- Client Repo: [view here]()
- Deployed Client: [view here]()
- Deployed API: [view here]()

## User Stories

- As a new user I want to sign up with an email and password
- As an existing user I want to login with email and password
- As a user I want to be able to change my password when logged in
- As a user I want to be able to sign out when signed in
- As a user I want to be able to add a Potluck post
- As a user I want to be able to add an Item post to a Potluck thread
- As a user I want to review the posts I have made
- As a user I want to be able to update a post I own when logged in
- As a user I want to be able to delete a post I own when logged in

## Technologies Used
- ReactJS
- HTML/CSS
- Bootstrap

## ERD

![devheadERD](https://media.git.generalassemb.ly/user/35033/files/e1a56380-b173-11eb-82e3-56e54747e6f0)

## Problem-solving process and strategy
- TBD

## Unsolved Problems
- TBD

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

#### Posts
|Verb   | URI Pattern   |
|---|---|
| POST  | /posts  |
| GET  | /posts  |
| GET  | /posts/all  |
| DELETE  | /posts/:id  |
| PATCH  | /posts/:id  |

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
