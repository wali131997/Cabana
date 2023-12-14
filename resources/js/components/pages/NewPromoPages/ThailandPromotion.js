import React from 'react';
import "./components/newPromoPage.css"
const ThailandPromotion = () => {
    return (
        <div>
            <div className="newPromoBg" style={{ backgroundImage: "url('/assets/images/booster-bonus.png')", height: '700px' }}>
                <div>
                    <div className='title'><span className='titleLg'> 100% Welcome Bonus To Thailand</span></div>
                    <div style={{ fontSize: '22px' }} className='title title2'>
</div>
                    <button className='btn  btn-danger btn-lg rounded mt-3' style={{ backgroundColor: '#A2237E' }} onClick={() => { window.open('https://secure.cabanacapitals.com/register/', '_self') }}>Get Started</button>
                    {/* <a href="/bonus-terms"> <div className='text'>*Terms and conditions apply</div></a> */}
                </div>
            </div>
            <div className='container fifty_per_page'>
                <div className='row mt-5'>
                    <div className='col-md-12'>
                        <h4 className='text-bold title title2 text-center text-dark'>CLAIM YOUR  BONUS IN 3 EASY STEPS</h4>
                        <div className='row mt-5'>
                            <div className='col-md-4 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/verified-account.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Register with Cabana Capitals Premium Bonus Account
</h4>
                            </div>
                            <div className='col-md-4 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/deposit.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Make a Minimum Deposit of $100 (USD)</h4>
                            </div>
                            {/* <div className='col-md-3 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/save-money.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}> Request Bonus</h4>
                            </div> */}
                            <div className='col-md-4 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/money.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Receive  Bonus in your account</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 '>
                <img src='/assets/images/dollar-bonus.png' style={{ width: '100%' }}></img>
            </div>

        </div>
    );
};

export default ThailandPromotion;
