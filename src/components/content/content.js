import React,{useEffect} from 'react'
import style from './content.module.css'
import image from '../../assets/Images/winner_image.png'
import Aos from 'aos'
export default function Content() {

useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    return (
        <>
        <div className={style.winner_content}>
            <div className={style.winner_display}>
                <div data-aos="fade-right">
                    <img  src={image} className={style.winnner_img}></img>
                </div>
                <div data-aos="fade-left" className={style.winner_font}>
                    <h5 className={style.winner_heading5}>NOKIA 9 PUREVIEW</h5>
                    <h1 className={style.winner_heading1}>Winner: Good Design® Award 2019</h1>
                    <p className={style.winner_para}>
                        As awarded by The Chicago Athenaeum: 
                        Museum of Architecture and Design, 
                        Nokia 9 PureView received a 2019 
                        Good Design Award in the Electronics 
                        category for its advanced design, reliability,
                        innovative features, and secure Android experience.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
