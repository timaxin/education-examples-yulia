import {planetsAPI} from "../utils/constants";
import { useEffect, useState } from "react";

const Contact = () => {

    const [planets, setPlanets] = useState<string[] | undefined>();
    
    useEffect(() => {
        fetch(planetsAPI)
        .then(response => response.json())
        .then(json => {
            const planetNames = json?.map((planet: Record<string, string | number>) => planet.name)
            .sort((a: string, b: string) => a.localeCompare(b));
            setPlanets(planetNames);
        })
        .catch(error => console.log(error));
    }, []);
    
    return (
        <div className="contact">
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="planet">Planet</label>
                <select id="planet" name="planet">
                    {planets?.map((planet: string) => <option key={planet} value={planet}>{planet}</option>)}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

                <input type="submit" value="Submit"/>

            </form>
        </div>
    );
};

export default Contact;