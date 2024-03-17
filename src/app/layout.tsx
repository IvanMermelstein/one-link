import "./globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html>
      <body className="bg-slate-900 text-slate-50 font-montserrat">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
