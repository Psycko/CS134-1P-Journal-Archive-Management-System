import { useState } from 'react';
import Sidebar from "../components/sidebar";

export default function Dashboard() {
    return (
        <>
        <div class="tw-flex">
            <div>
                <Sidebar /> 
            </div>
            <div>
                <h1>Hello</h1>
            </div>
        </div>
        </>
    )
}