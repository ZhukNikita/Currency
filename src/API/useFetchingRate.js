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
                    setData(data);
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
