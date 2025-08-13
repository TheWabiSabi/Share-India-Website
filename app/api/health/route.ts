import { NextResponse } from 'next/server';

export async function GET() {
  const startTime = Date.now();

  try {
    // Basic health check information
    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0',
      memory: {
        used: Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100,
        total: Math.round((process.memoryUsage().heapTotal / 1024 / 1024) * 100) / 100,
        external: Math.round((process.memoryUsage().external / 1024 / 1024) * 100) / 100,
      },
      pid: process.pid,
      platform: process.platform,
      nodeVersion: process.version,
      responseTime: `${Date.now() - startTime}ms`,
      deployment: {
        id: process.env.DEPLOYMENT_ID || 'unknown',
        sha: process.env.DEPLOYMENT_SHA || 'unknown',
        timestamp: process.env.DEPLOYMENT_TIMESTAMP || 'unknown',
        actor: process.env.DEPLOYMENT_ACTOR || 'unknown',
      },
    };

    return NextResponse.json(healthData, {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });
  } catch (error) {
    console.error('Health check failed:', error);

    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Health check failed',
        responseTime: `${Date.now() - startTime}ms`,
      },
      { status: 500 },
    );
  }
}

// Enhanced version with comprehensive checks
export async function POST() {
  return NextResponse.json(
    {
      status: 'error',
      message: 'Method not allowed',
      timestamp: new Date().toISOString(),
    },
    { status: 405 },
  );
}

// Handle other methods
export async function PUT() {
  return NextResponse.json(
    {
      status: 'error',
      message: 'Method not allowed',
      timestamp: new Date().toISOString(),
    },
    { status: 405 },
  );
}

export async function DELETE() {
  return NextResponse.json(
    {
      status: 'error',
      message: 'Method not allowed',
      timestamp: new Date().toISOString(),
    },
    { status: 405 },
  );
}
