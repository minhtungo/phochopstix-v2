import { motion } from 'framer-motion';
import { plateVariants, staggerContainer, fadeIn } from '@/lib/framerVariants';
import Image from 'next/image';

const About = () => {
  return (
    <section id='about' className='py-20 bg-gray-50 w-full'>
      <div className='container mx-auto min-h-[620px] max-w-6xl px-10 sm:px-20 md:px-32 lg:px-16'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='flex flex-wrap items-center -mx-3'
        >
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1.8)}
            className='order-1 w-full px-3 lg:w-1/2 lg:order-0'
          >
            <div className='w-full lg:max-w-md'>
              <h3 className='mb-4 text-2xl font-bold'>About Us</h3>
              <h2 className='mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                Who We Are
              </h2>
              <p className='mb-4 font-medium tracking-tight text-gray-400 xl:mb-6'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae natus quibusdam at aliquam atque, architecto sed
                error, incidunt molestiae vel perspiciatis ad quis nulla nemo
                sequi iste voluptatum fuga libero?
              </p>
              <button className=''>View Menu</button>
            </div>
          </motion.div>
          <motion.div
            variants={plateVariants}
            className='w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0'
          >
            <Image
              src='/static/images/pho_ribs.png'
              height={600}
              width={600}
              alt=''
              className='mx-auto sm:max-w-sm lg:max-w-full'
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
