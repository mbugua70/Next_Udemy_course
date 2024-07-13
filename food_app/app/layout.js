import MainHeaderBackground from "@/components/mainHeader/main-header-background";
import "./globals.css";
import MainHeader from "@/components/mainHeader/main-header";

export const metadata = {
  title: "All Meals",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground />
        {/* navigaton header */}
        <MainHeader />

        {children}
      </body>
    </html>
  );
}
