import { useState } from "react";

function Contact() {
    const [isEmailVisible, setIsEmailVisible] = useState(false);

    function getEmailSection() {
        if (isEmailVisible) {
            return <h3>Email: Jbarnett@bookworms.com</h3>;
        } else {
            return <h5>Click the button to view email </h5>;
        }
    }
    function toggleEmail() {
        setIsEmailVisible(!isEmailVisible);
    }
    return (
        <div className="contact">
            <h1>Jim Barnett</h1>
            {getEmailSection()}
            <button onClick={toggleEmail} className="btn btn-sm btn-primary">
                Show Email
            </button>
        </div>
    );
}

export default Contact;
