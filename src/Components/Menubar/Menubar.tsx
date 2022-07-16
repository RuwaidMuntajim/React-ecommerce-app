import {FC} from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
interface menuBarProps {
  selectionM: () => void
}

const Menubar:FC<menuBarProps> = ({selectionM}) => {

  const variants = {
    hidden: {
      x: "200%",
    },
    visible: {
      x: 0
    },
    exit: {
      x: "200%"
    }
  }

  const bgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }




  return (
    <motion.div onClick={selectionM} style={{backgroundColor: "#000000e1"}} className='absolute flex justify-end z-10 h-screen w-screen overflow-hidden' initial="hidden" animate="visible" exit="exit" variants={bgVariants} transition={{duration: 0.5}}>
      <motion.div onClick={e => e.stopPropagation()} className=" h-full w-4/5 bg-black flex flex-col items-center" initial="hidden" animate="visible" exit="exit" variants={variants} transition={{duration: 0.5, type: "spring", damping: 25, stiffness: 500}}>
        <div className='h-1/6 w-full flex items-start justify-start mt-0.5 ml-3'><i onClick={selectionM} className="fa fa-window-close text-white text-xl mt-0 " aria-hidden="true"></i></div>
        <div className='h-5/6 flex flex-col items-center justify-start mt-36 gap-y-5'>
          <Link to='/cart'><button onClick={selectionM} className='h-8 w-20 flex justify-center items-center rounded-full bg-white text-black'>
            <div className='relative -top-3 -left-8 px-3 py-1 rounded-full bg-red-600'>1</div>
            Cart</button></Link>
          <Link to='/about'><button onClick={selectionM} className='h-8 w-20 rounded-full bg-white text-black'>About</button></Link>
          <button className='h-8 w-24 rounded-full bg-white text-black'>Log out</button>
        </div>
        
      </motion.div>      
    </motion.div>
  )
}

export default Menubar;