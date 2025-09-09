function dateTimeFormat(isoDateTime: string | null | undefined, shortFormat = false): string {
  if (!isoDateTime) return "Invalid Date";

  try {
    const parsedDate = new Date(isoDateTime);
    if (isNaN(parsedDate.getTime())) return "Invalid Date";

    const now = new Date();
    const diffMs = now.getTime() - parsedDate.getTime();

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (shortFormat) {
      if (years > 0) return `${years}y`;
      if (months > 0) return `${months}m`;
      if (days > 0) return `${days}d`;
      if (hours > 0) return `${hours}h`;
      if (minutes > 0) return `${minutes}m`;
      if (seconds >= 1) return `${seconds}s`;
      return "Just now";
    } else {
      if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
      if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
      if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
      if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
      if (seconds >= 1) return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
      return "Just now";
    }
  } catch (e) {
    console.error(e);
    return "Invalid Date";
  }
}

module.exports = { datetimeformat };