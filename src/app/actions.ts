// @/app/actions.ts
'use server';

import { generateFuturisticIllustration } from '@/ai/flows/generate-futuristic-illustration';

export async function getFuturisticIllustration() {
  try {
    const result = await generateFuturisticIllustration();
    return { success: true, url: result.illustrationDataUri };
  } catch (error) {
    console.error('Error generating illustration:', error);
    // In a real app, you might want to return a more specific error message
    return { success: false, error: 'Failed to generate illustration.' };
  }
}
