import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { FromLeftVariant } from '@/lib/framerVariants';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href='/' className='mr-3' aria-label='Link to Home Page'>
      <motion.div initial='hidden' animate='visible' variants={FromLeftVariant}>
        <span className='hidden sm:inline-flex font-semibold text-lg'>
          Pho Chopstix
        </span>
      </motion.div>
    </Link>
  );
};
export default Logo;
