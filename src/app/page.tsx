"use client";

import { useState, useCallback } from "react";
import { fineTuneSimulation } from "@/ai/flows/fine-tune-simulation";
import { simulateSoftFacelift } from "@/ai/flows/simulate-soft-facelift";
import { Header } from "@/components/app/header";
import { PhotoUploader } from "@/components/app/photo-uploader";
import { SimulationView } from "@/components/app/simulation-view";
import { useToast } from "@/hooks/use-toast";
import type { SliderValues } from "@/components/app/simulation-view";

export default function Home() {
  const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
  const [simulatedPhoto, setSimulatedPhoto] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [isTuning, setIsTuning] = useState(false);
  const { toast } = useToast();

  const handlePhotoSelect = useCallback((dataUri: string) => {
    setOriginalPhoto(dataUri);
    setSimulatedPhoto(null);
  }, []);

  const handleSimulate = useCallback(async () => {
    if (!originalPhoto) return;

    setIsSimulating(true);
    try {
      const result = await simulateSoftFacelift({
        photoDataUri: originalPhoto,
        liftAmount: 5,
      });
      setSimulatedPhoto(result.simulatedPhotoDataUri);
    } catch (error) {
      console.error("Simulation failed:", error);
      toast({
        variant: "destructive",
        title: "Simulation Failed",
        description: "Could not generate the facelift simulation. Please try again.",
      });
    } finally {
      setIsSimulating(false);
    }
  }, [originalPhoto, toast]);

  const handleFineTune = useCallback(async (values: SliderValues) => {
    if (!originalPhoto) return;

    setIsTuning(true);
    try {
      const result = await fineTuneSimulation({
        photoDataUri: originalPhoto,
        slider1Value: values.jawline,
        slider2Value: values.tightening,
        slider3Value: values.volume,
      });
      setSimulatedPhoto(result.modifiedPhotoDataUri);
    } catch (error) {
      console.error("Fine-tuning failed:", error);
      toast({
        variant: "destructive",
        title: "Fine-tuning Failed",
        description: "Could not apply adjustments. Please try again.",
      });
    } finally {
      setIsTuning(false);
    }
  }, [originalPhoto, toast]);
  
  const handleDownload = useCallback(() => {
    if (!simulatedPhoto) return;
    const link = document.createElement("a");
    link.href = simulatedPhoto;
    link.download = "onella-simulation.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [simulatedPhoto]);

  const handleReset = useCallback(() => {
    setOriginalPhoto(null);
    setSimulatedPhoto(null);
    setIsSimulating(false);
    setIsTuning(false);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {simulatedPhoto && originalPhoto ? (
            <SimulationView
              originalPhoto={originalPhoto}
              simulatedPhoto={simulatedPhoto}
              onFineTune={handleFineTune}
              isTuning={isTuning}
              onDownload={handleDownload}
              onReset={handleReset}
            />
          ) : (
            <PhotoUploader
              onPhotoSelect={handlePhotoSelect}
              onSimulate={handleSimulate}
              isSimulating={isSimulating}
              selectedPhoto={originalPhoto}
            />
          )}
        </div>
      </main>
      <footer className="text-center py-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Onella. All rights reserved.</p>
      </footer>
    </div>
  );
}
