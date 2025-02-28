import camaroLogo from "./img/Camaro.jpeg";
import opalaLogo from "./img/Opala.jpeg";
import argoLogo from "./img/Argo.jpg";

export default function CarList() {
  const cars = [
    { name: "CT - Camaro", year: 1978, color: "Preto e amarelo", image: camaroLogo },
    { name: "CT - Opala", year: 1985, color: "Azul e branco", image: opalaLogo },
    { name: "CT - Argo", year: 2020, color: "Vermelho", image: argoLogo }
  ];

  return (
    <div
      style={{
        position: "fixed", // Garante que cubra toda a tela sem rolagem
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000", // Fundo preto total
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        color: "#fff", // Letras brancas
        gap: "50px"
      }}
    >
      {cars.map((car, index) => (
        <div key={index} className="flex items-center text-white gap-6">
          {/* Imagem do carro */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img
              src={car.image}
              alt={`Imagem do ${car.name}`}
              style={{ 
                width: "360px", 
                height: "240px", // Largura maior e altura ajustada
                border: "5px solid #fff", // Borda branca sólida
                borderRadius: "15px", // Bordas arredondadas
                boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)", // Sombra para efeito 3D
              }}
            />
            <div>
              <h2 className="text-xl font-bold">{car.name}</h2>
              <p className="text-gray-300">Ano: {car.year}</p>
              <p className="text-gray-300">Cor: {car.color}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
