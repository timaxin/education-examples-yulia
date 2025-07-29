import type { AboutMeInfo } from "../utils/sw-types";
import type { FC } from "react";
import { databankAPI } from "../utils/constants";
import { useEffect, useState } from "react";

const AboutMe: FC = () => {

    const [aboutMe, setAboutMe] = useState<AboutMeInfo>();

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 964) + 1;
        const fullDatabankAPI = `${databankAPI}?page=${randomNumber}&limit=1`
        fetch(fullDatabankAPI)
        .then(response => response.json())
        .then(json => {
            const {name, description, image} = json.data[0];
            setAboutMe({name, description, image});
        })
        .catch(error => console.log(error));
    }, []);

    return (
        aboutMe && <div className="aboutMe">
            <div>Name: {aboutMe.name}</div>
            <div>Description: {aboutMe.description}</div>
            <img src={aboutMe.image} alt={aboutMe.name}/>
        </div>
    );
};

export default AboutMe;