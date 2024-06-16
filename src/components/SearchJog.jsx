import React, { useState } from 'react';
import axios from 'axios';

const SearchJog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/jogadores?search=${searchTerm}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Erro ao buscar jogadores:', error);
        }
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="px-40 pt-10">
            <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
                <input
                    type="text"
                    className="w-full h-10 px-4 text-white bg-transparent focus:outline-none"
                    placeholder="Digite o nome do jogador..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                    onClick={handleSearch}
                >
                    Pesquisar
                </button>
            </div>
            {searchResults.length > 0 && (
                <ul className="mt-4">
                    {searchResults.map((jogador) => (
                        <li key={jogador.id} className="text-white">
                            {jogador.nome}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchJog;
