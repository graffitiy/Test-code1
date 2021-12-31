import { render } from "@testing-library/react";
import List from "./List";

test("목록에 할일이 없을 수 있다.", () => {
  const tasks = [];

  const { container } = render(<List tasks={tasks} />);

  expect(container).toHaveTextContent("할 일이 없어요!");
});

test("할일 목록을 확인할 수 있다.", () => {
  const tasks = [
    {
      id: 1,
      title: "일 하는척 하면서 쇼핑하기",
    },
    {
      id: 2,
      title: "주식 보기",
    },
    {
      id: 3,
      title: "뭐라도 하기",
    },
  ];

  const { container } = render(<List tasks={tasks} />);

  expect(container).not.toHaveTextContent("할 일이 없어요!");
  tasks.forEach((task) => {
    expect(container).toHaveTextContent(task.title);
  });
  expect(container.firstChild).toMatchSnapshot();
});
