import { registerPlugin } from '../lib/plugin';

const ImageSlider = () => <div>Image Slider Component</div>;

registerPlugin({
  name: 'ImageSlider',
  component: ImageSlider,
});
