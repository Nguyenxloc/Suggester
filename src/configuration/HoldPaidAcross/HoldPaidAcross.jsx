import React, { useEffect, useState } from "react";

export default function HoldPaidAcross() {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (data.length == 0) {
            const data = [{ color: "color1", content: "Holdstation", percent: "61.7%" }, { color: "color1", content: "Holdstation", percent: "61.7%" },
            { color: "color1", content: "Holdstation", percent: "61.7%" }, { color: "color1", content: "Holdstation", percent: "61.7%" }];
            setData(data);
        }
    });
    return (
        <div className="bg-black7 text-white w-[1000px] h-[250px] flex rounded-4">
            <div className="w-[212px] h-[212px] ms-[70px] mb-[50px]" >
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div className="w-[600px] h-[70px] mt-[70px] ms-[50px]  grid grid-cols-2">
                    {data.map((item, index) => {
                        return (
                            <div className="ms-[20px] flex">
                                <div className="w-[12px] h-[12px] bg-purple rounded-[4px] mt-2"></div>
                                <p className="text-[18px] ms-1">{item.content}</p>
                                <p className="ms-5 text-[18px]">{item.percent}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}