import Link from "next/link";
import { Link2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Link2 className="h-6 w-6" />
            <span className="font-bold text-xl hidden sm:inline-block">ShortURL</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center gap-2">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}