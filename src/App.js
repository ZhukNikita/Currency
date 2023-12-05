import "./App.css";
import CurrencySelector from "./components/CurrencySelector";
import { useEffect, useState } from "react";
import CurrentCourse from "./components/CurrentCourse";

function App() {
    const [data, setData] = useState({});

    useEffect(() => {
        const FetchData = async () => {
            await fetch(
                "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
            )
                .then((res) => res.json())
                .then((data) => {
                    setData({
                        usdRate: data
                            .find((usd) => usd.cc === "USD")
                            .rate.toFixed(2),
                        eurRate: data
                            .find((eur) => eur.cc === "EUR")
                            .rate.toFixed(2),
                    });
                })
                .catch((error) => {
                    alert(error.message);
                });
        };
        FetchData();
    }, []);

    return (
        <div className="App container">
            <div className="translucent-box">
                <CurrentCourse data={data} />
                <CurrencySelector data={data} />
            </div>
        </div>
    );
}

export default App;
