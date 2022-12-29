import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    // Act
    // ...nothing

    // Assert
    const outputElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render good to see you if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).not.toBeInTheDocument();
  });
});

/**
 *  fetch 가 정상적으로 수행되었는 지를 테스트 해서는 안된다.
 *  - 서버에 테스트 요청을 보내면서 서버가 과부화 될 수 있다.
 *  - 테스트를 위한 불필요한 쿼리(데이터)가 서버에 저장될 수 있다.
 *
 *  응답을 받았을 때 컴포넌트가 제대로 동작하는지를 테스트하자.
 *  mock 데이터를 이용해서 테스트하자.
 *  window.fetch = jest.fn(); : mock data 를 생성해준다.
 *  window.fetch.mockResolvedValueOnce({
 *    json: async () => [{id: "p1", title: "first post"}]
 *  });
 */

// test("", async () => {
//   // render(<Testing/>)
//
//   window.fetch = jest.fn();
//   window.fetch.mockResolvedValueOnce({
//     json: async () => [{id: "p1", title: "first post"}]
//   });
//
//   const outputElement = await screen.findAllByRole("listitem");
//   expect(outputElement).not.toHaveLength(0);
// });
