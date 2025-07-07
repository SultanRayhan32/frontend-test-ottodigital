import React from 'react';
import { render } from '@testing-library/react';
import CanvasImageEditor from './index';

test('renders CanvasImageEditor without crashing', () => {
  render(
    <CanvasImageEditor
      imageFile={null}
      dear=""
      from=""
      message=""
      setImageFile={() => {}}
      canvasRef={{ current: document.createElement('canvas') }}
    />
  );
});
