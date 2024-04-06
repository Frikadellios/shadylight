import { HoverEffect } from './ui/card-hover-effect'

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
    {
      title: 'Oracle',
      description:
        'Always Free Services with Cloud Free Tier - Up to 4 copies of ARM Ampere A1 Compute with 3,000 CPU hours and 18,000 GB hours per month. Better plase for the beginning your Jedy Way... And the Force will be with You.',
      link: 'https://www.oracle.com/cis/cloud/free/',
    },
    {
      title: 'Cloudflare',
      description:
        'Streaming security, performance and reliability all in one package offering a wide range of award-winning extras! Connection safeguard, boosting speed and dependability bundled together with a diverse selection of acclaimed add-ons!',
      link: 'https://cloudflare.com',
    },
    {
      title: 'Vercel',
      description:
        "A Vercel's company, focuses Engage in full-stack development Effortlessly construct and launch full-stack projects universally, provides high technology Cloud services for modern, scale, and fasters web products.",
      link: 'https://vercel.com',
    },
    {
      title: 'DailyDev',
      description:
        "Society In which creators endure collectively We comprehend the challenges of being a creator. It doesn't need to be that way. A personalized stream of updates, developer societies, and exploration, far superior to the current options. Perhaps ;)",
      link: 'https://daily.dev',
    },
    {
      title: 'Coolify',
      description:
        'Elevate - An open platform & self-operated Heroku / Netlify / Vercel alternative system. Every Language.. Any Machines.. Any Finances... And any Concepts - is supported. As soon as your server links up, Elevate will manage a multitude of operations on its own, freeing you up to focus on your programming. ',
      link: 'https://coolify.com',
    },
    {
      title: 'Appwrite',
      description:
        'The innovative technology of Appwrite enables you to integrate Authentication, Databases, Functions, Storage, and Messaging into your projects, allowing you to create diverse applications of any magnitude, maintain control of your data, and utilize your chosen programming languages and resources.',
      link: 'https://appwrite.io',
    },
  ];
