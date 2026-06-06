import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/site-config";

const topNav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Book Call", href: BOOKING_URL, external: true },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/clientflow-logo.png"
              alt="ClientFlow"
              width={180}
              height={48}
              className="h-9 w-auto"
            />
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {topNav.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 transition hover:text-white"
                >
                  {item.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </header>
      {children}
      <footer className="border-t border-white/10 px-5 py-12 sm:px-8">
        <div className="mx-auto grid w-full max-w-[1100px] gap-8 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-white">ClientFlow</p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Websites, CRM, voice automation, and workflow systems for service
              businesses.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white">
                  Insights
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200"
              >
                Get in touch via the booking link above.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
