export default function Services({ services }) {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial", textAlign: "center" }}>
      <h1>🌌 Our Cosmic Services</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {services.map((service, idx) => (
          <li key={idx} style={{ margin: "10px 0" }}>
            ⭐ {service}
          </li>
        ))}
      </ul>
      <a href="/" style={{ color: "blue", display: "inline-block", marginTop: "20px" }}>
        ← Back to Home
      </a>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      services: [
        "Spaceship Rental & Tours",
        "Galactic Logistics",
        "Satellite Deployment",
        "Asteroid Mining Consulting"
      ],
    },
  };
}
