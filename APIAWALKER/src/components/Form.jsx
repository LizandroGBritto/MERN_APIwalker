import SearchInput from "./SearchInput";
import IdInput from "./IdInput";
import Select from "./Select";
import Card from "./Card";
import { useState } from "react";


const Form = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch =  async() => {
        if (selectedOption && inputValue) {
            try {
                const response = await fetch(`https://swapi.py4e.com/api/${selectedOption}/${inputValue}`);
                if (!response.ok) {
                    throw new Error('No se pudo obtener los datos');
                }
                const data = await response.json();
                setApiData(data);
                setError(null);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            }
        }

    }
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    }
    return(
        <>
        <div className="container text-center mt-5">
            <div className="row justify-content-md-center">

                <div className="col-md-auto">
                    <Select OptionChange={handleOptionChange} />
                </div>
                <div className="col-md-auto">
                    <IdInput setInputValue={setInputValue} />
                </div>
                <div className="col-md-auto">
                    <SearchInput onSearch={handleSearch} />
                </div>
            </div>
        </div>
        <Card data={apiData} error={error} />


    </>
    )
}

export default Form;
