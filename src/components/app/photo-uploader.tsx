"use client";

import Image from "next/image";
import { useCallback, useRef, useState, type ChangeEvent, type DragEvent } from "react";
import { Loader2, Sparkles, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

interface PhotoUploaderProps {
  onPhotoSelect: (dataUri: string) => void;
  onSimulate: () => void;
  isSimulating: boolean;
  selectedPhoto: string | null;
}

export function PhotoUploader({
  onPhotoSelect,
  onSimulate,
  isSimulating,
  selectedPhoto,
}: PhotoUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (file: File) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast({
        variant: "destructive",
        title: "Invalid File Type",
        description: "Please upload an image file.",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      onPhotoSelect(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFileChange(e.target.files?.[0] as File);
  };

  const handleDrag = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files[0]);
  };

  const beforePlaceholder = PlaceHolderImages.find(p => p.id === 'before-placeholder');

  return (
    <Card className="w-full transition-all duration-300 ease-in-out hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-headline">Start Your Simulation</CardTitle>
        <CardDescription>Upload a clear, front-facing photo of yourself to begin.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-square w-full rounded-lg overflow-hidden border-2 border-dashed border-border flex items-center justify-center bg-primary/20">
          <label
            htmlFor="photo-upload"
            className={cn(
              "w-full h-full flex flex-col items-center justify-center cursor-pointer transition-colors",
              isDragging ? "bg-accent/20" : "",
              selectedPhoto ? "" : "hover:bg-primary/40"
            )}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {selectedPhoto ? (
              <Image
                src={selectedPhoto}
                alt="Selected photo"
                width={800}
                height={800}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="text-center text-foreground/80 p-4">
                <UploadCloud className="w-16 h-16 mx-auto mb-4 text-accent" />
                <p className="font-semibold">Drag & drop your photo here</p>
                <p className="text-sm text-muted-foreground mt-1">or click to browse</p>
              </div>
            )}
            <input
              ref={inputRef}
              id="photo-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onInputChange}
            />
          </label>
        </div>
      </CardContent>
      <CardFooter className="flex-col sm:flex-row gap-4">
         <Button
            variant="outline"
            onClick={() => inputRef.current?.click()}
            className="w-full sm:w-auto"
          >
            {selectedPhoto ? "Change Photo" : "Choose Photo"}
          </Button>
        <Button
          onClick={onSimulate}
          disabled={!selectedPhoto || isSimulating}
          className="w-full sm:w-auto text-lg py-6 flex-grow bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          {isSimulating ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-5 w-5" />
          )}
          Simulate Facelift
        </Button>
      </CardFooter>
    </Card>
  );
}
