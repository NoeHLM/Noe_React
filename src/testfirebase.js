import { useState, useEffect } from "react";
import { database } from "./database/firebase-config";
import { ref, get } from 'firebase/database';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const usersRef = ref(database, "users");
            try {
                const users = await get(usersRef);
                if (users.exists()) {
                    const data = users.val();
                    setUsers(Object.values(data));
                } else {
                    console.log("Aucune donnée trouvée.");
                }
            } catch (error) {
                console.error("Erreur lors de la lecture des données : ", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="App">
                {users.map((user, index) => (
                    <p key={index}>{user.name}</p>
                ))}
        </div>
    );
}

export default App;
