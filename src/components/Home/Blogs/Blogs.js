import React from 'react';
import wilson from '../../../images/wilson.png'
import ema from '../../../images/ema.png'
import eliza from '../../../images/eliza.png'
import quote from '../../../images/quote.png'
import BlogDescription from '../BlogDescription/BlogDescription';
const blogData = [
    {
        quote: "orem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis odit error natus aliquam repellendus labore voluptates",
        quoteTitle: "Check at least a doctor in a year for your teeth.",
        name: "Wilson Harry",
        date: "28 April 2019",
        img: wilson
    },
    {
        quote: "orem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis odit error natus aliquam repellendus labore voluptates",
        quoteTitle: "2 times of brush in a day can keep you healthy.",
        name: "Ema Gomez",
        date: "28 April 2019",
        img: ema
    },
    {
        quote: "orem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis odit error natus aliquam repellendus labore voluptates",
        quoteTitle: "The tooth cancer is taking a challenge",
        name: "Aliza Farari",
        date: "28 April 2019",
        img: eliza
    }
]

const Blogs = () => {
    return (
        <section className="blogs my-5 py-5">
            <div className="container">
                <div className="section-header d-flex justify-content-center">
                    <div className="text-center">
                        <h5 className="text-primary text-uppercase">our blog</h5>
                        <h1>From Our Blog News</h1>
                    </div>
                </div>
                <div className="card-deck mt-5 row">
                    {
                        blogData.map(blog=> <BlogDescription blog={blog}></BlogDescription>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;