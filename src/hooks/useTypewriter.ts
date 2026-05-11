import { useEffect, useRef } from "react";

export const useTypewriter = (
  words: string[],
  { typeSpeed = 80, deleteSpeed = 40, pauseTime = 1600 } = {},
) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const tick = () => {
      if (cancelled || !ref.current) return;
      const word = words[wordIndex % words.length];
      charIndex += deleting ? -1 : 1;
      ref.current.textContent = word.slice(0, charIndex);

      let delay = deleting ? deleteSpeed : typeSpeed;
      if (!deleting && charIndex === word.length) {
        delay = pauseTime;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex++;
        delay = 400;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 400);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [words, typeSpeed, deleteSpeed, pauseTime]);

  return ref;
};
