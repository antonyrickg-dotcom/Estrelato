import { useRouter } from "next/router";

export default function Criar() {
  const router = useRouter();

  function criar() {
    const jogador = {
      nome: "Seu Jogador",
      overall: 70,
      temporada: 1
    };

    localStorage.setItem("carreira", JSON.stringify(jogador));
    router.push("/carreira");
  }

  return (
    <div style={{ padding: 50 }}>
      <h1>Criar Nova Carreira</h1>
      <button onClick={criar}>Criar jogador básico</button>
    </div>
  );
}
