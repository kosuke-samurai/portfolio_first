import { ResponsiveAppBar } from "@/components/Navigation";
import { Worklist } from "@/components/Worklist";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import classes from '../components/Scroll.module.css'

import React from 'react'

const index = () => {
  return (
      <div className="">
          
          <div className="z-10">
          <ResponsiveAppBar  />   
          </div>
          {/* 背景サイズ指定永久保存↓ */}  
              <div className="fixed top-0 left-0 w-full h-screen z-[-1] opacity-50">
              <Image src='/seaside.png' layout="fill" objectFit='cover' alt="top" />
              </div>
              
        
        <div className="relative w-full h-screen">
              
            <div className="absolute inset-y-1/2 right-2/3 max-md:inset-x-8">
                  <h1 className="text-white font-bold text-8xl max-md:text-2xl">Portfolio</h1>
                  <p className="text-white text-xl max-md:text-sm">過去の成果物をご紹介します</p>
                  <div className="md:hidden"><div className={classes.scrolldown}><span>Scroll</span></div></div>
            </div>
         </div>
    
    <FadeIn>
       <Worklist/>
    </FadeIn> 
    </div>
  )
}

export default index