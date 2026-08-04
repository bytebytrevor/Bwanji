export function useReveal() {
  return {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4, // corresponds to --dur-medium
        ease: [0.32, 0.72, 0, 1] // corresponds to --ease-out-soft
      } 
    }
  };
}
