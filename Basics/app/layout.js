import './globals.css'

export const metadata = {
  title: 'React developer at work',
  description: 'Your first web app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
