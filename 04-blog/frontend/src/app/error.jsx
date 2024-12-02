"use client";

import { ArrowPathIcon } from "@heroicons/react/24/outline";

function Error({ error, reset }) {
    return (
        <div className="container xl:max-w-screen-xl">
            <div className="flex justify-center pt-10">
                <div>
                    <p className="text-xl font-bold text-red-500 mb-8">{error.message}</p>
                    <button
                        onClick={reset}
                        className="flex items-center gap-x-2 text-secondary-500"
                    >
                        <ArrowPathIcon className="w-6 h-6 text-primary-900" />
                        <span>تلاش مجدد</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Error;
