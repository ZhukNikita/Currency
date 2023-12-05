import usdPhoto from "../images/usa.jpg";
import eurPhoto from "../images/euro.png";
import "../App.css";

const CurrentCourse = ({ data }) => {
    return (
        <div>
            <h1>
                Aктуальный курс валют (USD, EUR) по отношению к гривне (UAH)
            </h1>
            {!data ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <div>
                        <h2>
                            1{" "}
                            <img
                                src={usdPhoto}
                                width="40"
                                height="22"
                                alt="$"
                            />{" "}
                            = {data.usdRate} UAH
                        </h2>
                    </div>
                    <h2>
                        1 <img src={eurPhoto} width="40" height="22" alt="$" />{" "}
                        = {data.eurRate} UAH
                    </h2>
                </div>
            )}
        </div>
    );
};

export default CurrentCourse;
