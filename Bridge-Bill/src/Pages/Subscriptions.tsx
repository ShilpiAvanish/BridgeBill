import React from 'react'
import '/home/avanish/code/ConvergentCloneCode/Convergent-Health-Hospital2.0/Bridge-Bill/src/CompenentsCSS/Subscriptions.css'

function PricingPlans() {

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
    
    <div className="container">
      <h1 className="heading">
        Plans
      </h1>
      
      <section className="pricing-plans">
        {/* <!-- Basic Plan --> */}
        <div className="plan basic">
          <h2 className="plan-title">Basic</h2>
          <p className="plan-price">$2.99</p>
          <p className="plan-feature">ONE medical bill upload and analysis.</p>
          <p className="plan-feature">UNLIMITED language translations</p>
          <button className="plan-button" onClick={handleBasicClick}>Buy Basic</button>
        </div>
        {/* <!-- Advanced Plan --> */}
        <div className="plan advanced">
          <h2 className="plan-title">Advanced</h2>
          <p className="plan-price">$5.99</p>
          <p className="plan-feature">THREE medical bill uploads and analysis.</p>
          <p className="plan-feature">UNLIMITED language translations</p>
          <button className="plan-button" onClick={handleAdvancedClick}>Buy Advanced</button>
        </div>
        {/* <!-- Premium Plan --> */}
        <div className="plan premium">
          <h2 className="plan-title">Premium</h2>
          <p className="plan-price">$9.99</p>
          <p className="plan-feature">UNLIMITED medical bill uploads and analysis for one year.</p>
          <p className="plan-feature">UNLIMITED language translations</p>
          <button className="plan-button" onClick={handlePremiumClick}>Buy Premium</button>
        </div>
      </section>
    </div>
  );
}

export default PricingPlans;
