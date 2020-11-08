import Paper from '@material-ui/core/Paper';
import React from 'react';

export type TextElement = {
  type: 'text';
  properties: {
    'color'?: string;
    'font-family'?: string;
    'font-size'?: string;
    'font-style'?: string;
    'font-weight'?: string;
    'line-height'?: string;
    'letter-spacing'?: string;
    'height'?: string;
    'text-decoration'?: string;
    'text-transformation'?: string;
    'align'?: string;
    'container-background-color'?: string;
    'padding'?: string;
    'padding-top'?: string;
    'padding-bottom'?: string;
    'padding-left'?: string;
    'padding-right'?: string;
    'css-class'?: string;
  };
  children?: string;
};

export type PreviewTextProps = { className?: string; value: TextElement };

const PreviewText: React.FC<PreviewTextProps> = ({ className, value }) => {
  return (
    <Paper className={className} variant="outlined">
      {value.children ?? 'Put your text here'}
    </Paper>
  );
};

export default PreviewText;