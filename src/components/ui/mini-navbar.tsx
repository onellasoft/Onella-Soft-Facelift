'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from 'next/navigation';

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { pathname: string }
>(({ className, title, href, pathname, ...props }, ref) => {
  const isActive = pathname === href;
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-full p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-800 hover:text-white focus:bg-neutral-800 focus:text-white whitespace-nowrap",
            isActive ? "bg-white/90 text-black hover:bg-white/90 hover:text-black shadow-[0_0_10px_1px_rgba(255,255,255,0.3)]" : "",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const shapeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const [headerShapeClass, setHeaderShapeClass] = React.useState('rounded-full');
  const [visible, setVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);


  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleScroll = React.useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  React.useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass('rounded-xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const logoElement = (
    <Link href="/" className="flex items-center gap-2 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-auto"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
      <span className="font-bold text-lg">OnellaSoft</span>
    </Link>
  );

  const aboutUsComponents: { title: string; href: string }[] = [
    {
      title: "About Us",
      href: "/about-us",
    },
    {
      title: "Company Overview",
      href: "/company-overview",
    },
    {
      title: "Careers",
      href: "/career",
    },
  ];

  const solutionsComponents: { title: string; href: string }[] = [
    {
      title: "Search Engine Optimization (SEO)",
      href: "/solutions/seo",
    },
    {
      title: "Performance Marketing",
      href: "/solutions/performance-marketing",
    },
    {
      title: "Social Media Marketing",
      href: "/solutions/social-media-marketing",
    },
     {
      title: "Content Marketing",
      href: "/solutions/content-marketing",
    },
    {
      title: "Web Development & Design",
      href: "/solutions/web-development",
    },
  ];

  const industriesComponents: { title: string; href: string }[] = [
    {
      title: "E-Commerce",
      href: "/industries/ecommerce",
    },
    {
      title: "Real Estate",
      href: "/industries/real-estate",
    },
    {
      title: "Education",
      href: "/industries/education",
    },
    {
      title: "Healthcare",
      href: "/industries/healthcare",
    },
    {
      title: "Hospitality",
      href: "/industries/hospitality",
    },
  ];

  const isAboutActive = aboutUsComponents.some(c => c.href === pathname);
  const isSolutionsActive = solutionsComponents.some(c => c.href === pathname);
  const isIndustriesActive = industriesComponents.some(c => c.href === pathname);


  const desktopNav = (
    <NavigationMenu onValueChange={() => setIsOpen(false)}>
      <NavigationMenuList>
         <NavigationMenuItem>
            <Link href="/" passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm hover:text-white rounded-full", pathname === "/" ? "bg-white/90 text-black hover:bg-white/90 hover:text-black shadow-[0_0_10px_1px_rgba(255,255,255,0.3)]" : "text-gray-300")}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger onPointerEnter={() => setIsOpen(true)} onPointerLeave={() => setIsOpen(false)} className={cn("bg-transparent text-sm hover:text-white data-[state=open]:text-white rounded-full", isAboutActive ? "bg-white/90 text-black hover:bg-white/90 hover:text-black shadow-[0_0_10px_1px_rgba(255,255,255,0.3)]" : "text-gray-300")}>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-3 p-4">
              {aboutUsComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  pathname={pathname}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger onPointerEnter={() => setIsOpen(true)} onPointerLeave={() => setIsOpen(false)} className={cn("bg-transparent text-sm hover:text-white data-[state=open]:text-white rounded-full", isSolutionsActive ? "bg-white/90 text-black hover:bg-white/90 hover:text-black shadow-[0_0_10px_1px_rgba(255,255,255,0.3)]" : "text-gray-300")}>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-3 p-4">
              {solutionsComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  pathname={pathname}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger onPointerEnter={() => setIsOpen(true)} onPointerLeave={() => setIsOpen(false)} className={cn("bg-transparent text-sm hover:text-white data-[state=open]:text-white rounded-full", isIndustriesActive ? "bg-white/90 text-black hover:bg-white/90 hover:text-black shadow-[0_0_10px_1px_rgba(255,255,255,0.3)]" : "text-gray-300")}>Industries</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-3 p-4">
              {industriesComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  pathname={pathname}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href="/blogs" passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm hover:text-white rounded-full", pathname === "/blogs" ? "bg-white/90 text-black hover:bg-white/90 hover:text-black shadow-[0_0_10px_1px_rgba(255,255,255,0.3)]" : "text-gray-300")}>
                Blogs
              </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
         <NavigationMenuItem>
            <Link href="/support" passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm hover:text-white rounded-full", pathname === "/support" ? "bg-white/90 text-black hover:bg-white/90 hover:text-black shadow-[0_0_10px_1px_rgba(255,255,255,0.3)]" : "text-gray-300")}>
                Support
              </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );

  const mobileNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Company Overview', href: '/company-overview' },
    { label: 'Careers', href: '/career' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Industries', href: '/industries' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Support', href: '/support' },
  ];

  return (
    <header className={cn(
      `fixed top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pl-6 pr-6 py-3 backdrop-blur-sm border border-[#333] bg-[#1f1f1f57] w-[calc(100%-2rem)] sm:w-auto transition-all duration-300 ease-in-out`,
      headerShapeClass,
      visible ? 'translate-y-0' : '-translate-y-40'
    )}>

      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        <div className="flex items-center gap-4">
          {logoElement}
        </div>

        <nav className="hidden sm:flex items-center text-sm">
          {desktopNav}
        </nav>

        <button className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none"
                onClick={toggleMenu}
                aria-label={isOpen ? 'Close Menu' : 'Open Menu'}>
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      <div className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-4 text-base w-full">
          {mobileNavLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={cn("text-gray-300 hover:text-white transition-colors w-full text-center py-2 rounded-full", pathname === link.href ? "bg-white/90 text-black shadow-[0_0_10px_1px_rgba(255,255,255,0.3)]" : "")}>
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
