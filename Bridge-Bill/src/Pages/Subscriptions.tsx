import React from 'react'
import '/home/avanish/code/ConvergentCloneCode/Convergent-Health-Hospital2.0/Bridge-Bill/src/CompenentsCSS/Subscriptions.css'
import { useLocation } from "react-router-dom";


function PricingPlans() {

  
  const location = useLocation();
  const backgroundClass = location.pathname === '/Subscriptions' ? 'body-otherpages' : 'body-otherpages';



  const handleBasicClick = () => {
    fetch('http://localhost:8080/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: [
                { id: 1, quantity: 1},
            ]
        })
    }).then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject
        (json))
    }).then(({ url }) => {
        console.log(url)
        window.location = url
    }).catch(e => {
        console.error(e.error)
    })
  }

  const handleAdvancedClick = () => {
    fetch('http://localhost:8080/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: [
                { id: 2, quantity: 1}
            ]
        })
    }).then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject
        (json))
    }).then(({ url }) => {
        console.log(url)
        window.location = url
    }).catch(e => {
        console.error(e.error)
    })
  };

  const handlePremiumClick = () => {
    fetch('http://localhost:8080/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: [
                { id: 3, quantity: 1}
            ]
        })
    }).then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject
        (json))
    }).then(({ url }) => {
        console.log(url)
        window.location = url
    }).catch(e => {
        console.error(e.error)
    })
  };

  return (
    // <div className={backgroundClass} style={{ minHeight: '95vh', minWidth: '200vh' }}>
      <div className="container">
        <h1 className="heading">
          Plans
        </h1>
        
        <section className="pricing-plans">
          {/* <!-- Basic Plan --> */}
          <div className="plan basic">
            <h2 className="plan-title-b">Basic</h2>
            <p className="plan-price-b">$2.99</p>
            <p className="plan-feature-b">
            <span className="status-icon check">✔</span> ONE medical bill upload and analysis.
            </p>
            <p className="plan-feature-b2"> <span className="status-icon check">✔</span> UNLIMITED language translations</p>
            <button className="plan-button" onClick={handleBasicClick}>Buy Basic</button>
          </div>
          {/* <!-- Advanced Plan --> */}
          <div className="plan advanced">
            <h2 className="plan-title-a">Advanced</h2>
            <p className="plan-price-a">$5.99</p>
            <p className="plan-feature-b"><span className="status-icon check">✔</span> THREE medical bill uploads and analysis.</p>
            <p className="plan-feature-b2"><span className="status-icon check">✔</span>  UNLIMITED language translations</p>
            <button className="plan-button" onClick={handleAdvancedClick}>Buy Advanced</button>
          </div>
          {/* <!-- Premium Plan --> */}
          <div className="plan premium">
            <h2 className="plan-title-p">Premium</h2>
            <p className="plan-price-p">$9.99</p>
            <p className="plan-feature-b3"><span className="status-icon check">✔</span> UNLIMITED medical bill uploads and analysis for one yr.</p>
            <p className="plan-feature-b2"><span className="status-icon check">✔</span> UNLIMITED language translations</p>
            <button className="plan-button-p" onClick={handlePremiumClick}>Buy Premium</button>
          </div>
        </section>
      </div>
    // </div>
  );
}

export default PricingPlans;
