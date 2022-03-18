import React, { useState } from 'react';

const Card = (props) => {

    const [model, setModel] = useState(false)

    const toggleModel = () => {
        setModel(!model)
    }

  return (
    <>
        <div className='box btn_shadow'>
            <div className='img'>
                <img src={props.image} alt='' onClick={toggleModel} />
            </div>
            <div className='category d_flex'>
                <span onClick={toggleModel} > {props.category} </span>
                <label>
                    <i className='far fa-heart'></i>
                    {props.totalLike}
                </label>
            </div>

            <div className='title'>
                <h2 onClick={toggleModel} > {props.title} </h2>
                <a href='#popup' className='arrow' onClick={toggleModel} >
                    <i className='fas fa-arrow-right'></i>
                </a>
            </div>
        </div>

        {/* ---------- POPUP MODEL --------- */}
        {model && (
            <div className='model'>
                <div onClick={toggleModel} className='overlay'></div>
                <div className='model-content d_flex'>
                    <div className='model-img left'>
                        <img src={props.image} alt='' />
                    </div>
                    <div className='model-text right'>
                        <span>Featured - Design</span>
                        <p>Lorem Ipsum has been the, when an unknown printer took a gal type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>

                        <p>Lorem Ipsum has been the, when an unknown printer took a gal type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                        <div className='button f_flex mtop'>
                            <button className='btn_shadow'>
                                LIKE THIS <i className='far fa-thumbs-up'></i>
                            </button>
                            <button className='btn_shadow'>
                                VIEW PROJECT <i className='fas fa-chevron-right'></i>
                            </button>
                        </div>
                        <button className='close-model btn_shadow' onClick={toggleModel}>
                            <i className='fas fa-times'></i>
                        </button>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default Card;