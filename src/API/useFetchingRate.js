import { useEffect, useState } from "react";

const useFetchingRate = (URL) => {
    const [data, setData] = useState([
        { rate: "loading..." },
        { rate: "loading..." },
    ]);

    useEffect(() => {
        const FetchData = async () => {
            await fetch(URL)
                .then((res) => res.json())
                .then((data) => {
                    setData([
                        {
                            rate: data
                                .find((usd) => usd.cc === "USD")
                                .rate.toFixed(2),
                            name: data.find((usd) => usd.cc === "USD").cc,
                        },
                        {
                            rate: data
                                .find((eur) => eur.cc === "EUR")
                                .rate.toFixed(2),
                            name: data.find((eur) => eur.cc === "EUR").cc,
                        },
                    ]);
                })
                .catch((error) => {
                    alert(error.message);
                });
        };
        FetchData();
    }, [URL]);
    return data;
};

export default useFetchingRate;
