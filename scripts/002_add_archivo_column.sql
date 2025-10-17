-- Add archivo_url column to preventa_1 table
ALTER TABLE preventa_1 
ADD COLUMN archivo_url TEXT;

-- Add comment to describe the column
COMMENT ON COLUMN preventa_1.archivo_url IS 'URL del archivo o imagen cargada por el usuario';
