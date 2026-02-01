interface OverlayProps {
  children: React.ReactNode;
}

export function Overlay({ children }: OverlayProps) {
  return (
    <div
      className="overlay"
      style={{
        position: "absolute",
        top: 10,
        left: 10,
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      {children}
    </div>
  );
}
