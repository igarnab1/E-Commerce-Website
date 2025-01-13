import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_Kurta } from '../../../Data/mens_kurta'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_Kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel data={mens_Kurta} sectionName={"Men's Shoes"}/>
            <HomeSectionCarousel data={mens_Kurta} sectionName={"Men's Shirts"}/>
            <HomeSectionCarousel data={mens_Kurta} sectionName={"Saree's"}/>
            
        </div>
    </div>
  )
}

export default HomePage
