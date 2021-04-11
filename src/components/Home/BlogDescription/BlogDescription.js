import React from 'react';
import './BlogDescription.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const BlogDescription = ({blog}) => {
    return (
        <div class="col-sm-4">
            <div class="card blogDescription" style={{boxShadow: '0px 1px 2px 1px lightgrey',padding: '3%',margin: '2% 3%'}}>
                <div className="d-flex p-4">
                    <div className="blogImg me-2">
                        <img style={{width:'70%'}} src={blog.img} alt="" className="img-fluid"/>
                    </div>
                    <div className="address">
                        <h5 className="fw-bold">{blog.name}</h5>
                        <small>{blog.date}</small>
                    </div>
                </div>
                <div class="mb-4 card-body">
                    <h5 style={{textAlign: 'justify'}}class="card-title">{blog.quoteTitle}</h5>
                    <p style={{textAlign: 'justify'}} class="card-text fs-5 text-secondary blogQuote">{blog.quote}</p>
                    <p className="arrow"><FontAwesomeIcon icon={faArrowRight} /></p>
                </div>              
            </div>
        </div>
    );
};

export default BlogDescription;