'use server';

/**
 * @fileOverview Flow for fine-tuning the AI's simulation of a facelift using sliders.
 *
 * - fineTuneSimulation - A function that handles the fine-tuning process.
 * - FineTuneSimulationInput - The input type for the fineTuneSimulation function.
 * - FineTuneSimulationOutput - The return type for the fineTuneSimulation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FineTuneSimulationInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a face, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  slider1Value: z
    .number()
    .min(-1)
    .max(1)
    .describe('Value of slider 1, ranging from -1 to 1.'),
  slider2Value: z
    .number()
    .min(-1)
    .max(1)
    .describe('Value of slider 2, ranging from -1 to 1.'),
  slider3Value: z
    .number()
    .min(-1)
    .max(1)
    .describe('Value of slider 3, ranging from -1 to 1.'),
});
export type FineTuneSimulationInput = z.infer<typeof FineTuneSimulationInputSchema>;

const FineTuneSimulationOutputSchema = z.object({
  modifiedPhotoDataUri: z
    .string()
    .describe(
      "The modified photo of the face with the simulated facelift applied, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type FineTuneSimulationOutput = z.infer<typeof FineTuneSimulationOutputSchema>;

export async function fineTuneSimulation(
  input: FineTuneSimulationInput
): Promise<FineTuneSimulationOutput> {
  return fineTuneSimulationFlow(input);
}

const fineTuneSimulationPrompt = ai.definePrompt({
  name: 'fineTuneSimulationPrompt',
  input: {schema: FineTuneSimulationInputSchema},
  output: {schema: FineTuneSimulationOutputSchema},
  prompt: `You are an AI photo editor specializing in simulating soft facelifts. You will modify the provided photo based on the slider values. The slider values range from -1 to 1.

Slider 1 Value: {{{slider1Value}}}
Slider 2 Value: {{{slider2Value}}}
Slider 3 Value: {{{slider3Value}}}
Photo: {{media url=photoDataUri}}`,
  model: 'googleai/gemini-2.5-flash-image-preview',
  config: {
    responseModalities: ['TEXT', 'IMAGE'],
  },
});

const fineTuneSimulationFlow = ai.defineFlow(
  {
    name: 'fineTuneSimulationFlow',
    inputSchema: FineTuneSimulationInputSchema,
    outputSchema: FineTuneSimulationOutputSchema,
  },
  async input => {
    const {media} = await fineTuneSimulationPrompt(input);
    return {modifiedPhotoDataUri: media!.url!};
  }
);
