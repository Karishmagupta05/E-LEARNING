import React from 'react'
import "./hero.css"
import Title from '../../common/title/Title'
const Hero = () => {
  return (
   <>
    <section className="hero">
        <div className="container">
            <div className="row">
            <Title subtitle='Welcome To Education Buddies ' title='Best Online Education'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate placeat quae, quia totam laborum illo, exercitationem quidem, veritatis repudiandae ipsum doloremque deserunt doloribus eveniet dolor odit omnis! Quod, illum magni!</p>
                <div className="button">
                    <button className='primary-btn'>
                      GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                    <button>
                      VIEW COURSE<i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
    <div className="marginn"></div>
   </>
  )
}

export default Hero