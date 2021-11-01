import { AppComponent } from './app.component';
import {render, screen} from "@testing-library/angular";

describe('AppComponent', () => {
  it('displays text passed in as a property', async () => {
    const initialState = {
      text: 'focused-ui app is running!'
    };

    await render(AppComponent, {
      componentProperties: {
        initialState: initialState
      }
    });

    const text = screen.getByText(initialState.text);
    expect(text).toBeInTheDocument();
  });
});
