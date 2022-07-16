import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface authModalProps {
  selection: () => void
}

const AuthModal:FC<authModalProps> = ({selection}) => {

  const variants = {
    hidden: {
      y: "-200%",
    },
    visible: {
      y: 0
    },
    exit: {
      y: "200%"
    }
  }

  const bgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    
    
      <motion.div style={{backgroundColor: "#000000e1"}} initial="hidden" animate="visible" exit="exit" variants={bgVariants} transition={{duration: 0.1}} onClick={selection} className='absolute z-10 w-screen h-screen flex items-center justify-center overflow-y-hidden'>
        
        <motion.div onClick={(e) => e.stopPropagation()} className='bg-black h-40 md:h-44 lg:h-52 w-4/6 md:w-3/5 rounded-2xl flex flex-col md:flex-row' initial="hidden" animate="visible" exit="exit" variants={variants} transition={{duration: 0.1, type: "spring", damping: 25, stiffness: 500}}>
          <div className='h-full flex items-center justify-center flex-1 text-white font-semibold text-center text-xl md:text-2xl lg:text-3xl break-words'>
            Log in to shop on web!
          </div>
          <div className='h-full flex items-center justify-center flex-1'>
            <motion.button className='bg-white text-sm md:text-base lg:text-lg px-3 py-1.5 rounded-md flex items-center justify center gap-1'><i className='fab fa-google'></i><p> Log in with google</p></motion.button>
          </div>
        </motion.div>
      </motion.div>
    
  )
}

export default AuthModal;