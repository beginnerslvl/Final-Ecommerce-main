
import React from 'react'
import Image from 'next/image'
import {CgShoppingCart} from 'react-icons/cg'
import config from '../lib/config';
import Link from 'next/link';


const heroimages = config.heroItems.map(item => item.label);
const heroLabels = config.heroItems.map(item => item.label);

const headerImg = heroimages[0].imagePath;
const featured1 = heroimages[1].imagePath;
const featured2 = heroimages[2].imagePath;
const featured3 = heroimages[3].imagePath;
const featured4 = heroimages[4].imagePath;

const HeroBanner = () => {
  return (
    <header className='header'>
        <div className='header-left-side'>
            <div className='header-content'>
                <span>{heroLabels[0]}</span>
                 <h1>{heroLabels[1]}</h1>
                 <p>{heroLabels[2]}</p>
                <Link href='/products'>
                     <button className='btn' type='button'><CgShoppingCart size={26} />  Start Shopping</button>
                </Link>
            </div>

            <div className='header-featured'>
                <Image src={featured1} width={100} height={35} alt='img' />
                <Image src={featured2} width={100} height={35} alt='img' />
                <Image src={featured3} width={100} height={35} alt='img' />
                <Image src={featured4} width={100} height={35} alt='img' />
            </div>
        </div>

        <div className='header-right-side'>
            <div className='header-circle'>
                <Image className='header-img' src={headerImg} width={650} height={650} alt='header image' />
            </div>
        </div>
    </header>
  )
}

export default HeroBanner