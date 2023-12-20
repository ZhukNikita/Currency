import React, { useEffect, useState } from "react";
import { InputNumber, Select, Space } from "antd";
import "../App.css";

const { Option } = Select;

const CurrencySelector = ({ data }) => {
    console.log(data);
    const usd = data[0].rate;
    const eur = data[1].rate;
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
        // updateSecondInput(value, firstSelector);
        // Можно сделать код без использования хука useEffect, *
        // но добавить функцию например updateSecondInput(value, firstSelector) и добавить в неё логику математических операций
    }

    function secondInputHandler(value) {
        setSecondInput(value);
        // updateFirstInput(value, secondSelector);
    }

    // const updateFirstInput = (inputValue, selectorValue) => {
    //     if (selectorValue === "USD") {
    //         setSecondInput(inputValue * usd);
    //     } else if (selectorValue === "EUR") {
    //         setSecondInput(inputValue * eur);
    //     } else {
    //         setSecondInput(inputValue);
    //     }
    // };

    // const updateSecondInput = (inputValue, selectorValue) => {
    //     if (selectorValue === "USD") {
    //         setFirstInput(inputValue * usd);
    //     } else if (selectorValue === "EUR") {
    //         setFirstInput(inputValue * eur);
    //     } else {
    //         setFirstInput(inputValue);
    //     }
    // };

    //   Небольшие наброски оптимизации кода useEffect начинает обновлять друг друга чего небыло в прошлом коде и я тут запутался
    // useEffect(() => {
    //     if (firstSelector === "USD") {
    //         setSecondInput(firstInput * usd);
    //     } else if (firstSelector === "EUR") {
    //         setSecondInput(firstInput * eur);
    //     } else {
    //         setSecondInput(firstInput);
    //     }
    // }, [firstInput, firstSelector]);

    // useEffect(() => {
    //     if (secondSelector === "USD") {
    //         setFirstInput(secondInput * usd);
    //     } else if (secondSelector === "EUR") {
    //         setFirstInput(secondInput * eur);
    //     } else {
    //         setFirstInput(secondInput);
    //     }
    // }, [secondInput, secondSelector]);

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
