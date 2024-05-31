import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
// const ibmPlexSerif = IBM_Plex_Serif({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-ibm-plex-serif'
// })

// Carrega a fonte "Inter" usando a biblioteca next/font
const inter = Inter({
  subsets: ["latin"], // Especifica que queremos apenas caracteres latinos
  variable: '--font-inter' // Define uma variável CSS para a fonte "Inter"
});

// Carrega a fonte "IBM Plex Serif"
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'], // Novamente, especificamos caracteres latinos
  weight: ['400', '700'], // Define os pesos da fonte (normal e negrito)
  variable: '--font-ibm-plex-serif' // Define uma variável CSS para a fonte "IBM Plex Serif"
});


export const metadata: Metadata = {
  title: "Money_Hub",
  description: "Guarde seu dinheiro",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
