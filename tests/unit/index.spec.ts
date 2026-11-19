import request from 'supertest';

import { app, SERVICE_NAME } from '../../src/app';

describe('project-a-be', () => {
  it('exports SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('project-a-be');
  });

  it('answers GET /health', async () => {
    const res = await request(app).get('/health');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
