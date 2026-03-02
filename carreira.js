export default function Carreira() {
  const carreira =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carreira"))
      : null;

  if (!carreira) return <h1>Nenhuma carreira carregada</h1>;

  return (
    <div style={{ padding: 50 }}>
      <h1>Painel da Carreira</h1>
      <p>Nome: {carreira.nome}</p>
      <p>Overall: {carreira.overall}</p>
      <p>Temporada: {carreira.temporada}</p>
    </div>
  );
}
