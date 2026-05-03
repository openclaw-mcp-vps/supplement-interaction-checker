import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Supplement Interaction Checker',
  description: 'Check supplement and medication interactions instantly. Stay safe with real-time interaction warnings.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="11a05d61-ef17-4b2e-a9b2-4f36f27389a3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
