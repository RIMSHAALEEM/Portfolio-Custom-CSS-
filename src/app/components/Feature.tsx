import React from 'react'
import Image from 'next/image'
import Dash from './Dash'
import grid1 from "@/app/public/BS.jpeg"
import grid2 from "@/app/public/DG.jpeg"
import grid3 from "@/app/public/EC.jpeg"


const feature = () => {
  return (
    <div className="container">
    <h2 className="title">Courses</h2>
    <h2 className="subtitle">That <span className="highlight">I Have Done</span></h2>
    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam perferendis blanditiis omnis quisquam repellat porro nisi eaque esse illum. Optio eligendi eaque quis harum? Neque eum eaque quibusdam voluptates.</p>

    <div className="card-grid">
        
         {/* first card  */}
        <div className="card">
            <Image className="card-image" src={grid1} alt="grid image"/>
            <div className="card-content">
                
                <h2 className="card-title">Bootstrap</h2>
                <div className="dash"></div>
                <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
            </div>
        </div>

         {/* second card */}
        <div className="card">
            <Image className="card-image" src={grid2} alt="grid image"/>
            <div className="card-content">
                <h2 className="card-title">Digital Marketing</h2>
                <div className="dash"></div>
                <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
            </div>
        </div>

        {/* Third card  */}
        <div className="card">
            <Image className="card-image" src={grid3} alt="grid image"/>
            <div className="card-content">
                
                <h2 className="card-title">E-Commerce</h2>
                <div className="dash"></div>
                <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
            </div>
        </div>
    </div>
</div>

  )
}

export default feature
