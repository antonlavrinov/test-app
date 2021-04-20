import Slider from "../slider";
import * as SC from "./Screenshots";
import { useState } from "react";

const Screenshots = ({ screenshots }) => {
  const [fullScreenMode, setFullScreenMode] = useState<boolean>(false);
  const [currentScreenshot, setCurrentScreenshot] = useState<number>(0);

  const triggerFullScreen = (id: number): void => {
    setFullScreenMode(true);
    setCurrentScreenshot(id);
  };

  const closeFullScreen = (): void => {
    setFullScreenMode(false);
    setCurrentScreenshot(0);
  };

  return (
    <>
      <SC.Wrapper>
        {screenshots.map((screenshot, idx) => {
          return (
            <SC.Screenshot
              role="button"
              tabIndex="0"
              imageUrl={screenshot.image}
              onClick={() => triggerFullScreen(idx)}
              onKeyPress={() => triggerFullScreen(idx)}
              key={screenshot.id}
            ></SC.Screenshot>
          );
        })}
      </SC.Wrapper>
      {fullScreenMode && (
        <Slider
          closeFullScreen={closeFullScreen}
          currentScreenshot={currentScreenshot}
          screenshots={screenshots}
        />
      )}
    </>
  );
};

export default Screenshots;
