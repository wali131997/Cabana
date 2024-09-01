import React from 'react';
import "./components/newPromoPage.css"
import { useFormik } from 'formik';
const SeminarFinantialFitness = () => {
    const { errors, values, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
            phone: ''
        },
        onSubmit: (values) => {
            console.log('Form submitted:', values);
            toast.success("form submitted.")
        },
        validate: (values) => {
            const errors = {};

            if (!values.name) {
                errors.name = 'Name field is required';
            }

            if (!values.email) {
                errors.email = 'Email field is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            //   if (!values.message) {
            //     errors.message = 'This field is required';
            //   }

            return errors;
        },
    });

    return (
        <div>
            <div>
                <img onClick={() => { window.open('https://secure.cabanacapitals.com/pages/47/', '_blank') }} className='mobileMargin' style={{ width: '100%', cursor: 'pointer' }} src='/assets/images/seminar/TopImage.jpg'></img>
            </div>
            <div className='container'>
                <div className='row mt-5'>
                    <a href='#speakers' className='col-md-4'>
                        <img style={{ width: '100%', height: '90%' }} src='/assets/images/seminar/Speakers.png'></img>
                    </a>
                    <a href='#why' className='col-md-4'>
                        <img style={{ width: '100%', height: '90%' }} src='/assets/images/seminar/Why.png'></img>
                    </a>
                    <a href='#agenda' className='col-md-4'>
                        <img style={{ width: '100%', height: '90%' }} src='/assets/images/seminar/Agenda.png'></img>
                    </a>
                </div>
            </div>
            <div style={{ backgroundImage: 'url(/assets/images/seminar/Register.jpg)', padding: '20px' }} className='mt-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 pt-5 text-light'>
                            <h1 className='title text-light text-bolder'>Lagos Seminar
                            </h1>
                            <h3> Saturday 21.09.2024 &
                                Sunday 22.09.2024
                                Cabana Capitals Lagos Office

                            </h3>
                            <h1>10 : 30 am <br />    <span className='text-center ml-5' >to</span>

                                <br />
                                12
                                : 30 am</h1>
                            <h3> 4th floor. 103 Mosesola House, Allen Avenue,
                                Ikeja Lagos</h3>
                        </div>
                        <div className='col-md-6 p-4 '>
                            <div className='card p-3'>
                                <div className='card-body'>
                                    <form onSubmit={handleSubmit} className='form' style={{ minWidth: '0' }}>
                                        <h1 class="title text-center mb-4">Reserve your spot today! </h1>
                                        <div class="form-group position-relative">

                                            <input onChange={handleChange} value={values.name} type="text" id="formName" name='name' class="form-control form-control-lg thick" placeholder="Name" />
                                            {touched.name && errors.name && <p className='text-danger mt-2'>{errors.name}</p>}
                                        </div>
                                        <div class="form-group position-relative">

                                            <input type="email" onChange={handleChange} value={values.email} name='email' id="formEmail" class="form-control form-control-lg thick" placeholder="E-mail" />
                                            {touched.email && errors.email && <p className='text-danger mt-2'>{errors.email}</p>}

                                        </div>
                                        <div class="form-group position-relative">

                                            <input type="phone" onChange={handleChange} value={values.phone} name='phone' id="formEmail" class="form-control form-control-lg thick" placeholder="Phone" />
                                            {touched.phone && errors.phone && <p className='text-danger mt-2'>{errors.phone}</p>}

                                        </div>
                                        <div class="form-group message">
                                            <textarea id="formMessage" onChange={handleChange} name='message' value={values.message} class="form-control form-control-lg" rows="7" placeholder="Message"></textarea>
                                        </div>
                                        <div>
                                            <input type='checkbox'></input> <span>I hereby consent to the collection, processing, and use of my personal
                                                data by Cabana Capitals for marketing purposes in accordance with
                                                the privacy policy.</span>
                                        </div>
                                        <div class="text-center mt-2">
                                            <button onClick={handleSubmit} type="submit" class="btn btnSubmitContactUs " tabIndex="-1">Send message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="speakers" className='container mt-5'>
                <h1 className='text-center'>Panel of <span className='title text-bold' style={{ color: '#500d55' }}>Speakers</span></h1>
                <div className='col-md-12 mt-5 card'>
                    <img style={{ width: '100%' }} src='/assets/images/seminar/speaker1.png'></img>
                </div>
                <div className='col-md-12 mt-4 card'>
                    <img style={{ width: '100%' }} src='/assets/images/seminar/speaker2.png'></img>
                </div>
            </div>

            <img id="why" style={{ width: '100%' }} src='/assets/images/seminar/agendabanner.png'></img>

            <div id="agenda" className='text-center'>
                <h1 className='text-center mt-5'>Agenda</h1>

                <img className='text-center mt-4 mb-5' style={{ width: '70%' }} src='/assets/images/seminar/AgendaDetails2.png'></img>
            </div>



        </div >
    );
};

export default SeminarFinantialFitness;
