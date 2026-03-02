body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: radial-gradient(circle, #111, #000);
  color: white;
  text-align: center;
}

.container {
  padding-top: 80px;
}

.titulo {
  font-size: 42px;
  margin-bottom: 50px;
  letter-spacing: 2px;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.card {
  width: 220px;
  height: 300px;
  border-radius: 18px;
  background: linear-gradient(145deg, #0a0a0a, #222);
  border: 2px solid #3cff00;
  cursor: pointer;
  transition: 0.25s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 25px rgba(60,255,0,0.3);
}

.card:hover {
  transform: scale(1.07);
  box-shadow: 0 0 40px rgba(60,255,0,0.6);
}

.gold {
  border-color: gold;
  box-shadow: 0 0 25px rgba(255,215,0,0.4);
}

.gold:hover {
  box-shadow: 0 0 40px rgba(255,215,0,0.8);
}

.overall {
  font-size: 48px;
  font-weight: bold;
}

.nome {
  font-size: 20px;
  margin-top: 10px;
}

.info {
  font-size: 14px;
  opacity: 0.8;
}
