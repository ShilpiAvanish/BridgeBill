require('dotenv').config()

const express = require('express')
const { restart } = require('nodemon')
const app = express()
const cors = require('cors')
app.use(cors({
    origin: "http://localhost:5173",
}))

app.use(express.json())

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
    [1, { priceInCents: 299, name: "Basic Plan"}],
    [2, { priceInCents: 599, name: "Advanced Plan"}],
    [3, { priceInCents: 999, name: "Premium Plan"}],
])

app.post('/create-checkout-session', async (req, res) => {
    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id)
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name
                        },
                        unit_amount: storeItem.priceInCents
                    },
                    quantity: item.quantity
                }
            }),
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/Analysis`,
            cancel_url: `${process.env.CLIENT_URL}/Subscriptions`
        })
        res.json({ url: session.url })
    } catch(e){
        res.status(500).json({ error: e.message})
    }
    
})

app.listen(8080)