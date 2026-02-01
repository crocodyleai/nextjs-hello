export default function Home() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'system-ui' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>🐊 Hello World!</h1>
        <p>Deployed with Argo CD + k3s</p>
      </div>
    </main>
  );
}
