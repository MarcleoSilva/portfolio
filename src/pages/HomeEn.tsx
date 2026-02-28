import '../App.css';
import { EnBillboard } from '../modules/ui/Billboard';
import {  ButtonTranslate} from '../modules/ui/blocks/Button';
import { FaArrowDown, FaToolbox, FaUniversity } from "react-icons/fa";
import Qualifications from '../modules/ui/Qualifications';
import { FaCode } from "react-icons/fa";
import Publications from '../modules/ui/Publications';
import { RiArticleLine } from "react-icons/ri";
import Skills from '../modules/ui/Skills';
import FindMeBlock from '../modules/ui/blocks/FindMeBlock';
import AboutMeBlockEn from '../modules/ui/blocks/AboutMeBlockEn';
import Education from '../modules/ui/Education';
import { Link } from 'react-router-dom';

export default function HomePt() {
  return (
    <div className='h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
      <div className='snap-start min-h-screen bg-cover bg-linear-to-t from-[#221F55]
       to-[#010101] flex flex-col'>
          <Link to='/'>
            <ButtonTranslate text=""></ButtonTranslate>
          </Link>
          <EnBillboard></EnBillboard>
          <AboutMeBlockEn></AboutMeBlockEn>
          <div className='mt-auto flex justify-center pb-6'>
            <FaArrowDown color='white' size={40}/>
          </div>
      </div>
      <div className='h-screen snap-start bg-cover bg-linear-to-t to-[#221F55]
       from-[#010101] flex flex-col overflow-scroll'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          <div>
              <div className='m-10'>
                <h1 className='pb-3 flex gap-3 text-3xl font-[var(--primary-font)] text-white font-bold
              '>Publications<RiArticleLine  size={36}/></h1>
              <Publications lang="en"></Publications>
            </div>
            <div className='m-10 wrap-normal w-fit'>
                <h1 className='pb-3 flex gap-3 text-3xl font-[var(--primary-font)] text-white font-bold
              '>Experience<FaCode size={30}/></h1>
              <Qualifications lang="en"></Qualifications>
            </div>
          </div>
            <div className='m-10 wrap-normal w-fit'>
                <h1 className='pb-3 flex gap-3 text-3xl font-[var(--primary-font)] text-white font-bold
              '>Skills<FaToolbox size={30}/></h1>
              <Skills lang="en"></Skills>
            </div>
            <div>
              <div className='m-10 wrap-normal w-fit'>
                  <h1 className='pb-3 flex gap-3 text-3xl font-[var(--primary-font)] text-white font-bold
                '>Educatication<FaUniversity size={30}/></h1>
                <Education lang="en"></Education>
              </div>

              <div className='m-10 wrap-normal w-fit'>
                  <h1 className='pb-3 flex gap-3 text-3xl font-[var(--primary-font)] text-white font-bold
                '>Where to find me?</h1>
                <FindMeBlock></FindMeBlock>
              </div>
            </div>
        </div>

      </div>
        
      </div>

  );
}

