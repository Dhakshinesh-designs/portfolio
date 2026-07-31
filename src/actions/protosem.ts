'use server';

import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';

export type ActivityData = {
  heading: string;
  description: string;
  photos: string[];
};

export type WeekData = {
  week: number;
  date: string;
  activities: ActivityData[];
};

export async function getWeeksData(): Promise<WeekData[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'protosem', 'weeks.json');
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading weeks data:', error);
    return [];
  }
}

export async function getWeekData(week: number): Promise<WeekData | null> {
  const weeks = await getWeeksData();
  return weeks.find(w => w.week === week) || null;
}

export async function updateWeekData(updatedWeek: WeekData) {
  const filePath = path.join(process.cwd(), 'src', 'data', 'protosem', 'weeks.json');
  try {
    const weeks = await getWeeksData();
    const index = weeks.findIndex(w => w.week === updatedWeek.week);
    
    if (index !== -1) {
      weeks[index] = updatedWeek;
    } else {
      weeks.push(updatedWeek);
    }
    
    await fs.writeFile(filePath, JSON.stringify(weeks, null, 2), 'utf8');
    
    // Revalidate paths to ensure fresh data is shown
    revalidatePath('/protosem');
    revalidatePath(`/protosem/weeks/${updatedWeek.week}`);
    revalidatePath(`/protosem/weeks/week-${updatedWeek.week}`);
    
    return { success: true };
  } catch (error) {
    console.error('Error updating week data:', error);
    return { success: false, error: 'Failed to update data' };
  }
}
