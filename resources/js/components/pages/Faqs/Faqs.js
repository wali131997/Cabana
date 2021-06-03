import React, { Component } from 'react';
class Faq extends Component {
    constructor(props) {
        super(props);
        this.state={
            faqs:[
                {
                    question:'How do I Sign Up?',
                    answer:`Click the Sign Up button and fill up the Registration Form to open your first account. Fill in all the required information and click "Open account", or simply sign up with your Google account.
                    Check your email for a message titled "Confirm your email address" and click the button "Confirm email" and you will be redirected to our site.
                    Fill in all the required information and click "Continue", then select the trading platform: MT4 & MT5. .`,
                    state:false,
                },
                 {
                    question:'	What types of accounts do you offer?',
                    answer:`Cabana Capitals offers a wide range of trading accounts suitable for any trading strategy and
                    any level of your trading experience. Both real and demo accounts are available on two trading platforms –
                    MetaTrader 4 and MetaTrader 5. You can compare accounts and chose the one fitting your individual requirements `,
                    state:false,
                },
                ,
                 {
                    question:'	Do you offer demo accounts?',
                    answer:`Cabana Capitals offer four type of demo accounts which are mirror to live accounts of Standard, Premium, Elite and Raw ECN. You can choose to start with any of the demo accounts to develop your trading skills.`,
                    state:false,
                },
                ,
                 {
                    question:'	Can I run several accounts simultaneously?',
                    answer:`Yes, you can. You can log into to several MT4/MT5 accounts simultaneously if you install several instances of MT4/MT5`,
                    state:false,
                },
                ,
                 {
                    question:'	Is my personal information safe with you? How do you protect my personal information?',
                    answer:`We use highly secure technology to protect your personal data and financial transactions. Your Personal Area is SSL-secured and protected with 128-bit encryption to make your browsing safe and your data inaccessible to any third parties. You can read more about data protection in our Privacy Policy.`,
                    state:false,
                },
                ,
                //  {
                //     question:'How do I care for my mattress?',
                //     answer:`We use highly secure technology to protect your personal data and financial transactions. Your Personal Area is SSL-secured and protected with 128-bit encryption to make your browsing safe and your data inaccessible to any third parties. You can read more about data protection in our Privacy Policy.`,
                //     state:false,
                // },
            ]
        }
    }
    change_faq_state(ind){
        let temp_arr = this.state.faqs;
        temp_arr.map((data,index)=>{
            if(index == ind){
                data.state = ! data.state;
            }
        })

        this.setState({
            faqs:temp_arr
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="atitle text-center" style={{paddingTop:'120px'}}>FAQ's</h1>
                    {
                        this.state.faqs.map((data,index)=>{
                            return(
                                <div className="card mt-2">
                            <h4 onClick={this.change_faq_state.bind(this,index)} className="  card-title card_title_bg">{data.question}
                            <span style={{float:'right'}}>  <i className={data.state ? "fas fa-chevron-up" : "fas fa-chevron-down"} ></i></span></h4>
                                {
                                    data.state?
                                    <div className="card-body">
                                        <h6 className="card-body-text">
                                            {data.answer}
                                        </h6>
                                    </div>:null
                                }
                            </div>
                            )
                        })
                    }

                </div>
                <div className="mt-5">
                    </div>
            </div>

        );
    }
}

export default Faq;
