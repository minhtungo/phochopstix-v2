// import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { FromLeftVariant } from '@/lib/framerVariants';
import { AnimatedHeading } from './';

const Hero = () => {
  return (
    <section
      id='home'
      className='h-screen gap-16 pt-8 md:flex md:items-center md:justify-between lg:py-10'
    >
      {/* Image */}
      <div className='z-10 mt-16 flex basis-3/5 justify-center md:order-2 md:mt-32'>
        <Image
          src='/static/images/pho_ribs.png'
          alt=''
          height={600}
          width={600}
          className='z-10 w-full max-w-[400px] md:max-w-[600px]'
        />
      </div>
      {/* Main Text */}
      <div className='mt-12 basis-2/5 text-center md:text-start lg:flex-1'>
        '
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='animate-border font-playfair bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-[length:400%_400%] bg-clip-text text-center text-2xl font-semibold text-transparent md:text-start md:text-3xl lg:text-4xl'>
            Welcome to PhởChopstiX
          </p>
          <p className='text-md mt-4 mb-7 text-center md:text-start'>
            We offer a variety of true Vietnamese Dishes from Rare Beef Pho to
            Vermicelli Bowl. Come see what we have to offer for you today.
          </p>
        </motion.div>
        {/* buttons */}
        <motion.div
          className='mt-5 flex justify-center gap-2 md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <button className='btn'>View Menu</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
