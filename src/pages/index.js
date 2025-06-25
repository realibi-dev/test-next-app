export default function Home() {
  return (
    <div style={{
      width: "100%",
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: 20
    }}>
      <span style={{
        fontSize: 30,
        fontWeight: "bold",
      }}>
        Hello world, this is Alibi's website!
      </span>
      <span>How are you?</span>
    </div>
  );
}
