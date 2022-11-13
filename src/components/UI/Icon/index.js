import "./styles.scss";

const Icon = ({ name, size }) => {
    return (
        <div className="icon-container">
            <img src={`/images/icons/${name}.png`} alt={name + " icon"} height={size} width={size} />
        </div>
    );
};

export default Icon;
