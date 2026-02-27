import '../App.css';
import AboutMeBlock from '../modules/ui/blocks/AboutMeBlock';
import { PtBillboard } from '../modules/ui/Billboard';
import {  ButtonTranslate} from '../modules/ui/blocks/Button';
import { FaArrowDown, FaToolbox, FaUniversity } from "react-icons/fa";
import Qualifications from '../modules/ui/Qualifications';
import { FaCode } from "react-icons/fa";
import Publications from '../modules/ui/Publications';
import { RiArticleLine } from "react-icons/ri";
import Skills from '../modules/ui/Skills';
import FindMeBlock from '../modules/ui/blocks/FindMeBlock';
import Education from '../modules/ui/Education';
import { Link } from 'react-router-dom';

export default function HomePt() {
  return (
    <div className='h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
      <div className='snap-start min-h-screen bg-cover bg-linear-to-t from-[#221F55]
       to-[#010101] flex flex-col'>
          <Link to='/en'>
            <ButtonTranslate text=""></ButtonTranslate>
          </Link>
          <PtBillboard></PtBillboard>
          <AboutMeBlock></AboutMeBlock>
          <div className='mt-auto flex justify-center pb-6'>
            <FaArrowDown color='white' size={40}/>
          </div>
      </div>
      <div className='h-screen snap-start bg-cover bg-linear-to-t to-[#221F55]
       from-[#010101] flex flex-col overflow-scroll'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          <div>
              <div className='m-10'>
                <h1 className='pb-3 flex gap-3 text-3xl font-[--primary-font] text-white font-bold
              '>Publicações<RiArticleLine  size={36}/></h1>
              <Publications lang="pt"></Publications>
            </div>
            <div className='m-10 wrap-normal w-fit'>
                <h1 className='pb-3 flex gap-3 text-3xl font-[--primary-font] text-white font-bold
              '>Experiência<FaCode size={30}/></h1>
              <Qualifications lang="pt"></Qualifications>
            </div>
          </div>
            <div className='m-10 wrap-normal w-fit'>
                <h1 className='pb-3 flex gap-3 text-3xl font-[--primary-font] text-white font-bold
              '>Habilidades<FaToolbox size={30}/></h1>
              <Skills lang="pt"></Skills>
            </div>
            <div>
              <div className='m-10 wrap-normal w-fit'>
                  <h1 className='pb-3 flex gap-3 text-3xl font-[--primary-font] text-white font-bold
                '>Educatication<FaUniversity size={30}/></h1>
                <Education lang="pt"></Education>
              </div>
              <div className='m-10 wrap-normal w-fit'>
                  <h1 className='pb-3 flex gap-3 text-3xl font-[--primary-font] text-white font-bold
                '>Onde me achar?</h1>
                <FindMeBlock></FindMeBlock>
              </div>
              </div>
        </div>

      </div>
        
      </div>

  );
}

