import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        // {
        //   text: 'Pricing',
        //   href: getPermalink('/pricing'),
        // },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
      ],
  // actions: [{ text: 'Download Brochure', href: '', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Sites',
      links: [
        { text: 'Services', href: '/services' },
        { text: 'Contact', href: '/contact' },
        { text: 'About Us', href: '/about' },
      ],
    },
  ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/neuraception/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted"> Neuraception</a> · All rights reserved.
  `,
};
