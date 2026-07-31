'use server';

import { writeFile } from 'fs/promises';
import path from 'path';

export async function uploadPhoto(formData: FormData) {
  const file = formData.get('file') as File;
  if (!file) {
    return { success: false, error: 'No file provided' };
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Use a unique name to avoid overwriting
  const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
  const filepath = path.join(process.cwd(), 'public', 'uploads', 'protosem', filename);

  try {
    await writeFile(filepath, buffer);
    return { success: true, url: `/uploads/protosem/${filename}` };
  } catch (error) {
    console.error('Error saving file:', error);
    return { success: false, error: 'Failed to save file' };
  }
}
