import type React from "react";
export interface Application {
  id: number;
  name: string;
  description: string;
  category: string;
  isActive: boolean;
  imageUrl?: string;
  url?: string;
}

export interface MetricDefinition {
  term: string;
  definition: string;
}

export interface EmptyStateProps {
  icon?: React.ComponentType<{ className?: string }>;
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export interface LoaderProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallbackMessage?: string;
  onRetry?: () => void;
}
