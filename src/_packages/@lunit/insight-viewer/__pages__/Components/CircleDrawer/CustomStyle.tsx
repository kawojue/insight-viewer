import {
  CircleDrawer,
  CircleViewer,
  CornerstoneImage,
  CornerstoneSingleImage,
  InsightViewer,
  InsightViewerContainer,
  InsightViewerControllerOptions,
  InsightViewerTestController,
  installWADOImageLoader,
  unloadImage,
  useContour,
  useInsightViewerSync,
} from '@lunit/insight-viewer';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { labelFunction } from '../../../__fixtures__/circle';

installWADOImageLoader();

const controllerOptions: InsightViewerControllerOptions = {
  width: [600, 400, 1000],
  height: [700, 400, 1000],
  control: ['pen', ['none', 'pan', 'pen', 'adjust']],
  wheel: ['zoom', ['none', 'zoom']],
  flip: [false],
  invert: [false],
};

const CustomStyleDrawer = styled(CircleDrawer)`
  --contour-drawer-color: #ff0000;
  --contour-drawer-fill-color: rgba(255, 255, 255, 0.4);
  --contour-drawer-stroke-width: 7px;
`;

export default () => {
  const image: CornerstoneImage = useMemo(
    () =>
      new CornerstoneSingleImage(`wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm`, {
        unload: unloadImage,
      }),
    [],
  );

  const [divElement, setDivElement] = useState<HTMLDivElement | null>(null);

  const { cornerstoneRenderData, updateCornerstoneRenderData } = useInsightViewerSync();

  // create contour data and user drawing behaviors
  const { contours, focusedContour, addContour, removeContour, focusContour } = useContour({
    mode: 'circle',
  });

  return (
    <InsightViewerTestController options={controllerOptions}>
      {({ width, height, invert, flip, control, wheel, resetTime }) => (
        <InsightViewerContainer ref={setDivElement} width={width} height={height}>
          <InsightViewer
            width={width}
            height={height}
            invert={invert}
            flip={flip}
            pan={control === 'pan' && divElement}
            adjust={control === 'adjust' && divElement}
            zoom={wheel === 'zoom' && divElement}
            resetTime={resetTime}
            image={image}
            updateCornerstoneRenderData={updateCornerstoneRenderData}
          />
          {contours && contours.length > 0 && cornerstoneRenderData && (
            <CircleViewer
              width={width}
              height={height}
              contours={contours}
              focusedContour={focusedContour}
              cornerstoneRenderData={cornerstoneRenderData}
            />
          )}
          {contours && cornerstoneRenderData && control === 'pen' && (
            <CustomStyleDrawer
              width={width}
              height={height}
              contours={contours}
              draw={control === 'pen' && divElement}
              onFocus={focusContour}
              onAdd={contour => addContour(contour, { label: labelFunction })}
              onRemove={removeContour}
              cornerstoneRenderData={cornerstoneRenderData}
            />
          )}
        </InsightViewerContainer>
      )}
    </InsightViewerTestController>
  );
};
