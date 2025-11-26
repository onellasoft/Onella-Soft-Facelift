'use server';

/**
 * @fileOverview Generates a futuristic illustration for the "Who We Are?" section.
 *
 * - generateFuturisticIllustration - A function that generates the illustration.
 * - GenerateFuturisticIllustrationOutput - The return type for the generateFuturisticIllustration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFuturisticIllustrationOutputSchema = z.object({
  illustrationDataUri: z
    .string()
    .describe(
      "A futuristic illustration (abstract light bulb or digital idea concept) as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateFuturisticIllustrationOutput =
  z.infer<typeof GenerateFuturisticIllustrationOutputSchema>;

export async function generateFuturisticIllustration(): Promise<GenerateFuturisticIllustrationOutput> {
  return generateFuturisticIllustrationFlow();
}

const prompt = ai.definePrompt({
  name: 'generateFuturisticIllustrationPrompt',
  output: {schema: GenerateFuturisticIllustrationOutputSchema},
  prompt: `Generate a futuristic illustration (abstract light bulb or digital idea concept). Return the image as a data URI.  Ensure the image has a modern, high-tech aesthetic suitable for a digital marketing agency's "About Us" page. Adhere to these UI guidelines: primary color: hsl(211, 70%, 35%), background color: hsl(0, 0%, 0%), accent color: hsl(197, 78%, 52%). Use modern, outlined icons with subtle glowing effects.`,
});

const generateFuturisticIllustrationFlow = ai.defineFlow(
  {
    name: 'generateFuturisticIllustrationFlow',
    outputSchema: GenerateFuturisticIllustrationOutputSchema,
  },
  async () => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `Generate a futuristic illustration (abstract light bulb or digital idea concept). Ensure the image has a modern, high-tech aesthetic suitable for a digital marketing agency's "About Us" page. Adhere to these UI guidelines: primary color: hsl(211, 70%, 35%), background color: hsl(0, 0%, 0%), accent color: hsl(197, 78%, 52%). Use modern, outlined icons with subtle glowing effects.`,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate illustration.');
    }

    return {illustrationDataUri: media.url};
  }
);
