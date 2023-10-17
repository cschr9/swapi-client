## Hey Du!

Erstmal vielen Dank, dass du dir die Zeit nimmst den Code zu reviewen. Ich hijacke die readme kurz um dir ein paar Infos und Gedankengänge zum Client mit auf dem Weg geben.

Meine erste Idee war es eine Suche über alle Endpoints mit AutoComplete zu implementieren. Da die API aber recht lahm ist, habe ich mich entschieden den Scope zu reduzieren und eine Suche nur für Charaktere zu implementieren, dafür aber die UX in den Fokus zu stellen. Ich habe dabei versucht verschiedene Fetching Techniken (RSC vs CSC), fortgeschrittene React Konzepte & Features wie customHooks, HOC, Suspense, sowie einige Next.js spezifischen Features möglichst elegant einzubinden.

Hätte ich mehr Zeit gehabt, hätte ich als nächstes Feature ein Favoriten-System implementiert, das Error-Handling verbessert & zumindest für die Suche einen Unit Test geschrieben. Das UI ist sicherlich auch noch ausbaufähig.

Viel Spaß beim reviewen. :-)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
