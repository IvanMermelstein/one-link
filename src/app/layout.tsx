import "./globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
