import React, { useState } from 'react';

const Card = (props) => {

    const [model, setModel] = useState(false)

    const toggleModel = () => {
        setModel(!model)
    }

    // <Card key={index} image={val.image} date={val.date} title_one={val.title_one} desc_one={val.desc_one} title_two={val.title_two} desc_two={val.desc_two} title_three={val.title_three} desc_three={val.desc_three} />

  return (
    <>
        <div className='box btn_shadow'>
            <div className='img'>
                <img src={props.image} alt='' onClick={toggleModel} />
            </div>
            <div className='category d_flex'>
                <span onClick={toggleModel} > {props.date} </span>
            </div>

            <div className='title'>
                <h2 onClick={toggleModel} > {props.title_one} </h2>
                <a href='#popup' className='arrow' onClick={toggleModel} >
                    <i className='fas fa-arrow-right'></i>
                </a>
            </div>
        </div>

        {/* ---------- POPUP MODEL --------- */}
        {model && (
            <div className='model model-blog'>
                <div onClick={toggleModel} className='overlay'></div>
                <div className='model-content'>
                    <div className='model-img left'>
                        <img src={props.image} alt='' />
                    </div>
                    <div className='model-text right'>
                        <span>{props.date}</span>
                        <h1>{props.title_one}</h1>
                        <p> {props.desc_one} </p>

                        <h1>{props.title_two}</h1>
                        <p> {props.desc_two} </p>

                        <h1>{props.title_three}</h1>
                        <p> {props.desc_three} </p>

                        <button className='close-model btn_shadow' onClick={toggleModel}>
                            <i className='fas fa-times'></i>
                        </button>

                        <div className='contact mtop'>
                          <h1>Leave a Reply</h1>

                          <form className='blog_contact d_flex'>
                            <div className='left'>
                              <input type='text' placeholder='Name' />
                              <input type='text' placeholder='Email' />
                              <input type='text' placeholder='Website' />
                              <button className='btn_shadow'>SUBMIT NOW</button>
                            </div>
                            <div className='right'>
                              <textarea cols='30' rows='12' placeholder='Comment'></textarea>
                            </div>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default Card;