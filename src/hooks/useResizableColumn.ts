const useResizableColumn = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  setWidth: (newWidth: number) => void,
) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;

    // Remove transition
    ref.current.style.transition = "none";

    const initialWidth = ref.current.offsetWidth;
    const startX = e.clientX;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - startX;
      const newWidth = initialWidth + dx;

      // Adjust newWidth based on your constraints
      if (newWidth >= 240 && newWidth <= 500) setWidth(newWidth);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      // Restore transition after resizing
      ref.current!.style.transition = ""; // Re-enables transition
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return { handleMouseDown };
};

export default useResizableColumn;
