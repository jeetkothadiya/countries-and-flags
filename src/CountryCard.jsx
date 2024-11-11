const CountryCard = ({name, flag}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "200px",
            width: "200px",
            border: "1px solid gray",
            borderRadius: "5px",
            margin: "10px",
            padding: "10px",
            textAlign: "center",
        }}>
            <img 
                src={flag} 
                alt={`Flag of ${name}`}
                style={{
                    width: "100px",
                    height: "100px",
                }}
            />
            <h2>{name}</h2>
        </div>

    );
}

export default CountryCard;