'use server';

import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function uploadPhoto(formData: FormData) {
  const file = formData.get('file') as File;
  if (!file) {
    return { success: false, error: 'No file provided' };
  }
  
  if (file.size === 0) {
    return { success: false, error: 'File is empty' };
  }

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Use a unique name to avoid overwriting
    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'protosem');
    const filepath = path.join(uploadDir, filename);

    // Ensure the directory exists
    await mkdir(uploadDir, { recursive: true });

    await writeFile(filepath, buffer);
    return { success: true, url: `/uploads/protosem/${filename}` };
  } catch (error) {
    console.error('Error saving file:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Failed to save file' };
  }
}
