import { AppComponent } from './app.component';
import {render, screen} from "@testing-library/angular";

describe('AppComponent', () => {
  it('should render title', async () => {
    await render(AppComponent);
    const text = screen.getByText('focused-ui app is running!');
    expect(text).toBeInTheDocument();
  });
});
