import { useEffect, useState } from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";

function Home()
{
    /*
    box = jar moddhe blog er card gula rakbo, like 2d array
    setter = ekta function , je blog gula box e rakbe
    useState = initially empty...
    */
    const [box, setter] = useState([]);

    useEffect(() => {
        // data fetch kore box e boshabo
        fetch("https://jsonfakery.com/blogs")
            .then((res) => res.json())
            .then((data) => setter(data));
    }, []);         

    function single_card(x) {
        return (
            // single card gular html....
            x.map((element) => (
                <div className="border-0 shadow rounded-md p-5 hover:scale-105 duration-300 bg-slate-100 hover:bg-gray-50 hover:bg-slate-300">
                    <img className="h-100" src={element.featured_image}/>
                    <p className="text-xl">
                        <b>{element.title}</b>
                    </p>
                    <NavLink to={`/Home/${element.id}`}> 
                        <button className=" mt-3 px-5 py-2  rounded-md text-xl hover:scale-110 duration-300 bg-gray-800  text-gray-50">Read blog</button>
                    </NavLink>
                </div>
            ))
        );
    }

    return (
        <>
            <div className="grid grid-cols-3 gap-5 px-8  z-10 mt-20">
                {single_card(box.slice(0,10))}
            </div>
            
        </>
    );
}
export default Home;