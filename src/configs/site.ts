// import type { FooterItem, MainNavItem } from "@/types"
//
// import { productCategories } from "@/config/products"
// import { slugify } from "@/lib/utils"

import { Icons } from '@/components/icons';
import { env } from '@/env.mjs';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: env.NEXT_PUBLIC_SITE_NAME,
  author: env.NEXT_PUBLIC_SITE_NAME,
  slogan: 'Watch TV Shows Online, Watch Movies Online.',
  description:
    'Watch movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.',
  keywords: [
    'watch movies',
    'movies online',
    'watch TV',
    'TV online',
    'TV shows online',
    'watch TV shows',
    'stream movies',
    'stream tv',
    'instant streaming',
    'watch online',
    'movies',
    'watch TV online',
    'no download',
    'full length movies',
    env.NEXT_PUBLIC_SITE_NAME,
  ],
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/images/hero.jpg`,
  links: {
    twitter: `${env.NEXT_PUBLIC_TWITTER}`,
    github: 'https://github.com/gauravyad12/Darkworld/',
    githubAccount: '',
  },
  socialLinks: [
    {
      title: 'Facebook',
      href: `${env.NEXT_PUBLIC_FACEBOOK}`,
      icon: Icons.facebook,
    },
    {
      title: 'Instagram',
      href: `${env.NEXT_PUBLIC_INSTAGRAM}`,
      icon: Icons.instagram,
    },
    {
      title: 'Twitter',
      href: `${env.NEXT_PUBLIC_TWITTER}`,
      icon: Icons.twitter,
    },
    {
      title: 'Youtube',
      href: `${env.NEXT_PUBLIC_YOUTUBE}`,
      icon: Icons.youtube,
    },
  ],
  footerItems: [
    { title: 'Audio Description', href: 'https://gauravkumaryadav.great-site.net/Audiodescription.html' },
    { title: 'Help Center', href: 'https://gauravkumaryadav.great-site.net/' },
    { title: 'Gift Cards', href: 'https://gauravkumaryadav.great-site.net/Giftcard.html' },
    { title: 'Media Center', href: 'https://gauravkumaryadav.great-site.net/media-center.html' },
    { title: 'Developer', href: 'https://gauravkumaryadav.great-site.net/' },
    { title: 'Jobs', href: 'https://duskyworld.netlify.app/' },
    { title: 'Terms of Use', href: 'https://gauravkumaryadav.great-site.net/Terms_and_conditions.html' },
    { title: 'Privacy', href: 'https://gauravkumaryadav.great-site.net/privacy-policy.html' },
    { title: 'Legal Notices', href: 'https://gauravkumaryadav.great-site.net/Legal%20Notices.html' },
    { title: 'Cookie Preferences', href: 'https://gauravkumaryadav.great-site.net/Cookie%20Preferences.html' },
    { title: 'Corporate Information', href: 'https://gauravkumaryadav.great-site.net/Corporate%20Information.html' },
    { title: 'Contact Us', href: 'https://gauravkumaryadav.great-site.net/' },
  ],
  mainNav: [
    {
      title: 'Home',
      href: '/home',
      // icon: Icons.play,
    },
    {
      title: 'TV Shows',
      href: '/tv-shows',
      // icon: Icons.tvShow,
    },
    {
      title: 'Movies',
      href: '/movies',
      // icon: Icons.movie,
    },
    {
      title: 'New & Popular',
      href: '/new-and-popular',
      // icon: Icons.trendingUp,
    },
    // {
    //   title: "My List",
    //   href: "/my-list",
    //   // icon: Icons.list,
    // },
    {
      title: 'Notifications',
      // onClick: () => alert("🛹 Do a kickflip"),
      // icon: Icons.bell,
    },
  ],
};
