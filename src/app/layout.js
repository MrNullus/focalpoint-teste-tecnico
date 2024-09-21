import localFont from "next/font/local";
import Head from "next/head";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: 'FocalPoint - Teste Técnico',
  description: 'Aplicativo de lista de tarefas construído com Next.js e SCSS para a vaga de desenvolvedor frontend júnior',
  keywords: 'lista de tarefas, gerenciamento de tarefas, next.js, react, scss, frontend, desenvolvedor júnior',
  author: 'Gustavo Henrique de Jesus da Silva',
  url: 'https://my-app.com',
  image: '/og-image.jpg',
  icons: {
    icon: '/favicon/favicon.ico'
  },
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    site: '@my-app',
    creator: '@author'
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://my-app.com',
    title: 'FocalPoint - Teste Técnico',
    description: 'Aplicativo de lista de tarefas construído com Next.js e SCSS para a vaga de desenvolvedor frontend júnior',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aplicativo de lista de tarefas FocalPoint - Teste Técnico'
      }
    ]
  }
};

export default function RootLayout( { children } ) {
    return (
        <html lang="pt-br">
        <Head>

        </Head>
        <body className="">
        { children }
        </body>
        </html>
    );
}
