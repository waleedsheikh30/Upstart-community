import React from 'react'
import pic1 from '../images/buisness.jpeg'
import pic2 from '../images/socialmedia.jpeg'
import pic3 from '../images/resources.jpg'
import pic4 from '../images/branding.jpg'

const About = () => {
  return (
    <div>
         <div className='bottom_content'>
            <h1>REAL ADVICE FOR REAL ENTREPRENEURS</h1>
            <br /><br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut tortor interdum, vulputate neque eu, finibus augue. In semper porta <br /> ipsum a placerat. Quisque laoreet efficitur metus, ut eleifend turpis porttitor non. Nullam pretium, leo a euismod semper, dolor <br /> purus efficitur mi, ut dapibus mauris metus at felis.</p>
            <br /><br />
            {/* <span className='btn2'><Button variant="outlined" >About Us</Button></span> */}
            <button className='btn2'>About Us</button>
        </div>

        <div className='imgs'>
        <center >
            <img src={pic1} alt="" width={600} height={350} className='img1'/>
            <img src={pic2} alt="" height={350} width={350} className='img1'/>
        </center>
        <div className='spacing'>
            <center>
                <img src={pic3} alt="" height={350} width={350} className='img2'/>
                <img src={pic4} alt="" width={600} height={350} className='img2'/>
            </center>
        </div>    
    </div>
    </div>
  )
}

export default About