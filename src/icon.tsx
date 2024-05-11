import React from 'react';
import {ImageResponse} from "next/og";
export const runtime = "edge";

export const size={
    width:32,
    height:32
}
const Icon = () => {
    return new ImageResponse(
        <div style={size}>
            A
        </div>
    );
};

export default Icon;