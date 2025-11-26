"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { Download, Loader2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";

export interface SliderValues {
  jawline: number;
  tightening: number;
  volume: number;
}

interface SimulationViewProps {
  originalPhoto: string;
  simulatedPhoto: string;
  onFineTune: (values: SliderValues) => void;
  isTuning: boolean;
  onDownload: () => void;
  onReset: () => void;
}

export function SimulationView({
  originalPhoto,
  simulatedPhoto,
  onFineTune,
  isTuning,
  onDownload,
  onReset,
}: SimulationViewProps) {
  const [sliderValues, setSliderValues] = useState<SliderValues>({
    jawline: 0,
    tightening: 0,
    volume: 0,
  });

  const handleSliderChange = (name: keyof SliderValues, value: number[]) => {
    setSliderValues(prev => ({...prev, [name]: value[0]}));
  };

  const handleSliderCommit = useCallback(() => {
    onFineTune(sliderValues);
  }, [onFineTune, sliderValues]);

  const sliderControls = [
    { name: "jawline", label: "Jawline Contour", value: sliderValues.jawline, description: "Refines and sculpts the jawline for a more defined look." },
    { name: "tightening", label: "Skin Tightening", value: sliderValues.tightening, description: "Subtly lifts and firms the skin for a smoother appearance." },
    { name: "volume", label: "Volume Lift", value: sliderValues.volume, description: "Restores youthful volume to key areas like the cheeks." },
  ] as const;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-headline text-center font-semibold">Before</h2>
          <Card className="overflow-hidden">
            <Image
              src={originalPhoto}
              alt="Original photo"
              width={800}
              height={800}
              className="aspect-square object-cover w-full h-full"
            />
          </Card>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-headline text-center font-semibold">After</h2>
          <Card className="overflow-hidden aspect-square">
            {isTuning ? (
                <div className="relative w-full h-full">
                    <Skeleton className="w-full h-full" />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/50">
                        <Loader2 className="w-12 h-12 text-accent animate-spin" />
                    </div>
                </div>
            ) : (
                <Image
                src={simulatedPhoto}
                alt="Simulated photo"
                width={800}
                height={800}
                className="aspect-square object-cover w-full h-full"
                key={simulatedPhoto}
                />
            )}
          </Card>
        </div>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-headline">Fine-Tune Your Simulation</CardTitle>
          <CardDescription>Adjust the sliders to perfect your desired look.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pt-4">
          {sliderControls.map(control => (
            <div key={control.name} className="grid gap-3">
              <div className="flex justify-between items-center">
                <Label htmlFor={control.name} className="text-lg">{control.label}</Label>
                <span className="w-12 text-center text-sm font-medium tabular-nums bg-primary text-primary-foreground rounded-md px-2 py-1">
                    {control.value.toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground -mt-2">{control.description}</p>
              <Slider
                id={control.name}
                min={-1}
                max={1}
                step={0.05}
                value={[control.value]}
                onValueChange={(value) => handleSliderChange(control.name, value)}
                onValueCommit={handleSliderCommit}
                disabled={isTuning}
              />
            </div>
          ))}
        </CardContent>
      </Card>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={onDownload} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Download className="mr-2" /> Download Image
        </Button>
        <Button onClick={onReset} variant="outline" size="lg">
          <RotateCcw className="mr-2" /> Start Over
        </Button>
      </div>
    </div>
  );
}
