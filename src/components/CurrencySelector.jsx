import React, { useEffect, useState } from "react";
import { InputNumber, Select, Space } from "antd";
import "../App.css";

const { Option } = Select;

const CurrencySelector = ({ data }) => {
    const [firstSelector, setFirstSelector] = useState(0);
    const [secondSelector, setSecondSelector] = useState(0);
    const [firstInput, setFirstInput] = useState("");
    const [secondInput, setSecondInput] = useState("");

    function firstSelectorHandler(value) {
        setFirstSelector(value);
    }

    function secondSelectorHandler(value) {
        setSecondSelector(value);
    }
    useEffect(()=>{
        if(data[0].rate !=='loading...'){
            setFirstSelector(data.find(el=>el.cc === 'USD').rate)
            setSecondSelector(data.find(el=>el.cc === 'EUR').rate)
        }
    },[data])
    function firstInputHandler(value) {
        setFirstInput(value);
        setSecondInput((+value*firstSelector/secondSelector).toFixed(2))

    }

    function secondInputHandler(value) {
        setSecondInput(value);
        setFirstInput((+value*secondSelector/firstSelector).toFixed(2))
    }



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
                            style={{ width: 200 }}
                        >
                            {
                                data.map(el=>(
                                    <Option width={200} key={el.r030} value={el.rate}>{el.txt}</Option>
                                ))
                            }
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
                            style={{ width: 200 }}
                        >
                            {
                                data.map(el=>(
                                    <Option width={200} key={el.r030} value={el.rate}>{el.txt}</Option>
                                ))
                            }
                        </Select>
                    }
                />
            </Space>
        </div>
    );
};

export default CurrencySelector;
