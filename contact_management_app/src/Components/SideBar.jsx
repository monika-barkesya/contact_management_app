import React from "react";
import { Link } from "react-router-dom";
import contactImage from '../utils/contact-book.png';
import barChartImage from '../utils/bar-chart.png';

export default function Sidebar() {
    return (
        <div className="flex border-r-2">
            <div className="flex flex-col h-screen p-3 bg-blue-600 shadow w-60 pt-16">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold mt-4">Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 text-sm space-y-1">
                            <li className="rounded-sm">
                                <Link
                                    to="/"
                                    className="flex items-center p-2 rounded-md space-x-3"
                                >
                                    <img src={contactImage} alt="Contact Icon" />
                                    <span className="font-bold">Contacts</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    to="/dashboard"
                                    className="flex items-center p-2 rounded-md space-x-3"
                                >
                                    <img src={barChartImage} alt="Bar Chart Icon" />
                                    <span className="font-bold">Charts And Maps</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
