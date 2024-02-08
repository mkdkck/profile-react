import { useState } from "react";

export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>

            <form id="contact" className="mt-3">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input className="form-control" id="name" placeholder="Your name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">email</label>
                    <input className="form-control" id="email" placeholder="contact email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea className="form-control" id="contactBody" rows="5" placeholder="type here"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}