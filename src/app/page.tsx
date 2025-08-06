import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tighter mb-4">
            Welcome to CoinFlow
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            The simple, secure way to manage your crypto assets. Buy, trade, and monitor your portfolio with ease.
          </p>
          <Button asChild size="lg">
            <Link href="/dashboard">
              Go to Dashboard <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
