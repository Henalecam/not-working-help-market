import React from "react";
import './popup.css'

const Popup = () => {
    return (
        <div>
            <header className="bg-gray-600 text-center justify-center" >
                <h1 className="text-3xl text-orange-600 bg-gray-900 w-6/12 rounded-s-3xl rounded-md border-dotted border-orange-600">Help Market</h1>
            </header>
            <main>
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <p className="text-2xl text-orange-500 bg-gray-500 w-full">Your web shopping cart.</p>
                        <p className="text-2xl text-black-600">You can post a request for help or offer help to others.</p>
                        <p className="text-2xl text-black-600">You can also search for help requests or offers.</p>
                    </div>
                </div>

            </main>

        </div>
    )
};

export default Popup;