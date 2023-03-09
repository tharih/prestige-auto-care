export const fetchSlider = async () => {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSlider`
    ).then((res) => res.json());
    const slider: any[] = result.slider;
    return slider;
  };
  