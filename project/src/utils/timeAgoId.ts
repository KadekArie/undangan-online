export function timeAgoId(isoString: string): string {
  const now = new Date();
  const past = new Date(isoString);

  if (isNaN(past.getTime())) {
    return "";
  }

  const diffMs = now.getTime() - past.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);

  if (diffSeconds < 0) return "baru saja";

  const units = [
    { label: "tahun", seconds: 31536000 },
    { label: "bulan", seconds: 2592000 },
    { label: "hari", seconds: 86400 },
    { label: "jam", seconds: 3600 },
    { label: "menit", seconds: 60 },
    { label: "detik", seconds: 1 },
  ];

  for (const unit of units) {
    const value = Math.floor(diffSeconds / unit.seconds);
    if (value >= 1) {
      return `${value} ${unit.label} yang lalu`;
    }
  }

  return "baru saja";
}
