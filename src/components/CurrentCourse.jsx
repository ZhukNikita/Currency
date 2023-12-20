import usdPhoto from "../images/usa.jpg";
import eurPhoto from "../images/euro.png";
import useFetchingRate from "../API/useFetchingRate";
import CurrencySelector from "./CurrencySelector";
import "../App.css";

const CurrentCourse = () => {
    const URL =
        "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
    const data = useFetchingRate(URL);

    if (!data) {
        <div>Loading...</div>;
    }
    const photos = { usdPhoto, eurPhoto };

    data[0].photo = photos.usdPhoto;
    data[1].photo = photos.eurPhoto;

    return (
        <div>
            <h1>
                Aктуальный курс валют (USD, EUR) по отношению к гривне (UAH)
            </h1>
            <div>
                {data.map((currency) => (
                    <h2>
                        1 <img src={currency.photo} width="40" height="22" /> ={" "}
                        {currency.rate} UAH
                    </h2>
                ))}
            </div>

            <CurrencySelector data={data} />
        </div>
    );
};

export default CurrentCourse;
