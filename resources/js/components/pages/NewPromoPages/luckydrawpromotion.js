import React from 'react';
import "./components/newPromoPage.css";

const luckydrawpromotion = () => {
    return (
        <div>
            <div className="newPromoBg" style={{ backgroundImage: "url('/assets/images/luckydrawbanner.jpg')", height: '500px' }}>
                <div>
                    <div className='title'><span className='titleLg'>Introducing the Cabana Capitals Lucky Draw Promotion</span></div>
                    <div className='title title2'>Your Path to Winning Rewards</div>
                    <button onClick={() => { window.open('https://secure.cabanacapitals.com/login/', '_self') }} className="btn download_mmt4">GET STARTED</button>
                </div>
            </div>
            <div className='container'>
                <div className='text-center mt4title'>Introduction to Weekly Lucky Draw Promotion</div>
                <p>Cabana Capitals is thrilled to introduce the Multi Layered Lucky Draw Promotion, an exciting opportunity for our valued clients to win incredible prizes as per different levels of qualification, while continuing their trading journey. Whether you’re dreaming of owning the latest iPhone 16 Pro Max, the powerful Redmi Note 13 Pro, or enjoying an unforgettable Dubai / Thailand Tour, this promotion is your chance to turn your deposits into rewards!</p>
                <h4>How It Works</h4>
                <p>By simply depositing the minimum qualification amount for the level you chose to participate into your trading account, and trade the required volume to qualify for a chance to participate in our Lucky draws. With every deposit, your chances of winning grows, there’s no limit to how many entries you can have, every deposit you make will give you an extra chance to have more entries in the Lucky Draw.</p>
                <p>At Cabana Capitals, we believe in rewarding our loyal traders with more than just world-class trading conditions. This promotion is our way of saying thank you for choosing us as your trusted trading partner. Don’t miss out—deposit today and make your trading experience even more rewarding!</p>
                <h4>Deposit More, Win More!</h4>
                <p>With the Cabana Capitals Lucky Draw, your trading journey is not only rewarding but also filled with opportunities to win exciting prizes. Don't miss your chance to boost your trading success and enjoy the rewards. Start trading with Cabana Capitals today and let your lots lead you to big prizes!</p>
                <h4>Your rewards await—start depositing and start winning</h4>
                <h4>Lucky Draw Terms and Conditions:</h4>
                <p>Unleash Your Trading Potential and Win Big with Cabana Capitals</p>
                <p>Cabana Capitals is excited to announce the Lucky Draw Promotion, designed to reward our clients for their loyalty and deposits. With this exciting promotion, you have the chance to win extraordinary prizes like the iPhone 16 Pro Max, MI Note 13 Pro, or even a luxurious Dubai Tour and much more. Every deposit gets you an entry into the lucky draw, and there’s no limit to the number of entries you can earn.</p>
                <h4>1. Promotion Period</h4>
                <p>The Lucky Draw Promotion starts November 25, 2024, and will continue every until further notice.</p>
                <h4>2. Eligibility</h4>
                <ul>
                    <li>Be existing or new clients with a live trading account at Cabana Capitals.</li>
                    <li>If you are a new client you can register with Cabana Capitals using following link <a href="https://secure.cabanacapitals.com/links/go/26619">https://secure.cabanacapitals.com/links/go/26619</a></li>
                    <li>Complete profile verification, including submitting required documents and a live selfie with ID.</li>
                    <li>During the promotion make a deposit as per the Lucky Draw Level you want to participate into your Cabana Capitals trading account to qualify.</li>
                    <li>Trade the required volume (any trade which is open for less than 2 minutes will not be considered as a qualified lot).</li>
                    <li>Each deposit counts as one entry into the weekly draw.</li>
                    <li>There’s no limit to the number of entries you can accumulate, the more you deposit, the greater your chances of winning!</li>
                </ul>
                <h4>3. Lucky Draw Qualification Levels & Prizes:</h4>
                <table className='table table-danger table-striped text-center table-sm'>
                    <thead>
                        <tr>
                            <th>Category Levels</th>
                            <th>DRAW Duration</th>
                            <th>Minimum Deposit</th>
                            <th>Minimum Volume</th>
                            <th>Prize Details</th>
                            <th># of Gifts</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Level 1</td>
                            <td>Weekly</td>
                            <td>$300</td>
                            <td>2 Lots</td>
                            <td>Redmi Note 13 Pro</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Level 2</td>
                            <td>Monthly</td>
                            <td>$1000</td>
                            <td>5 Lots</td>
                            <td>iPhone 16 Pro Max</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Level 3</td>
                            <td>Monthly</td>
                            <td>$2000</td>
                            <td>10 Lots</td>
                            <td>Dubai/Thailand Tour</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Level 4</td>
                            <td>Quarterly</td>
                            <td>$10000</td>
                            <td>50 Lots</td>
                            <td>Honda City</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
                <h4>4. Winner Selection and Prize Distribution</h4>
                <ul>
                    <li>Winners will be chosen randomly from all eligible entries.</li>
                    <li>Weekly Lucky Draw will be held every Monday 6:00 PM</li>
                    <li>Monthly Lucky Draw will be held on the 1st Friday of the following month</li>
                    <li>Quarterly Lucky Draw will be held on 1st Friday of the next quarter.</li>
                    <li>Winner will be informed within 24 hours of Draw</li>
                    <li>Prizes will be distributed within 15 business days after the draw</li>
                    <li>Winner will be responsible for all applicable duties or taxes</li>
                </ul>
                <h4>5. General Terms and Conditions</h4>
                <ul>
                    <li>Cabana Capitals retains the right to:
                        <ul>
                            <li>Modify or cancel the Promotion at any time without prior notice.</li>
                            <li>Disqualify any Participant who violates these Terms or engages in fraudulent or unethical trading practices.</li>
                        </ul>
                    </li>
                    <li>Prohibited Activities:
                        <ul>
                            <li>Engaging in hedging trading positions, internally or externally, to avoid market risk is strictly prohibited.</li>
                            <li>Any form of arbitrage, abuse, fraud, manipulation, cash-back arbitrage, or deceitful or fraudulent activity will lead to the nullification of the Promotion and the associated trading accounts along with any transactions or profit gained therein.</li>
                            <li>Prohibited trading techniques, such as "arbitrage trading," "picking/sniping," the use of certain automated trading systems or "Expert Advisors," and abusive trading strategies aimed at riskless profit, are strictly forbidden. These activities include opening opposite orders at same time or within 2 minutes of each order, opening opposite orders particularly during volatile market conditions, news announcements, opening gaps, or when the underlying instrument is suspended or restricted on a particular market, between the same or different trading accounts.</li>
                        </ul>
                    </li>
                    <li>Consequences of Prohibited Activities:
                        <ul>
                            <li>If Cabana Capitals determines that a client has engaged in prohibited activities, it may take various actions at its sole discretion, including but may not limited to:
                                <ul>
                                    <li>Closing the Client’s account.</li>
                                    <li>Suspend the Client’s account indefinitely.</li>
                                    <li>Conducting investigations.</li>
                                    <li>Imposing penalty fee on the client equal to or greater than the amount of money gained from using prohibited techniques.</li>
                                    <li>Close the account, confiscate profits resulting from prohibited trading techniques, and return the original deposit(s) to the account holder. If profits arising from Prohibited Trading have already been withdrawn, the Company may confiscate profits from the Client's related accounts to make up for the difference.</li>
                                    <li>Verify the eligibility of Participants at any stage of the Promotion.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <h4>6. Disqualification and Decisions:</h4>
                <ul>
                    <li>Cabana Capitals reserves the right to disqualify any user suspected of misusing or abusing the fair rules of the Promotion. Any situation not described in these rules shall be subject to the Company's decision.</li>
                    <li>If the Promotion is cancelled, it cannot be reinstated.</li>
                </ul>
                <h4>7. Withdrawal</h4>
                <ul>
                    <li>During the active promotion period If you withdraw any of your own deposited funds after activating the Promotion, the Promotion will be cancelled. However, you are allowed to withdraw profits from your trading activities at any time.</li>
                    <li>To withdraw profits, your withdrawable balance must always be greater than your deposited balance according to the formula: Balance ± Floating - Margin Required = Withdrawable Balance.</li>
                </ul>
                <h4>8. Modification or Cancellation:</h4>
                <ul>
                    <li>Cabana Capitals reserves the right to change, update, or cancel this Promotion at any time without prior notification. Such changes may include, but are not limited to, modifying the eligibility criteria, rewards, duration, or any other aspect of the Promotion.</li>
                    <li>Any modifications or cancellations will be at the sole discretion of Cabana Capitals, and participants will not be entitled to any compensation or claim in such cases.</li>
                </ul>
                <h4>9. Use of Information:</h4>
                <ul>
                    <li>By participating in the Promotion, you acknowledge and agree that the information provided during the registration process may be used by Cabana Capitals for marketing purposes.</li>
                    <li>By participating in the “Weekly Lucky Draw”, Participants acknowledge that they have read, understood, and agreed to these Terms and Conditions.</li>
                    <li>It is your responsibility to review these Terms and any updates or changes made by Cabana Capitals.</li>
                    <li>Failure to adhere to these Terms may result in disqualification from the Promotion and the forfeiture of any rewards or benefits associated with it.</li>
                </ul>
                <p>Please note that the above Terms and Conditions are for reference purposes and should be reviewed by legal professionals to ensure compliance with all applicable laws and regulations.</p>
            </div>
        </div>
    );
};

export default luckydrawpromotion;
