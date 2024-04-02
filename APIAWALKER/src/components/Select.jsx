import { useState, useEffect } from "react";

const Select = ({ OptionChange }) => {
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        fetch('https://swapi.py4e.com/api/')
            .then(response => response.json())
            .then(data => {
                const resourceNames = Object.keys(data);
                const resourceOptions = resourceNames.map((resource, index) => ({
                    value: index + 1,
                    label: resource
                }));

                setOptions(resourceOptions);
                setLoading(false);
            })
            .catch(error => console.error('Error:', error));
    }, []);
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        OptionChange(e.target.value);
    }
    return (
        <>
            <div className="mb-5 row">
                <label htmlFor="resource" className="col-sm-6 col-form-label">Select a Category:</label>
                <div className="col-sm-6">
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (

                        <select className="form-select" aria-label="Select a resource" value={selectedOption} onChange={handleOptionChange} required>
                            <option value="">Seleciona un elemento</option>
                            {options.map(option => (
                                <option key={option.value} value={option.label}>{option.label}</option>
                            ))}
                        </select>
                    )}
                </div>
            </div>
        </>
    )

}
export default Select;