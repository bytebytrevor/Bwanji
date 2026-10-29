import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // Allow navigation to specific sections using URL hashes.
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));

      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
        return;
      }
    }

    // Start at the top when navigating to a new page.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, search, hash]);

  return null;
}
