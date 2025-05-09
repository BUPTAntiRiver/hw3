import { useState, useEffect } from "react";
import FeaturedItem from "./FeaturedItem";

export default function BadgerMart(props) {

    const [feature, setFeature] = useState();
    

    useEffect(() => {
        // TODO I should fetch and setFeature here!
        fetch("https://cs571.org/rest/s25/hw3/featured-item", {
            headers: {"X-CS571-ID": "bid_0dc79fe52f6a30a5bfdd920f25f4b01da3803f43cce3d87dfb17406e23676d1a"} 
        })
        .then(response => response.json())
        .then(data => {
            setFeature(data);
            console.log(data);
        })
    }, []);

    return <div>
        <h1>Welcome to BadgerMart!</h1>
        <div style={{maxWidth: "40rem", margin: "auto", textWrap: "pretty"}}>
            <p>BadgerMart, located at the heart of the UW-Madison campus, is the go-to grocery store for students, faculty, and staff. Offering a wide range of products, including fresh produce, dairy, bakery items, meat, seafood, and pantry essentials, BadgerMart ensures that the university community has access to everything they need. With exclusive student discounts, convenient online ordering, and meal kits designed for busy schedules, shopping at BadgerMart is both affordable and effortless.</p>
        </div>
        <h2>Today's Special</h2>
        {feature ? <FeaturedItem {...feature}/> : <p>Today's feature is still loading...</p>}  
    </div>
}