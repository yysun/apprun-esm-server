import { app, View } from 'apprun';
import { State, Events } from './about.types';

const view: View<State> = state => <h1>
  {state}
</h1>;

export default (element, options) => {
  const state = 'About';
  app.start<State, Events>(element, state, view, {}, options);
};
