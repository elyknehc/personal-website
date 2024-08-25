"use client";

import "../styles/globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
