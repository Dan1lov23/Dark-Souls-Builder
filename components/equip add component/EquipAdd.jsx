import './equipAdd.css';

export default function EquipAdd({ userItem, removeItem }) {
    return (
        <div className="equipAddMain">
            <div className="equipAddContainer">
                {userItem.map((item, index) => (
                    <div className="equipAdd" key={index}>
                        <button>
                            <img src={item.src} alt={item.name} />
                        </button>
                        <button onClick={() => removeItem(index)}>Удалить</button>
                    </div>
                ))}
            </div>
        </div>
    );
}