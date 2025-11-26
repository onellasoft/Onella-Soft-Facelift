'use server';
/**
 * @fileOverview Simulates a soft facelift on an uploaded photo using AI.
 *
 * - simulateSoftFacelift - A function that handles the soft facelift simulation process.
 * - SimulateSoftFaceliftInput - The input type for the simulateSoftFacelift function.
 * - SimulateSoftFaceliftOutput - The return type for the simulateSoftFacelift function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimulateSoftFaceliftInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a face, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  liftAmount: z
    .number()
    .min(0)
    .max(10)
    .default(5)
    .describe('The amount of lift to apply to the face (0-10).'),
});
export type SimulateSoftFaceliftInput = z.infer<typeof SimulateSoftFaceliftInputSchema>;

const SimulateSoftFaceliftOutputSchema = z.object({
  simulatedPhotoDataUri: z
    .string()
    .describe('The simulated facelift photo as a data URI.'),
});
export type SimulateSoftFaceliftOutput = z.infer<typeof SimulateSoftFaceliftOutputSchema>;

export async function simulateSoftFacelift(
  input: SimulateSoftFaceliftInput
): Promise<SimulateSoftFaceliftOutput> {
  return simulateSoftFaceliftFlow(input);
}

const simulateSoftFaceliftPrompt = ai.definePrompt({
  name: 'simulateSoftFaceliftPrompt',
  input: {schema: SimulateSoftFaceliftInputSchema},
  output: {schema: SimulateSoftFaceliftOutputSchema},
  prompt: `You are a skilled digital artist specializing in subtle facial enhancements.

  Using the provided photo and lift amount, simulate a soft facelift by making subtle changes to enhance the facial features, reduce wrinkles and make the subject look more youthful.
  Pay attention to the liftAmount. The higher the liftAmount, the stronger the effect should be.

  Return the enhanced image as a data URI.

  Lift Amount: {{{liftAmount}}}
  Photo: {{media url=photoDataUri}}
`,
  model: 'googleai/gemini-2.5-flash-image-preview',
  config: {
    responseModalities: ['TEXT', 'IMAGE'],
  },
});

const simulateSoftFaceliftFlow = ai.defineFlow(
  {
    name: 'simulateSoftFaceliftFlow',
    inputSchema: SimulateSoftFaceliftInputSchema,
    outputSchema: SimulateSoftFaceliftOutputSchema,
  },
  async input => {
    const {media} = await simulateSoftFaceliftPrompt(input);
    return {
      simulatedPhotoDataUri: media.url!,
    };
  }
);
