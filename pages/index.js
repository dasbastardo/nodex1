export default function Home({ time }) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Landing Page SSR 🚀</h1>
      <p>Waktu dari server:</p>
      <h2>{time}</h2>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toLocaleString(),
    },
  };
}