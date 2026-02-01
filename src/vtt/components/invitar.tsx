import { getPartidaLink } from "../../features/partida/use-cases/getPartidaLink";

interface InvitarProps {
  canInvite: boolean;
  partidaId: number;
}
export function Invitar({ canInvite, partidaId }: InvitarProps) {
  if (!canInvite) return null;
  const handleCopyLink = () => {
    const link = getPartidaLink(partidaId);
    navigator.clipboard.writeText(link);
    alert("Link copiado al portapapeles");
  };
  return <button onClick={handleCopyLink}>Compartir</button>;
}
