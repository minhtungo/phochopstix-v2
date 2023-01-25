import { MdMenu, MdClose } from 'react-icons/md';
import { CgMenuHotdog } from 'react-icons/cg';
import { GiKnifeFork } from 'react-icons/gi';
import { motion } from 'framer-motion';

import { PopUp } from '@/lib/framerVariants';

const HamBurgerIcon = ({
  open,
  handleClick,
}: {
  open: boolean;
  handleClick: () => void;
}) => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={PopUp}
      className='sm:hidden z-[100]'
    >
      {!open ? (
        <CgMenuHotdog
          className='h-6 w-6 cursor-pointer select-none transform duration-300 rounded-md active:scale-50'
          onClick={handleClick}
        />
      ) : (
        <GiKnifeFork
          className='h-6 w-6 cursor-pointer select-none transform duration-300 rounded-md active:scale-50'
          onClick={handleClick}
        />
      )}
    </motion.div>
  );
};

export default HamBurgerIcon;
