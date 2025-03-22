import CharacterRedactor from '../../components/character redactor/Redactor.jsx';
import EquipAdd from '../../components/equip add component/EquipAdd.jsx';
import EquipList from "../equip list page/equipList.jsx";
import { useState, useEffect } from "react";

export default function Home() {
    const [userItem, setUserItem] = useState([]); // Инициализация состояния userItem как пустого массива
    const [requirementsItem, setRequirementsItem] = useState([]);
    const [strengthImport, setStrengthImport] = useState(10); // Изменено на 10 вместо массива

    // Функция для удаления элемента
    const removeItem = (index) => {
        setUserItem(prevItems => prevItems.filter((_, i) => i !== index));
    };

    // Печать strengthImport при его обновлении
    useEffect(() => {
        console.log('Обновление strengthImport:', strengthImport);
    }, [strengthImport]); // Зависимость от strengthImport

    return (
        <>
            <CharacterRedactor strengthImport={strengthImport}
                               setStrengthImport={setStrengthImport}/>
            <EquipAdd userItem={userItem} removeItem={(index) => {
                const newItems = userItem.filter((_, i) => i !== index);
                setUserItem(newItems);
            }}
                      requirementsItem={requirementsItem}/>
            <EquipList userItem={userItem} setUserItem={setUserItem} requirementsItem={requirementsItem} setRequirementsItem={setRequirementsItem}/>
        </>
    );
}