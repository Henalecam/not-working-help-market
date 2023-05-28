import React from "react";
import './popup.css'

const Popup = () => {
    return (
        <div>
            <header>
                <h1 className="text-4xl text-green-500 text-center">Help Market</h1>
            </header>
            <main>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl text-green-500 text-center bg-gray-500">Help Market is a platform for people to help each other.</p>
                        <p className="text-2xl text-black-600 text-center">You can post a request for help or offer help to others.</p>
                        <p className="text-2xl text-black-600 text-center">You can also search for help requests or offers.</p>
                    </div>
                </div>

            </main>

        </div>
    )
};

export default Popup;