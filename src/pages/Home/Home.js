import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";

const Home=()=>{
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
            {/* Main Body Layout */}
            <main className="py-10">
            <MainLayout />
            </main>
            </div>
        </div>
    )
}

export default Home;