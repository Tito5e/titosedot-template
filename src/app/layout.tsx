import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

const noto_sans = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "TitoseDot Template",
    description: "Edited by TitoseDot",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body className={noto_sans.className}>{children}</body>
        </html>
    );
}
