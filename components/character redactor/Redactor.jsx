import './redactor.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

import {useState} from "react";

export default function CharacterRedactor() {

    const [level, setLevel] = useState(1);
    const [vitality, setVitality] = useState(10);
    const [attunement, setAttunement] = useState(10);
    const [endurance, setEndurance] = useState(10);
    const [strength, setStrength] = useState(10);
    const [dexterity, setDexterity] = useState(10);
    const [resistance, setResistance] = useState(10);
    const [intelligence, setIntelligence] = useState(10);
    const [faith, setFaith] = useState(10);

    const hpValues = [ // - массив для хранения показателей здоровья на разных уровнях прокачки этого стата
        400,  // уровень 1
        415,  // уровень 2
        433,  // уровень 3
        451,  // уровень 4
        471,  // уровень 5
        490,  // уровень 6
        511,  // уровень 7
        530,  // уровень 8
        552,  // уровень 9
        572,  // уровень 10
        594,  // уровень 11
        616,  // уровень 12
        638,  // уровень 13
        658,  // уровень 14
        682,  // уровень 15
        698,  // уровень 16
        718,  // уровень 17
        742,  // уровень 18
        766,  // уровень 19
        792,  // уровень 20
        821,  // уровень 21
        849,  // уровень 22
        878,  // уровень 23
        908,  // уровень 24
        938,  // уровень 25
        970,  // уровень 26
        1001, // уровень 27
        1034, // уровень 28
        1066, // уровень 29
        1100, // уровень 30
        1123, // уровень 31
        1147, // уровень 32
        1170, // уровень 33
        1193, // уровень 34
        1216, // уровень 35
        1239, // уровень 36
        1261, // уровень 37
        1283, // уровень 38
        1304, // уровень 39
        1325, // уровень 40
        1346, // уровень 41
        1366, // уровень 42
        1386, // уровень 43
        1405, // уровень 44
        1424, // уровень 45
        1442, // уровень 46
        1458, // уровень 47
        1474, // уровень 48
        1489, // уровень 49
        1500, // уровень 50
        1508, // уровень 51
        1517, // уровень 52
        1526, // уровень 53
        1535, // уровень 54
        1544, // уровень 55
        1553, // уровень 56
        1562, // уровень 57
        1571, // уровень 58
        1580, // уровень 59
        1588, // уровень 60
        1597, // уровень 61
        1606, // уровень 62
        1615, // уровень 63
        1623, // уровень 64
        1632, // уровень 65
        1641,  // уровень 66
        1649, // уровень 67
        1658, // уровень 68
        1666, // уровень 69
        1675, // уровень 70
        1683, // уровень 71
        1692, // уровень 72
        1700, // уровень 73
        1709, // уровень 74
        1717, // уровень 75
        1725, // уровень 76
        1734, // уровень 77
        1742, // уровень 78
        1750, // уровень 79
        1758, // уровень 80
        1767, // уровень 81
        1775, // уровень 82
        1783, // уровень 83
        1791, // уровень 84
        1799, // уровень 85
        1807, // уровень 86
        1814, // уровень 87
        1822, // уровень 88
        1830, // уровень 89
        1837, // уровень 90
        1845, // уровень 91
        1852, // уровень 92
        1860, // уровень 93
        1867, // уровень 94
        1874, // уровень 95
        1881, // уровень 96
        1888, // уровень 97
        1894, // уровень 98
        1900  // уровень 99
    ];

    const enduranceValues = [
        81, 82, 83, 84, 85, 86, 87, 88, 90, 91,
        93, 95, 97, 98, 100, 102, 104, 106, 108, 110,
        112, 115, 117, 119, 121, 124, 126, 129, 131, 133,
        136, 139, 141, 144, 146, 149, 152, 154, 157, 160,
        160, 160, 160, 160, 160, 160, 160, 160, 160, 160
    ];  //

    const EquipLoadValues = [ 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0,
        51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0,
        61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0,
        71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0,
        81.0, 82.0, 83.0, 84.0, 85.0, 86.0, 87.0, 88.0, 89.0, 90.0,
        91.0, 92.0, 93.0, 94.0, 95.0, 96.0, 97.0, 98.0, 99.0, 100.0,
        101.0, 102.0, 103.0, 104.0, 105.0, 106.0, 107.0, 108.0, 109.0, 110.0,
        111.0, 112.0, 113.0, 114.0, 115.0, 116.0, 117.0, 118.0, 119.0, 120.0,
        121.0, 122.0, 123.0, 124.0, 125.0, 126.0, 127.0, 128.0, 129.0, 130.0,
        131.0, 132.0, 133.0, 134.0, 135.0, 136.0, 137.0, 138.0, 139.0, 140.0,
        141.0, 142.0, 143.0, 144.0, 145.0, 146.0, 147.0, 148.0, 149.0, 150.0
    ];

    const levelMain = [
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_level.png", signature: "level", num: level}
    ]

    const statsArray = [
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_vitality.png", signature: "vitality", num: vitality, plus: setVitality},
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_attunement.png", signature: "attunement", num: attunement, plus: setAttunement},
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_endurance.png", signature: "endurance", num: endurance, plus: setEndurance},
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_strength.png", signature: "strength", num: strength, plus: setStrength},
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_dexterity.png", signature: "dexterity", num: dexterity, plus: setDexterity},
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_resistance.png", signature: "resistance", num: resistance, plus: setResistance},
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_intelligence.png", signature: "intelligence", num: intelligence, plus: setIntelligence},
        {href: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_faith.png", signature: "faith", num: faith, plus: setFaith}
    ]

    const handleIncrease = (setStat) => {
        setStat((prev) => prev + 1);
        setLevel(level + 1);
    };

    const handleDecrease = (setStat) => {
        setStat((prev) => Math.max(prev - 1, 10));
        setLevel(level - 1);
    };

    let HP = hpValues[statsArray[0].num] // хп
    let stamina = enduranceValues[statsArray[2].num] // стамина
    const equipLoad = EquipLoadValues[statsArray[2].num] // грузоподьёмность

    return (
        <>
            <div className="redactorMain">
                <div className="redactorMainContent">
                    <div className="redactorCharacterName">
                        <input type="text" placeholder="Character Name"/>
                    </div>
                    <div className="redactorStats">
                        {levelMain.map((stat) => (
                            <div className="statsLevel" key={stat.signature}>
                                <img src={stat.href} alt={stat.signature}/>
                                <span>{stat.signature}</span>
                                <span> {level}</span>
                            </div>
                        ))}
                        {statsArray.map((stat) => (
                            <div className="stats" key={stat.signature}>
                                <img src={stat.href} alt={stat.signature}/>
                                <button onClick={() => handleIncrease(stat.plus)}><FontAwesomeIcon icon={faPlus}/>
                                </button>
                                <button onClick={() => handleDecrease(stat.plus)}><FontAwesomeIcon icon={faMinus}/>
                                </button>
                                <span>{stat.signature}</span>
                                <p>{stat.num}</p>
                            </div>
                        ))}
                        <div className="stats">
                            <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls-3/icon_hp.png"/>
                            <span>HP - {HP}</span>
                        </div>
                        <div className="stats">
                            <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls-3/icon_stamina.png"/>
                            <span>Stamina - {stamina}</span>
                        </div>
                        <div className="stats">
                            <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls-3/icon_equip_load.png"/>
                            <span>Equip Load - {equipLoad}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
