import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { PopUp } from '@/lib/framerVariants';

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.asPath === (href === '/home' ? '/' : `/#${href}`);

  return (
    <Link
      href={href === '/home' ? '/' : `#${href}`}
      className={`${
        isActive ? 'font-bold text-gray-200' : 'font-semibold text-gray-300'
      } hidden rounded-md px-2 py-[3px] text-base transition-all hover:bg-neutral-700/50 sm:inline-block md:px-3`}
    >
      <motion.p className='capitalize' variants={PopUp}>
        {text}
      </motion.p>
    </Link>
  );
};

export default NavItem;
