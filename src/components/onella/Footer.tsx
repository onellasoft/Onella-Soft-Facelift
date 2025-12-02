
import Link from 'next/link';
import { Github, Twitter, Linkedin, Facebook, Mail, Phone } from 'lucide-react';
import { Button } from '../ui/button';

export function Footer() {
  const socialLinks = [
    {
      href: '#',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: 'Facebook',
    },
    {
      href: '#',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: 'Instagram',
    },
    {
      href: '#',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: 'LinkedIn',
    },
    {
      href: '#',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: 'Twitter',
    },
    {
      href: '#',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 18c-4.51 2-5-2-7-2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: 'GitHub',
    },
  ];

  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About' },
    { href: '/solutions/seo', label: 'Services' },
    { href: '/support', label: 'Contact' },
    { href: '/support', label: 'Help' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  ];

  return (
    <footer className="flex flex-col bg-slate-50/5 items-center justify-around w-full py-16 text-gray-800/70 dark:text-gray-400">
      <div className="flex items-center gap-8 flex-wrap justify-center px-4">
        {footerLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-medium text-gray-400 hover:text-white transition-all text-base"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-8 text-base">
        <a href="mailto:onellasoftinfo@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <Mail className="h-5 w-5" />
          <span>onellasoftinfo@gmail.com</span>
        </a>
        <a href="tel:+919834410388" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <Phone className="h-5 w-5" />
          <span>+919834410388</span>
        </a>
      </div>

      <div className="flex items-center gap-4 mt-8 text-indigo-500">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="hover:-translate-y-0.5 transition-all duration-300 text-white"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center text-base">
        Copyright © {new Date().getFullYear()}{' '}
        <a href="https://onellasoft.com" className="hover:underline">
          OnellaSoft
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
