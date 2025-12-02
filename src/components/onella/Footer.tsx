import Link from 'next/link';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '../ui/button';

export function Footer() {
  const socialLinks = [
    { href: "#", icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
    { href: "#", icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
    { href: "#", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
    { href: "#", icon: <Github className="h-5 w-5" />, label: "GitHub" },
  ];

  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/solutions/seo", label: "Services" },
    { href: "/support", label: "Contact" },
    { href: "/support", label: "Help" },
  ];

  return (
    <footer className="flex flex-col bg-slate-50/5 items-center justify-around w-full py-16 text-sm text-gray-800/70 dark:text-gray-400">
      <div className="flex items-center gap-8">
        {footerLinks.map((link) => (
          <Link key={link.label} href={link.href} className="font-medium text-gray-500 hover:text-black dark:hover:text-white transition-all">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-8 text-indigo-500">
        {socialLinks.map((social) => (
           <Button key={social.label} variant="ghost" size="icon" asChild>
              <a href={social.href} aria-label={social.label} className="text-gray-500 hover:text-white">
                {social.icon}
              </a>
            </Button>
        ))}
      </div>
      <p className="mt-8 text-center">
        Copyright © {new Date().getFullYear()}{' '}
        <a href="https://onellasoft.com" className="hover:underline">
          OnellaSoft
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
