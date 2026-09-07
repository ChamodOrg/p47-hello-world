# Hello World — PRD

## Problem Statement

Teams standing up a new project on this platform need the smallest possible working app to confirm that sign-in, deployment, and delivery all function end to end before building anything real. Without a minimal reference app, every new project re-proves the platform's plumbing from scratch.

## Solution

A single-page web app that, once the user signs in, displays a fixed "Hello, World!" greeting. It exists to prove the platform pipeline works, not to deliver product features.

## Actors

- **User**: A person who signs in and views the greeting page. No distinction between user types — anyone who can sign in can see the greeting.

## User Stories

1. As a User, I want to sign in, so that I can access the app.
2. As a User, I want to see a "Hello, World!" greeting on the page, so that I can confirm the app is working.

## Product Decisions

- Users sign in via SSO through Thunder, the platform identity provider. *(org default)*
- The greeting is static text ("Hello, World!") shown the same way to every user — no personalization, no input fields.
- The app has exactly one screen: the greeting page. There is no navigation, settings, or additional content.

## Out of Scope

- Personalized greetings or any user input.
- User profiles, preferences, or per-user data of any kind.
- Multiple pages, navigation, or additional features beyond displaying the greeting.
- Any notifications, integrations, or external services beyond sign-in.

## Open Questions

None at this time.