import React from "react";
import { useAmp } from 'next/amp'
import Layout from "../components/layout";

export const config = { amp: 'hybrid' }

const Testss = (props) => {

    const isAmp = useAmp()
    return (
        <Layout>
            {isAmp ? (
                <div style={{ background: "red", height: "50px", padding: "100px" }}>
                    this is AMP
                </div>
            ) : (
                <div style={{ background: "blue", height: "50px", padding: "100px" }}>
                    NOT AMP
                </div>
            )}
        </Layout>
    )
}

export default Testss;