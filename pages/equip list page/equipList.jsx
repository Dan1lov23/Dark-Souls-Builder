import './equipList.css';

export default function EquipList() {

    const weaponsTypes = [
        {
            // кинжалы и ножи (в оригинале дагеры)
            name: "Daggers",
            weapons: [
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Wpn_Dagger.png", name: "Dagger"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Wpn_Ghost_Blade.png", name: "Ghost Blade"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Wpn_Bandit's_Knife.png", name: "Bandit's Knife"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Wpn_Parrying_Dagger.png", name: "Parrying Dagger"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Wpn_Priscilla's_Dagger.png", name: "Priscilla's Dagger"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Dark%20Silver%20Tracer.png", name: "Silver Tracer"},
            ]
        },
        {
            // прямые мечи
            name: "Straight Swords",
            weapons: [
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/straight_sword_hilt.png", name: "Straight Sword Hilt"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Broken_Straight_Sword.png", name: "Broken Straight Sword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/broadsword.png", name: "Broadsword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/shortsword.png", name: "Shortsword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Longsword.png", name: "Longsword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/barbed_straight_sword.png", name: "Barbed Straight"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/sunlight_straight_sword.png", name: "Sunlight Straight sword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/balder_side_sword.png", name: "Balder Side sword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/astoras_straight_sword.png", name: "Astoras Straight Sword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/silv_knight_str_sword.png", name: "Silver Knight Straight Sword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Drake_Sword.png", name: "Drake Sword"},
                {src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Darksword.png", name: "Darksword"},
            ]
        }
    ];

    return (
        <>
            <div className="equipListMain">
                {weaponsTypes.map((weaponType, index) => (
                    <div key={index}>
                        <div className="weaponTypeNameTitle">
                            <h1>{weaponType.name}</h1>
                        </div>
                        <div className="equipListContainer">
                            {weaponType.weapons.map((weapon, weaponIndex) => (
                                <div className="weaponMain" key={weaponIndex}>
                                    <img src={weapon.src} alt={weapon.name} />
                                    <p>______________</p>
                                    <a href={`https://darksouls.wiki.fextralife.com/${weapon.name}`}>
                                        <span>{weapon.name}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}