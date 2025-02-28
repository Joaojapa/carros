import camaroLogo from "./img/Camaro.jpeg";
import opalaLogo from "./img/Opala.jpeg";
import argoLogo from "./img/Argo.jpg";
import { useState } from "react";

export default function CarList() {
  const cars = [
    { name: "CT - Camaro", year: 1978, color: "Preto e amarelo", image: camaroLogo },
    { name: "CT - Opala", year: 1985, color: "Roxo", image: opalaLogo },
    { name: "FT - Argo", year: 2020, color: "Branca", image: argoLogo }
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
            color: "#000",
            textAlign: "center"
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
          <div style={{ padding: "8px 0", color: "#000", lineHeight: "1.2" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "3px" }}>
              {car.name}
            </h2>
            <p style={{ fontWeight: "bold", marginBottom: "2px" }}>
              Ano: <span style={{ fontWeight: "normal" }}>{car.year}</span>
            </p>
            <p style={{ fontWeight: "bold", marginBottom: "0" }}>
              Cor: <span style={{ fontWeight: "normal" }}>{car.color}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}


