'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getFuturisticIllustration } from '@/app/actions';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertTriangle, ServerCrash } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export function FuturisticIllustration() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIllustration() {
      try {
        setLoading(true);
        const result = await getFuturisticIllustration();
        if (result.success && result.url) {
          setImageUrl(result.url);
        } else {
          setError(result.error || 'An unknown error occurred.');
        }
      } catch (e) {
        setError('Failed to fetch illustration.');
      } finally {
        setLoading(false);
      }
    }
    fetchIllustration();
  }, []);

  if (loading) {
    return <Skeleton className="aspect-square w-full rounded-lg" />;
  }

  if (error) {
    return (
      <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-destructive/10 text-destructive">
        <div className="text-center">
          <ServerCrash className="mx-auto h-12 w-12" />
          <p className="mt-4 font-semibold">Illustration Failed</p>
          <p className="text-sm text-destructive/80">{error}</p>
        </div>
      </div>
    );
  }

  if (imageUrl) {
    return (
      <Image
        src={imageUrl}
        alt="Futuristic illustration of a digital idea concept"
        width={600}
        height={600}
        className="rounded-lg object-cover w-full h-full aspect-square shadow-2xl shadow-primary/20"
        priority
      />
    );
  }

  return null;
}
