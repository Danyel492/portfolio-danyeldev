// TODO esse codigo matrix eu importei pronto e fiz umas anotações
import React, { useRef, useEffect } from "react";

export const MatrixEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Ajusta o tamanho do canvas para preencher a tela
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = canvas.width / fontSize; // Número de colunas
    const drops = Array(Math.floor(columns)).fill(1); // Posição inicial das "gotas"

    // Caracteres relacionados à programação
    const programmingChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>[]{}()=+-*/%!&|^~";

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(21, 32, 44, 0.40)"; // Fundo com a cor #15202c e leve transparência
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#6ee2ff30"; // Cor do texto (verde Matrix)
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, x) => {
        // Seleciona um caractere aleatório da string
        const text = programmingChars[Math.floor(Math.random() * programmingChars.length)];
        ctx.fillText(text, x * fontSize, y * fontSize);

        // Reinicia a gota quando ela sai da tela ou aleatoriamente
        if (y * fontSize > canvas.height || Math.random() > 0.975) {
          drops[x] = 0;
        }

        drops[x]++;
      });
    };

    const interval = setInterval(drawMatrix, 60);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
};