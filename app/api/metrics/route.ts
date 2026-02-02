import { NextResponse } from 'next/server';
import { Registry, collectDefaultMetrics, Counter, Histogram } from 'prom-client';

// 싱글톤 레지스트리
const globalForProm = globalThis as unknown as { promRegistry: Registry };

if (!globalForProm.promRegistry) {
  globalForProm.promRegistry = new Registry();
  collectDefaultMetrics({ register: globalForProm.promRegistry });
  
  // 커스텀 메트릭
  new Counter({
    name: 'nextjs_http_requests_total',
    help: 'Total HTTP requests',
    labelNames: ['method', 'path', 'status'],
    registers: [globalForProm.promRegistry],
  });
  
  new Histogram({
    name: 'nextjs_http_request_duration_seconds',
    help: 'HTTP request duration in seconds',
    labelNames: ['method', 'path'],
    registers: [globalForProm.promRegistry],
  });
}

export async function GET() {
  const metrics = await globalForProm.promRegistry.metrics();
  return new NextResponse(metrics, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
