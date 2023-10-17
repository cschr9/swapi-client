"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

type ProfileInfoPillProps = {
  label: string;
  value?: string;
  requestUrlArray?: string[];
};

export const ProfileInfoPill = ({
  label,
  value,
  requestUrlArray,
}: ProfileInfoPillProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [displayValue, setDisplayValue] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (requestUrlArray && requestUrlArray.length > 0) {
      setIsLoading(true);
      Promise.all(
        requestUrlArray.map((url) =>
          axios.get(url).then((res) => res.data.name),
        ),
      )
        .then((values) => {
          setDisplayValue(values.join(", "));
          setIsLoading(false);
        })
        .catch((err) => {
          setError("Failed to fetch data");
          setIsLoading(false);
        });
    }
  }, [requestUrlArray]);

  return (
    <div className="inline-flex flex-col items-start space-y-0 rounded-lg bg-black/25 p-2">
      <p className="text-xs text-white/50">{label}</p>
      {isLoading ? (
        <Skeleton className="h-[10px] w-[72px] py-1" />
      ) : (
        <p className="text-sm text-white">
          {error || displayValue || (value ? value : "n/a")}
        </p>
      )}
    </div>
  );
};
