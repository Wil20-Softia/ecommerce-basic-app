This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Instalando las dependencias que se necesitan en el proyecto

- Primero coger las dependencias que estan en la pagina de Github del propietario
- Copiar las mismas en el apartado "dependencies" del archivo package.json
- Luego por terminal ingresar a la carpeta principal del proyecto en Next.js
- Ejecutar el comando: npm install --legacy-peer-deps  --> Para que se instalen todas las dependencias copidas

# Instalar Sanity CLI
- npm install -g @sanity/cli

# Si no quiere coger el comando de "sanity init" entonces una solucion factible en Windows es:

- Ingresar a la PowerShell como administrador y ejecutar el comando:
- [Set-ExecutionPolicy Unrestricted]
- Ese comando anterior lo que hace es quitar las restricciones en la ejecucion de los scrips en el Windows actual

# Si ocurre algun problema con la ejecucion de algunos comandos de sanity, en la mayoria en aquellos que se necesitan aplicaciones de terceros como un navegador:

- Abrir la consola de de Git Bash y ejecutar los codigos desde allí.

## Configurar el .gitignore:
- node_modules
- .env