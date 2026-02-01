import { headers } from 'next/headers';

export default async function Home() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || 'Unknown';
  
  return (
    <main style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      fontFamily: 'system-ui',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: '#fff'
    }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🐊 Hello World!</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Deployed with Argo CD + k3s</p>
        
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.5rem', 
          background: 'rgba(255,255,255,0.1)', 
          borderRadius: '12px',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📊 Server Info</h2>
          <p>🕐 Server Time: {new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</p>
          <p>🖥️ Node: {process.version}</p>
          <p>📍 Hostname: {process.env.HOSTNAME || 'local'}</p>
        </div>
        
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.6 }}>
          v2.0.0 - With Server Info 🚀
        </p>
      </div>
    </main>
  );
}
