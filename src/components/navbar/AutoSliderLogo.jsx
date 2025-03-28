import { useState, useEffect } from "react";
import Logo from "../../logo.jpeg";

const AutoSliderLogo = ({ loggedInUser }) => {
    console.log("loggedInUser1",loggedInUser);
    
    const defaultLogo = Logo;
    const userCompanyLogo = loggedInUser?.companyLogo;
    const [currentLogo, setCurrentLogo] = useState(defaultLogo);
    console.log("userCompanyLogo", userCompanyLogo);

    useEffect(() => {
        console.log("Auto-slider started...");

        const interval = setInterval(() => {
            setCurrentLogo((prevLogo) =>
                prevLogo === defaultLogo ? userCompanyLogo : defaultLogo
            );
            console.log("Switched logo:", currentLogo);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // Cleanup
    }, [userCompanyLogo]);

    return (
        <img
            src={currentLogo}
            alt="Company Logo"
            onError={(e) => (e.target.src = defaultLogo)} // Fallback if the image fails
            style={{
                // marginLeft: "5px",
                // marginTop: "-5px",
                maxWidth: "100px",
                maxHeight: "100px",
                width: "auto",
                height: "auto",
                content:'fill',
                transition: "opacity 0.5s ease-in-out",
              }}
              
        />
    );
};

export default AutoSliderLogo;
