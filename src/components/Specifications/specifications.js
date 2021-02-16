import React from 'react'
import img from '../../assets/Images/i01.png'
import img1 from '../../assets/Images/i02.png'
import img2 from '../../assets/Images/i03.png'
import img3 from '../../assets/Images/i04.png'
import styles from './specification.module.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
const data=[
    {
        image:img,
        head:"Camera",
        text:"Capture your world on 5 x 12 MP, f/1.82 (2 x RBG, 3 x mono)" 
    },{
        image:img1,
        head:"Processor",
        text:"Choose smart with the Qualcomm® Snapdragon™ 845 Mobile Platform" 
    },
    {
        image:img2,
        head:"Battery",
        text:"Stay out with 2-day battery and AI-assisted Adaptive Battery technology." 
    },
    {
        image:img3,
        head:"Display",
        text:"See the whole picture with PureDisplay 5.99” QHD+ pOLED" 
    }
]

const Specifications = () => {
    const feature=data.map((d,index)=>{
        return(
            <Card  className={styles.card} key={index}>
        <CardImg top width="100%" src={d.image} alt={d.head} />
        <CardBody>
          <CardTitle tag="h5">{d.head}</CardTitle>
         
          <CardText>{d.text}</CardText>
        </CardBody>
      </Card>
        )
        
    })
    return (
        <div className={styles.section}>
            {feature}
        </div>
    )
}

export default Specifications
