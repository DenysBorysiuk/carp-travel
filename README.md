# Carp Travel

**[View live page](https://carp-travel-livid.vercel.app)**

---

![Site image](./public/images/og-image.jpg)

## 🗂️ Project description 🗂️

## Goals

Implement the Carp Travel landing page according to the technical specifications.

## Used Technologies:

- Next.js
- TypeScript
- Tailwind

## Acceptance Criteria

- The layout is fixed in pixels.
- Semantic and valid markup; accessibility (a11y) is a bonus.
- Responsive and cross-browser layout:
  - Mobile: 360px to 480px (fluid layout, should stretch);
  - Tablet: 768px;
  - Desktop: 1280px.
- Utilize the Mobile-First approach.
- Clean code with preserved formatting. Consider using ESLint/Prettier.
- Code is divided into separate components.

## Supported Languages

- English

## Design

[Design layout on Figma](https://www.figma.com/file/2nHaXyrwQxqXLYmPUGQuP1/CarpTravel---%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%B5-%D0%B7%D0%B0%D0%B2%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F?type=design&node-id=348-14&mode=design&t=sUHWte0Icz8dZlCF-0)

## Project structure

```mermaid
graph LR

  Z{Enter} --> L(Layout)
  L ---> B(Header)
  L ---> A((Home page))
  B --> BA[Menu]
  A --> AA[Section 1. Hero]
  A --> AB[Section 2. About]
  A --> AC[Section 3. Services]
  A --> AD[Section 4. Career]
  A --> AE[Section 5. Gallery]
  A --> AF[Section 6. Contacts]

```

## 📂 Deployment

To deploy this project, you need to perform the following steps:

1. **Clone the repository**: Use the `git clone` command to clone this repository to your computer.
2. **Install the dependencies**: Open a terminal in the root of the project and run `npm install` or
   `yarn install` to install all required dependencies.
3. **Setting environment variables**: Create a `.env` file in the root folder and add the necessary
   environment variables that you need for the project according to the `.env.example` file.
4. **Run the application**: Run the `npm run dev` or `yarn dev` command to run the project on the
   local server.
5. **Deploy**: To deploy this project to a production server, use hosting platforms such as Vercel,
   Netlify, or others.
