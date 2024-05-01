# Fiap Blog

This repository is for study purposes only.
It was a study based on an MBA Class for Front-end Development.

---

## React + TypeScript + Vite

The project was started using a simple template from React + Vite that provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Besides, there were some more added to the tech stack:

- **SWR**: Next's SWR (Stale while revalidate) for caching
- **GraphQL** to work with Contentful GraphQL API
- **Shadcn** and **Tailwind** for styling
- **Vitest** and **React testing library** for testing

Feel free to use it as a boiler plate for a simple blog application using [Contentful](https://www.contentful.com).

### Requirements

To create a project using this repository's files you need:

1. Env file with your Contentful keys.
2. Types on Contentful like the ones expected in this application.

#### Env file

VITE_API_KEY="Your Contentful API Key"

VITE_BASE_URL="Your base URL with your Contentful space"

#### Contentful Types

**Author**

- name: `Short text`
- picture: `Media`

**Categories**

- title: `Short text`
- slug: `Short text`

**Post**

- title: `Short text`
- content: `Rich text`
- excerpt: `Long text`
- coverImage: `Media`
- date: `datetime`
- slug: `Short text`
- author: `reference` (Reference to Author)
- category: `references` (Many - References to categories)
