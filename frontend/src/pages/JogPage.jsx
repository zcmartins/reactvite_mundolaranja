import React from "react";
import { useParams } from "react-router-dom";
import jogadores from "../components/jogadores/jogadoresData";

const JogPage = () => {
    const { playerId } = useParams();

    // Encontre o jogador com base no playerId
    const jogador = jogadores.find(jogador => jogador.id === parseInt(playerId));

    if (!jogador) {
        return <p>Jogador não encontrado.</p>;
    }

    return (
        <div className="bg-gray-500 m-20 md:m-10 max-w-full rounded-xl p-4">
            <h2 className="text-white text-3xl font-bold mb-4">{jogador.first_name} {jogador.last_name}</h2>
            <div className="flex justify-center items-center">
                <img src={jogador.image} alt={`${jogador.first_name} ${jogador.last_name}`} className="w-72 h-72 object-cover rounded-full shadow-lg" />
            </div>
            <div className="mt-4 text-white">
                <p><strong>Posição:</strong> {jogador.position}</p>
                <p><strong>Altura:</strong> {jogador.height} ft</p>
                <p><strong>Peso:</strong> {jogador.weight} lbs</p>
                <p><strong>Número:</strong> {jogador.jersey_number}</p>
                <p><strong>Universidade:</strong> {jogador.college}</p>
                <p><strong>País:</strong> {jogador.country}</p>
                <p><strong>Ano do Draft:</strong> {jogador.draft_year}</p>
                <p><strong>Round do Draft:</strong> {jogador.draft_round}</p>
                <p><strong>Pick do Draft:</strong> {jogador.draft_number}</p>
                <p><strong>Time:</strong> {jogador.team.name}</p>
            </div>
        </div>
    );
};

export default JogPage;
