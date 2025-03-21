import CharacterRedactor from '../../components/character redactor/Redactor.jsx';
import EquipAdd from '../../components/equip add component/EquipAdd.jsx';
import EquipList from "../equip list page/equipList.jsx";
import { useState } from "react";

export default function Home() {
    const [userItem, setUserItem] = useState([]); // Инициализация состояния userItem как пустого массива

    // Функция для удаления элемента
    const removeItem = (index) => {
        setUserItem(prevItems => prevItems.filter((_, i) => i !== index));
    };

    return (
        <>
            <CharacterRedactor />
            <EquipList userItem={userItem} setUserItem={setUserItem} />
            <EquipAdd userItem={userItem} removeItem={(index) => {
                const newItems = userItem.filter((_, i) => i !== index);
                setUserItem(newItems);
            }} />
        </>
    );
}