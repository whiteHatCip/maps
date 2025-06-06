import React from 'react';
import { render } from '@testing-library/react-native';

import CircleLayer from '../../src/components/CircleLayer';

describe('CircleLayer', () => {
  test('renders correctly with default props', () => {
    const { root: circleLayer } = render(
      <CircleLayer id="requiredCircleLayerID" />,
    );
    expect(circleLayer).toHaveProp('sourceID', 'DefaultSourceID');
  });

  test('renders correctly with custom props', () => {
    const customProps = {
      id: 'customId',
      sourceID: 'customSourceId',
      sourceLayerID: 'customSourceLayerId',
      aboveLayerID: 'customAboveLayerId',
      belowLayerID: 'customBelowLayerId',
      layerIndex: 0,
      filter: ['==', 'arbitraryFilter', true],
      minZoomLevel: 3,
      maxZoomLevel: 8,
      style: { visibility: 'none' },
    };

    const { UNSAFE_root: circleLayer } = render(
      <CircleLayer {...customProps} />,
    );
    const { props } = circleLayer;

    expect(props.id).toStrictEqual(customProps.id);
    expect(props.sourceID).toStrictEqual(customProps.sourceID);
    expect(props.sourceLayerID).toStrictEqual(customProps.sourceLayerID);
    expect(props.aboveLayerID).toStrictEqual(customProps.aboveLayerID);
    expect(props.belowLayerID).toStrictEqual(customProps.belowLayerID);
    expect(props.layerIndex).toStrictEqual(customProps.layerIndex);
    expect(props.filter).toStrictEqual(customProps.filter);
    expect(props.minZoomLevel).toStrictEqual(customProps.minZoomLevel);
    expect(props.maxZoomLevel).toStrictEqual(customProps.maxZoomLevel);
    expect(props.style).toStrictEqual(customProps.style);

    // abstract layer props
    expect(circleLayer.children[0].props.reactStyle).toStrictEqual({
      visibility: {
        styletype: 'constant',
        stylevalue: { type: 'string', value: customProps.style.visibility },
      },
    });
  });
});
