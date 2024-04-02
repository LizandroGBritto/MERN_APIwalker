import { useState } from 'react';

const IdInput = ({ setInputValue }) => {
    const [inputText, setInputText] = useState('');

    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    const handleBlur = () => {
        setInputValue(inputText);
    };

    return (
        <>
            <div className="mb-3 row">
                <label htmlFor="id" className="col-sm-2 col-form-label">ID</label>
                <div className="col-sm-6">
                    <input
                        type="number"
                        className="form-control"
                        id="id"
                        value={inputText}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Select a Number"
                    />
                </div>
            </div>
        </>
    );
};

export default IdInput;