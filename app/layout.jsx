import Footer from "@/components/Footer";
import "./globals.css";
import VideoPlayer from "@/components/VideoPlayer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { FavoritesProvider } from "@/app/favoritecontext/page";
import { RateUsProvider } from "@/app/RateUsContext/page";

export const metadata = {
  title: "KRC Cars",
  description: "High quality vehicles and services",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    android: "/android-chrome-192x192.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RateUsProvider>
          <FavoritesProvider>
            <VideoPlayer />
            <Navbar />
            {children}
            <Footer />
          </FavoritesProvider>
        </RateUsProvider>
        <script
          src="https://kit.fontawesome.com/94a0c02d39.js"
          crossOrigin="anonymous"
          async
        ></script>
      </body>
    </html>
  );
}
