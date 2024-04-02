
const SearchInput = ({ onSearch }) => {
    const handleClick = () => {
        onSearch();
    };

    return (
        <>
            <button type="button" className="btn btn-secondary" onClick={handleClick}>Search</button>
        </>
    );
};

export default SearchInput;