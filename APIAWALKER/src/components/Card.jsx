const Card = ({ data, error }) => {
    if (error || (!data || Object.keys(data).length === 0)) {

        return (
            <>
                <div className="row justify-content-md-center error">

                    <div className="col-md-auto">
                        <div className="card" style={{ width: '18rem' }}>
                            <h5>Estos no son los droides que estas buscando</h5>
                            <img className="card-img-top" src="https://ew.com/thmb/SB6FWBPXLFn_vLXiRRhoLzJBMzk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/revenge-of-the-sith-2000-8a98ad56e8834130969bddf9350671c7.jpg" alt="Obi-Wan Kenobi" />
                        </div>
                    </div>
                </div>
            </>
        );
    } else {

        const entries = Object.entries(data).slice(0, 5);
        return (
            <>
                <div className="row justify-content-md-center ">

                    <div className="col-md-auto">
                        <div className="card">
                            <div className="card-body">
                                <h1>{entries[0][1]}</h1>
                                {entries.slice(1).map(([key, value]) => (
                                    <p key={key} className="card-text">
                                        <strong>{key}:</strong> {value}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Card;
