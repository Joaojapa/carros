import camaroLogo from "./img/Camaro.jpeg";
import opalaLogo from "./img/Opala.jpeg";
import argoLogo from "./img/Argo.jpg";

export default function CarList() {
  const cars = [
    { name: "CT - Camaro", year: 1978, color: "Preto e amarelo", image: camaroLogo },
    { name: "CT - Opala", year: 1985, color: "Roxo", image: opalaLogo },
    { name: "CT - Argo", year: 2020, color: "Branca", image: argoLogo }
  ];

  return (
    <div
      style={{
        position: "fixed", 
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        color: "#fff", 
        gap: "50px"
      }}
    >

      
      {cars.map((car, index) => (
        <div 
          key={index} 
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            padding: "15px",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "320px",
            marginBottom: "20px",
          }}
        >
          <img
            src={car.image}
            alt={`Imagem do ${car.name}`}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />
          <div style={{ padding: "10px 0", color: "#000" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>{car.name}</h2>
            <p style={{ color: "#555" }}>Ano: {car.year}</p>
            <p style={{ color: "#555" }}>Cor: {car.color}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
