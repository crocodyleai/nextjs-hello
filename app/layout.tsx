export const metadata = {
  title: 'Hello World - Dyle',
  description: 'Next.js app deployed with Argo CD',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
