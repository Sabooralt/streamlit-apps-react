"use client";

import type React from "react";
import { FileX, Plus, Search } from "lucide-react";
import { Button } from "./ui/button";
import type { EmptyStateProps } from "../types/index";

const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon = FileX,
  title = "No items found",
  description = "There are no items to display at the moment.",
  actionLabel,
  onAction,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-12 text-center ${className}`}
    >
      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-md mb-6">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

// Specific empty states for different scenarios
interface RetryProps {
  onRetry: () => void;
}

export const NoApplicationsFound: React.FC<RetryProps> = ({ onRetry }) => {
  return (
    <EmptyState
      icon={Search}
      title="No applications found"
      description="We couldn't find any applications. This might be due to a connection issue or the applications haven't been loaded yet."
      actionLabel="Try Again"
      onAction={onRetry}
    />
  );
};

export const ApplicationLoadError: React.FC<RetryProps> = ({ onRetry }) => {
  return (
    <EmptyState
      icon={FileX}
      title="Failed to load application"
      description="There was an error loading the selected application. Please try again or select a different application."
      actionLabel="Retry"
      onAction={onRetry}
    />
  );
};

export const NoApplicationsSelected: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h3 className="text-lg font-medium text-muted-foreground mb-2">
          No Application Selected
        </h3>
        <p className="text-sm text-muted-foreground">
          Choose an application from the sidebar to get started
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
