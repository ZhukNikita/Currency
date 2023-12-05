import React, { useEffect, useState } from "react";
import { InputNumber, Select, Space } from "antd";
import "../App.css";

const { Option } = Select;

const CurrencySelector = ({ data }) => {
    const usd = data.usdRate;
    const eur = data.eurRate;
    const uah = 1;
    const [firstSelector, setFirstSelector] = useState("UAH");
    const [secondSelector, setSecondSelector] = useState("UAH");
    const [firstInput, setFirstInput] = useState("");
    const [secondInput, setSecondInput] = useState("");

    function firstSelectorHandler(value) {
        setFirstSelector(value);
    }

    function secondSelectorHandler(value) {
        setSecondSelector(value);
    }

    function firstInputHandler(value) {
        setFirstInput(value);
    }

    function secondInputHandler(value) {
        setSecondInput(value);
    }

    useEffect(() => {
        if (firstSelector === "UAH" && secondSelector === "UAH") {
            if (firstInput !== "") {
                setSecondInput(firstInput);
            }
        } else if (firstSelector === "USD" && secondSelector === "USD") {
            if (firstInput !== "") {
                setSecondInput(firstInput);
            }
        } else if (firstSelector === "EUR" && secondSelector === "EUR") {
            if (firstInput !== "") {
                setSecondInput(firstInput);
            }
        } else if (firstSelector === "UAH" && secondSelector === "USD") {
            if (firstInput !== "") {
                setSecondInput((firstInput / usd).toFixed(2));
            }
        } else if (firstSelector === "UAH" && secondSelector === "EUR") {
            if (firstInput !== "") {
                setSecondInput((firstInput / eur).toFixed(2));
            }
        } else if (firstSelector === "USD" && secondSelector === "UAH") {
            if (firstInput !== "") {
                setSecondInput((firstInput * usd).toFixed(2));
            }
        } else if (firstSelector === "USD" && secondSelector === "EUR") {
            if (firstInput !== "") {
                setSecondInput(((firstInput * usd) / eur).toFixed(2));
            }
        } else if (firstSelector === "EUR" && secondSelector === "UAH") {
            if (firstInput !== "") {
                setSecondInput(firstInput * eur);
            }
        } else if (firstSelector === "EUR" && secondSelector === "USD") {
            if (firstInput !== "") {
                setSecondInput(((firstInput * eur) / usd).toFixed(2));
            }
        }
    }, [firstInput, firstSelector]);

    useEffect(() => {
        if (secondSelector === "UAH" && firstSelector === "UAH") {
            if (secondInput !== "") {
                setFirstInput(secondInput);
            }
        } else if (secondSelector === "USD" && firstSelector === "USD") {
            if (secondInput !== "") {
                setFirstInput(secondInput);
            }
        } else if (secondSelector === "EUR" && firstSelector === "EUR") {
            if (secondInput !== "") {
                setFirstInput(secondInput);
            }
        } else if (secondSelector === "UAH" && firstSelector === "USD") {
            if (secondInput !== "") {
                setFirstInput((secondInput / usd).toFixed(2));
            }
        } else if (secondSelector === "UAH" && firstSelector === "EUR") {
            if (secondInput !== "") {
                setFirstInput((secondInput / eur).toFixed(2));
            }
        } else if (secondSelector === "USD" && firstSelector === "UAH") {
            if (firstInput !== "") {
                setFirstInput((secondInput * usd).toFixed(2));
            }
        } else if (secondSelector === "USD" && firstSelector === "EUR") {
            if (secondInput !== "") {
                setFirstInput(((secondInput * usd) / eur).toFixed(2));
            }
        } else if (secondSelector === "EUR" && firstSelector === "UAH") {
            if (secondInput !== "") {
                setFirstInput(secondInput * eur);
            }
        } else if (secondSelector === "EUR" && firstSelector === "USD") {
            if (secondInput !== "") {
                setFirstInput(((secondInput * eur) / usd).toFixed(2));
            }
        }
    }, [secondInput, secondSelector]);

    return (
        <div>
            <Space direction="vertical">
                <InputNumber
                    value={firstInput}
                    onChange={firstInputHandler}
                    placeholder="Введите кол-во валюты"
                    addonAfter={
                        <Select
                            className="selector"
                            value={firstSelector}
                            onChange={firstSelectorHandler}
                            style={{ width: 90 }}
                        >
                            <Option value="USD">$</Option>
                            <Option value="EUR">€</Option>
                            <Option value="UAH">₴</Option>
                        </Select>
                    }
                />
                <InputNumber
                    value={secondInput}
                    onChange={secondInputHandler}
                    placeholder="Введите кол-во валюты"
                    addonAfter={
                        <Select
                            className="selector"
                            value={secondSelector}
                            onChange={secondSelectorHandler}
                            style={{ width: 90 }}
                        >
                            <Option value="USD">$</Option>
                            <Option value="EUR">€</Option>
                            <Option value="UAH">₴</Option>
                        </Select>
                    }
                />
            </Space>
        </div>
    );
};

export default CurrencySelector;
