-- Create preventa_1 table for storing registration data
CREATE TABLE IF NOT EXISTS preventa_1 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  apellido TEXT NOT NULL,
  telefono TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_preventa_1_email ON preventa_1(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_preventa_1_created_at ON preventa_1(created_at DESC);
