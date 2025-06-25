import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'ealvnrz',
  description:
    'personal website',
  href: 'https://ealvnrz.github.io',
  author: 'ealvnrz',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/ealvnrz',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/ealvnrz',
    label: 'Twitter',
  },
  {
    href: 'mailto:eloy.alvarado@usm.cl',
    label: 'Email',
  },
/* {
    href: '/rss.xml',
    label: 'RSS',
  },
*/
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
