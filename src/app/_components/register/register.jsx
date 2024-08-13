import React from 'react';

function Register() {
    return (
        <div className="bg-green-50 hidden md:block text-center py-12 px-4 md:px-0 rounded-lg">
            <div className="max-w-2xl mx-auto">
                <h3 className="text-[#63B178] text-[12px] font-semibold mt-8 md:mt-12">
                    Drive Your Success with MyFastX
                </h3>
                <h1 className="text-[32px] font-semibold text-black mt-4">
                    Join Us as a Partner Driver
                </h1>
                <p className="text-gray-600 text-[12px] mt-6">
                    Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part of a dynamic network of drivers. 
                    With us, you&apos;ll enjoy flexible work hours, competitive earnings, and the satisfaction of delivering smiles across the city.
                </p>
                <button className="mt-8 bg-black text-white py-3 px-4 rounded-md text-[12px] font-medium">
                    Register now for just Rs. 999!
                </button>
            </div>
        </div>
    );
}

export default Register;