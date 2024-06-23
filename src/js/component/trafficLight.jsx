import React, { useState } from "react";

const TrafficLight = () => {

    const [ red, setRed] = useState(true)
    const [ yellow, setYellow] = useState(false)
    const [ green, setGreen] = useState(false)

    function setColor(color) {
        if (color === "green" ) {
            setGreen(true)
            setRed(false)
            setYellow(false)
            
        };

        if (color === "yellow") {
            setYellow(true)
            setGreen(false)
            setRed(false)
        };

        if (color === "red"){
            setRed(true)
            setGreen(false)
            setYellow(false)
        };
        
    };

function changeColor() {

    if (green === true){
        setColor("red")
    };
    if (red === true){
        setColor("yellow")
    };
    if (yellow === true){
        setColor("green")
    }    
};



	return (
		<div className="container vh-100 d-flex align-items-center flex-column">
            <div className="palito bg-dark">
            </div>
            <div className="cuerpo p-0 bg-dark d-flex justify-content-center align-items-center flex-column rounded-3">
                <div>
                    <button onClick={() => setColor("red")}  className={`btn btn-danger rojo mb-3 rounded-circle ${!red && "opacity-25"}`}></button>
                </div>
                <div>
                    <button onClick={() => setColor("yellow")} className={`btn btn-warning amarillo mb-3 rounded-circle ${!yellow && "opacity-25"}`}></button>
                </div>
                <div>
                    <button onClick={() => setColor("green")} className={`btn btn-success verde mb-1 rounded-circle ${!green && "opacity-25"}`}></button>
                </div>
            </div>
            <div className="d-flex justif-content-center">
                <button onClick={() => changeColor()} itemType="button" className="btn btn-primary btn-circle mt-5">Change Color</button>
            </div>
		</div>
	);
};

export default TrafficLight;

/*1234*/